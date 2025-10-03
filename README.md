# Sitio Web Renalma - Guía de Instalación y Configuración

## 📋 Descripción del Proyecto

Este es el sitio web completo para **Renalma**, un centro de masajes y bienestar holístico. El sitio incluye páginas individuales para cada servicio, sistema de agendamiento original intacto, galería, tips de bienestar y más, con **alta interactividad** y efectos visuales modernos.

## ✨ Características Principales

**Interactividad Avanzada:**
- Animaciones suaves al hacer scroll con Intersection Observer
- Efectos hover sofisticados con transformaciones CSS
- Transiciones fluidas usando cubic-bezier para mayor naturalidad
- Micro-interacciones en botones y tarjetas
- Efectos parallax sutiles en secciones hero
- Navegación móvil con animaciones deslizantes
- Partículas flotantes y efectos de shimmer

**Diseño Responsivo:**
- Optimizado para dispositivos móviles, tablets y desktop
- Navegación adaptativa con menú hamburguesa interactivo
- Imágenes y contenido que se adapta fluidamente
- Tipografía escalable y legible en todos los tamaños

**Experiencia de Usuario:**
- Sin referencias a venta de productos (enfoque en servicios)
- Sistema de agendamiento original preservado
- URLs amigables configuradas con .htaccess
- Página 404 personalizada
- Carga rápida y optimizada

## 🗂️ Estructura del Sitio

```
renalma-website/
├── index.html                    # Página principal (altamente interactiva)
├── masajes.html                  # Listado de todos los masajes
├── agenda.html                   # Sistema de agendamiento (ORIGINAL INTACTO)
├── tips.html                     # Tips astrales y flor terapia (interactivo)
├── galeria.html                  # Galería de fotos (con filtros)
├── contacto.html                 # Información de contacto
├── 404.html                      # Página de error personalizada
├── .htaccess                     # Configuración de URLs amigables
├── GS-CONSERVICIOS.js           # Backend de servicios (Google Apps Script)
├── README.md                     # Este archivo
├── GUIA-GITHUB.md               # Guía específica para GitHub
└── masajes/                      # Páginas individuales de masajes (interactivas)
    ├── full-body-energetico.html
    ├── levantamiento-gluteos.html
    ├── piedras-calientes.html
    ├── drenaje-abdominal.html
    ├── drenaje-piernas.html
    └── masajerelajacion.html
```

## 🌐 URLs del Sitio

Con la configuración incluida, el sitio funcionará con estas URLs:

- **Página principal:** `www.renalma.cl`
- **Masajes:** `www.renalma.cl/masajes`
- **Tips:** `www.renalma.cl/tips`
- **Galería:** `www.renalma.cl/galeria`
- **Contacto:** `www.renalma.cl/contacto`
- **Agenda:** `www.renalma.cl/agenda`
- **Masajes individuales:**
  - `www.renalma.cl/full-body-energetico`
  - `www.renalma.cl/levantamiento-gluteos`
  - `www.renalma.cl/piedras-calientes`
  - `www.renalma.cl/drenaje-abdominal`
  - `www.renalma.cl/drenaje-piernas`
  - `www.renalma.cl/masajerelajacion`

## 🚀 Instalación en Servidor Web

### Opción 1: Servidor con cPanel

1. **Accede a tu cPanel**
2. **Ve a "Administrador de archivos"**
3. **Navega a la carpeta `public_html`**
4. **Sube todos los archivos** del proyecto a esta carpeta
5. **Asegúrate de que el archivo `.htaccess` esté presente**

### Opción 2: Servidor por FTP

1. **Conecta por FTP** a tu servidor
2. **Navega a la carpeta raíz** del dominio (usualmente `public_html` o `www`)
3. **Sube todos los archivos** manteniendo la estructura de carpetas
4. **Verifica permisos:** archivos 644, carpetas 755

### Opción 3: GitHub Pages (Gratuito)

1. **Crea un repositorio** en GitHub llamado `renalma-website`
2. **Sube todos los archivos** al repositorio
3. **Ve a Settings > Pages**
4. **Selecciona "Deploy from a branch"**
5. **Elige "main branch"**
6. **Tu sitio estará disponible** en `https://tuusuario.github.io/renalma-website`

## 📝 Configuración de Contenido

### Editar Textos de las Páginas

Cada página HTML tiene secciones claramente marcadas que puedes editar:

#### 1. Página Principal (index.html)
```html
<!-- Busca estas secciones para editar: -->
<h1 class="hero-title">Un Refugio para tu Bienestar</h1>
<p class="hero-subtitle">Texto descriptivo aquí...</p>

<!-- Para cambiar servicios, busca: -->
<div class="service-card-content">
    <h3 class="service-card-title">Nombre del Servicio</h3>
    <p>Descripción del servicio...</p>
</div>
```

#### 2. Páginas de Masajes Individuales
Cada archivo de masaje tiene estas secciones editables:
```html
<!-- Título principal -->
<h1 class="hero-title">Nombre del Masaje</h1>

<!-- Descripción principal -->
<p class="section-text">Descripción detallada...</p>

<!-- Beneficios -->
<div class="benefit-item">
    <strong>Beneficio:</strong> Descripción del beneficio
</div>
```

#### 3. Tips (tips.html)
Los tips están organizados por categorías. Para agregar nuevos:
```html
<div class="tip-card animate-on-scroll">
    <div class="tip-header">
        <span class="tip-icon">🌸</span>
        <h3 class="tip-title">Título del Tip</h3>
    </div>
    <div class="tip-content">
        <p class="tip-description">Descripción...</p>
        <div class="tip-steps">
            <div class="tip-step">Paso 1...</div>
            <div class="tip-step">Paso 2...</div>
        </div>
    </div>
</div>
```

