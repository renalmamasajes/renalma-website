// =================================================================================
// CONFIGURACIÓN PRINCIPAL
// =================================================================================
const CONFIG = {
  CALENDAR_ID: "2433e1c8f8f054fc0c81d20d9d4b1a07b8d6f002415d2ee0ca7ad97ce6013324@group.calendar.google.com",
  SHEET_ID: "1AwwGsbkNXsxXaNYG1OgUesusNInk4O6cP9Qd55ZkuE0",
  SHEET_NAME: "Base de Datos Renalma",
  ADMIN_EMAILS: ["cisromi2006@gmail.com", "kgrafica@gmail.com"],
  BUSINESS_EMAIL_BCC: "renalmamasajes@gmail.com",
  HORARIO: {
    inicio: 9,
    fin: 19,
  },
  SLOT_INTERVAL: 30,
};

// =================================================================================
// LÓGICA DE MANEJO DE PETICIONES (NO TOCAR)
// =================================================================================

function doGet(e) {
  try {
    const params = e.parameter;
    const action = params.action;

    if (action === 'getAvailability') {
      const { serviceId, date } = params;
      if (!serviceId || !date) throw new Error("Faltan parámetros 'serviceId' y 'date'.");
      
      const availableTimes = getAvailableSlots(serviceId, date);
      return createJsonResponse({ success: true, data: availableTimes });
    }
    
    throw new Error("Acción no válida.");

  } catch (error) {
    Logger.log(`Error en doGet: ${error.message} - Stack: ${error.stack}`);
    return createJsonResponse({ success: false, error: error.message });
  }
}

function doPost(e) {
  try {
    const requestData = JSON.parse(e.postData.contents);
    const action = requestData.action;

    if (action === 'createBooking') {
      const bookingResult = createBooking(requestData);
      return createJsonResponse({ success: true, data: { bookingId: bookingResult.bookingId } });
    }

    throw new Error("Acción no válida.");

  } catch (error)
 {
    Logger.log(`Error en doPost: ${error.message} - Stack: ${error.stack}`);
    return createJsonResponse({ success: false, error: "Error interno del servidor: " + error.message });
  }
}

// =================================================================================
// LÓGICA PRINCIPAL DE LA APLICACIÓN
// =================================================================================

function getAvailableSlots(serviceId, dateStr) {
  const calendar = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
  const date = new Date(dateStr + "T00:00:00");
  
  // --- LISTA DE SERVICIOS ACTUALIZADA ---
  // Los IDs y duraciones ahora coinciden con los del archivo agenda.html
  const SERVICIOS = {
      'full_body': { duracion: 75 },
      'gluteos': { duracion: 60 },
      'piedras_calientes': { duracion: 90 },
      'drenaje_abdomen': { duracion: 60 },
      'drenaje_piernas': { duracion: 60 },
      'relajante': { duracion: 60 }
  };
  const service = SERVICIOS[serviceId];
  if (!service) throw new Error("ID de servicio no válido.");

  const serviceDuration = service.duracion;
  const events = calendar.getEventsForDay(date);
  
  const busySlots = events.map(event => ({
    start: event.getStartTime().getTime(),
    end: event.getEndTime().getTime()
  }));

  const availableSlots = [];
  const dayStart = new Date(date.setHours(CONFIG.HORARIO.inicio, 0, 0, 0));
  const dayEnd = new Date(date.setHours(CONFIG.HORARIO.fin, 0, 0, 0));
  
  let currentTime = dayStart;

  while (currentTime < dayEnd) {
    const slotStart = currentTime.getTime();
    const slotEnd = slotStart + serviceDuration * 60 * 1000;
    
    if (slotEnd > dayEnd.getTime()) break;

    const isOverlapping = busySlots.some(busySlot =>
      (slotStart < busySlot.end) && (slotEnd > busySlot.start)
    );

    if (!isOverlapping) {
      availableSlots.push(formatTimeHHMM(currentTime));
    }

    currentTime = new Date(currentTime.getTime() + CONFIG.SLOT_INTERVAL * 60 * 1000);
  }

  return availableSlots;
}

function createBooking(data) {
  const calendar = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    throw new Error(`No se pudo encontrar la hoja de cálculo con el nombre "${CONFIG.SHEET_NAME}".`);
  }

  const startTime = new Date(`${data.date}T${data.time}`);
  const endTime = new Date(startTime.getTime() + data.duration * 60000);
  const bookingId = `RM-${generateRandomString(8)}`;

  const eventTitle = `Reserva: ${data.serviceName} - ${data.client.nombre} ${data.client.apellido}`;
  const eventDescription = `ID de Reserva: ${bookingId}\nEstado: CONFIRMADO\n---\nCLIENTE:\nNombre: ${data.client.nombre} ${data.client.apellido}\nEmail: ${data.client.email}\nTeléfono: ${data.client.telefono}\n---\nSERVICIO:\nServicio: ${data.serviceName} (${data.duration} min)\nComentarios: ${data.client.comentarios || 'Ninguno'}`;
  calendar.createEvent(eventTitle, startTime, endTime, { description: eventDescription });
  
  sheet.appendRow([
    new Date(), bookingId, "CONFIRMADO", data.client.nombre, data.client.apellido,
    data.client.email, data.client.telefono, data.serviceName, startTime, data.time,
    data.duration, data.client.comentarios
  ]);

  sendConfirmationEmails(bookingId, data, startTime);
  
  return { bookingId: bookingId };
}


function sendConfirmationEmails(bookingId, data, startTime) {
    const clientEmail = data.client.email;
    const clientName = data.client.nombre;
    const adminEmails = CONFIG.ADMIN_EMAILS.join(',');

    // Asegúrate de que la URL del logo sea la correcta y esté accesible públicamente.
    const logoUrl = "https://renalmamasajes.github.io/files/265x86---logo-cabecera-.png";
    
    const subjectClient = `✨ Tu cita en Renalma está Confirmada (${bookingId})`;
    const bodyClient = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@300;400;600&display=swap');
        body { font-family: 'Poppins', Arial, sans-serif; margin: 0; padding: 0; background-color: #F1DEC9; }
        .container { max-width: 600px; margin: 20px auto; background-color: #FFFFFF; border-radius: 15px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 30px; }
        .header img { max-width: 200px; }
        h1 { font-family: 'Cormorant Garamond', Georgia, serif; color: #A4907C; font-size: 28px; text-align: center; margin: 0; }
        p { font-size: 16px; line-height: 1.7; color: #3C3633; }
        .details-box { background-color: #F8F5F2; border: 1px solid #E4D4C8; border-radius: 10px; padding: 25px; margin: 30px 0; }
        .details-box h3 { font-family: 'Cormorant Garamond', Georgia, serif; color: #8D7B68; margin-top: 0; font-size: 20px; border-bottom: 1px solid #E4D4C8; padding-bottom: 10px; }
        .details-box p { margin: 10px 0; }
        strong { color: #3C3633; }
        .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #8D7B68; }
        .footer a { color: #8D7B68; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <a href="#"><img src="${logoUrl}" alt="Logo de Renalma"></a>
        </div>
        <h1>¡Tu Cita está Confirmada!</h1>
        <p>Hola, <strong>${clientName}</strong>,</p>
        <p>Es un placer confirmarte que tu momento sagrado en Renalma ha sido agendado con éxito. ¡Te esperamos con mucha ilusión para que disfrutes de tu experiencia de bienestar!</p>
        <div class="details-box">
          <h3>Detalles de tu Reserva</h3>
          <p><strong>Código de Reserva:</strong> ${bookingId}</p>
          <p><strong>Servicio:</strong> ${data.serviceName}</p>
          <p><strong>Fecha:</strong> ${startTime.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
          <p><strong>Hora:</strong> ${data.time} hrs.</p>
        </div>
        <p>Si por alguna razón necesitas reagendar o cancelar tu cita, por favor contáctanos con al menos 24 horas de antelación para que podamos atender tu solicitud.</p>
        <p>Con cariño,<br><strong>El equipo de Renalma</strong></p>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Renalma | Todos los derechos reservados.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    MailApp.sendEmail({
      to: clientEmail,
      bcc: CONFIG.BUSINESS_EMAIL_BCC,
      subject: subjectClient,
      htmlBody: bodyClient,
      name: "Equipo Renalma"
    });

    // Correo para Administradores (notificación interna)
    const subjectAdmin = `Nueva Reserva Confirmada: ${data.serviceName} - ${clientName} ${data.client.apellido}`;
    const bodyAdmin = `
      <p>Se ha realizado y confirmado una nueva reserva:</p>
      <ul>
        <li><strong>Cliente:</strong> ${data.client.nombre} ${data.client.apellido}</li>
        <li><strong>Email:</strong> ${data.client.email}</li>
        <li><strong>Teléfono:</strong> ${data.client.telefono}</li>
        <li><strong>Servicio:</strong> ${data.serviceName}</li>
        <li><strong>Fecha y Hora:</strong> ${startTime.toLocaleString('es-CL')}</li>
        <li><strong>ID de Reserva:</strong> ${bookingId}</li>
      </ul>
    `;
    if (adminEmails) {
        MailApp.sendEmail(adminEmails, subjectAdmin, "", { htmlBody: bodyAdmin });
    }
}


// =================================================================================
// FUNCIONES DE UTILIDAD (NO TOCAR)
// =================================================================================

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getScriptUrl() {
  return ScriptApp.getService().getUrl();
}

function formatTimeHHMM(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}