### Cambiar Imágenes

Las imágenes están alojadas en GitHub. Para cambiar:

1. **Sube nuevas imágenes** a tu repositorio en GitHub
2. **Obtén la URL directa** de la imagen
3. **Reemplaza las URLs** en los archivos HTML:
```html
<!-- Busca líneas como esta: -->
<img src="https://renalmamasajes.github.io/files/imagen.jpg" alt="Descripción">

<!-- Y reemplaza con tu nueva URL: -->
<img src="https://tu-repositorio.github.io/files/nueva-imagen.jpg" alt="Descripción">
```

### Configurar Información de Contacto

En `contacto.html`, busca y edita:
```html
<!-- Email -->
<a href="mailto:renalmamasajes@gmail.com">tu-email@dominio.com</a>

<!-- Teléfono -->
<a href="tel:+56935896293">+56 9 XXXX XXXX</a>

<!-- Dirección -->
<p>Tu dirección completa</p>
```

## ⚙️ Configuración Avanzada

### Sistema de Agendamiento (IMPORTANTE)

**El archivo `agenda.html` y `GS-CONSERVICIOS.js` se mantienen ORIGINALES** como solicitaste. No se han modificado para preservar la funcionalidad existente.

### Configurar Google Apps Script (Backend)

1. **Abre Google Apps Script** (script.google.com)
2. **Crea un nuevo proyecto**
3. **Pega el contenido** de `GS-CONSERVICIOS.js`
4. **Configura los triggers** necesarios
5. **Obtén la URL del script** y actualízala en `agenda.html` si es necesario

### Configurar Formulario de Contacto

Para que el formulario funcione, necesitas:

1. **Un servicio de formularios** como Formspree, Netlify Forms, o EmailJS
2. **Actualizar el action** del formulario en `contacto.html`:
```html
<form action="https://formspree.io/f/tu-id" method="POST">
```

### Configurar Analytics

Agrega Google Analytics antes del `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🎨 Personalización de Diseño

### Cambiar Colores

Los colores están definidos en variables CSS al inicio de cada archivo:

```css
:root {
    --primary-color: #A4907C;      /* Color principal */
    --secondary-color: #8D7B68;    /* Color secundario */
    --text-color: #3C3633;         /* Color del texto */
    --bg-color: #F1DEC9;           /* Color de fondo */
    --white-color: #FFFFFF;        /* Blanco */
}
```

Para cambiar colores, modifica estos valores en todos los archivos HTML.

### Personalizar Animaciones

Las animaciones están configuradas con CSS y JavaScript. Para modificar:

```css
/* Cambiar duración de animaciones */
.animate-on-scroll {
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Modifica aquí */
}

/* Cambiar efectos hover */
.service-card:hover { 
    transform: translateY(-20px) scale(1.02); /* Ajusta valores */
}
```

### Desactivar Animaciones (si es necesario)

Para desactivar las animaciones, añade este CSS:
```css
* {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
}
```

## 📱 Responsive Design

El sitio está completamente optimizado para móviles. Las breakpoints principales son:

- **Desktop:** > 900px
- **Tablet:** 600px - 900px  
- **Mobile:** < 600px

## 🔍 SEO y Optimización

### Meta Tags Incluidos

Cada página incluye:
- Meta description optimizada
- Open Graph tags para redes sociales
- Meta viewport para móviles
- Títulos optimizados para SEO

### Sitemap (Opcional)

Crea un archivo `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://renalma.cl/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://renalma.cl/masajes</loc>
    <priority>0.8</priority>
  </url>
  <!-- Agrega más URLs -->
</urlset>
```

## 🛠️ Mantenimiento

### Actualizaciones Regulares

1. **Revisa enlaces rotos** mensualmente
2. **Actualiza contenido** de tips y servicios
3. **Optimiza imágenes** para mejor rendimiento
4. **Revisa formularios** de contacto

### Backup

1. **Descarga todos los archivos** regularmente
2. **Guarda una copia** en tu computadora
3. **Considera usar Git** para control de versiones

## 🎯 Características de Interactividad Implementadas

### Animaciones CSS Avanzadas
- **Keyframes personalizados** para fadeIn, float, pulse
- **Cubic-bezier timing functions** para transiciones naturales
- **Transform y scale effects** en hover states
- **Gradient overlays** con opacity transitions

### JavaScript Interactivo
- **Intersection Observer** para animaciones al scroll
- **Smooth scrolling** para navegación interna
- **Mobile menu animations** con slide effects
- **Parallax effects** sutiles en hero sections

### Efectos Visuales
- **Box-shadow transitions** con múltiples capas
- **Border animations** con gradient backgrounds
- **Icon rotations** y scale effects
- **Shimmer effects** en botones

### Micro-interacciones
- **Button hover states** con transform effects
- **Card lift animations** en hover
- **Icon bounce effects** en scroll indicators
- **Gradient text effects** en títulos principales

## 📞 Soporte

Si necesitas ayuda con la configuración:

1. **Revisa este README** completamente
2. **Verifica que todos los archivos** estén subidos correctamente
3. **Comprueba permisos** de archivos en el servidor
4. **Revisa logs de error** del servidor si algo no funciona

## 📄 Licencia

Este proyecto fue creado específicamente para Renalma. Todos los derechos reservados.

---

**¡Tu sitio web interactivo está listo para brillar! ✨**

Recuerda que este es un sitio profesional y completamente funcional con alta interactividad. Solo necesitas subirlo a tu servidor y hacer las personalizaciones que desees. La agenda original se mantiene intacta como solicitaste.
