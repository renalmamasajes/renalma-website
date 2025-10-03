# 🚀 Guía Paso a Paso: Subir Renalma a GitHub y Activar GitHub Pages

Esta guía te llevará paso a paso para subir tu sitio web a GitHub y activar el hosting gratuito.

## 📋 Requisitos Previos

- Una cuenta en GitHub (gratuita)
- Los archivos del sitio web de Renalma
- Navegador web

## 🔧 Paso 1: Crear Cuenta en GitHub (si no tienes)

1. Ve a [github.com](https://github.com)
2. Haz clic en **"Sign up"**
3. Completa el formulario con:
   - Username: `renalma-masajes` (o el que prefieras)
   - Email: tu email
   - Password: una contraseña segura
4. Verifica tu email

## 📁 Paso 2: Crear el Repositorio

1. **Inicia sesión** en GitHub
2. Haz clic en el **botón verde "New"** (o el ícono + en la esquina superior derecha)
3. **Configura el repositorio:**
   - Repository name: `renalma-website`
   - Description: `Sitio web oficial de Renalma - Masajes y Bienestar`
   - Selecciona **"Public"** (para GitHub Pages gratuito)
   - ✅ Marca **"Add a README file"**
   - ✅ Marca **"Add .gitignore"** y selecciona "None"
4. Haz clic en **"Create repository"**

## 📤 Paso 3: Subir los Archivos

### Opción A: Subida por Navegador (Más Fácil)

1. **En tu repositorio recién creado**, haz clic en **"uploading an existing file"**
2. **Arrastra y suelta** todos los archivos del sitio web:
   ```
   ✅ index.html
   ✅ masajes.html
   ✅ agenda.html
   ✅ tips.html
   ✅ galeria.html
   ✅ contacto.html
   ✅ 404.html
   ✅ .htaccess
   ✅ GS-CONSERVICIOS.js
   ✅ README.md
   ✅ full-body-energetico.html
   ✅ levantamiento-gluteos.html
   ✅ piedras-calientes.html
   ✅ drenaje-abdominal.html
   ✅ drenaje-piernas.html
   ✅ masajerelajacion.html
   ```
3. **Escribe un mensaje** de commit: `Subir sitio web completo de Renalma`
4. Haz clic en **"Commit changes"**

### Opción B: Subida por Git (Avanzado)

Si prefieres usar Git desde la línea de comandos:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/renalma-website.git
cd renalma-website

# Copiar todos los archivos del sitio web a esta carpeta
# Luego:
git add .
git commit -m "Subir sitio web completo de Renalma"
git push origin main
```

## 🌐 Paso 4: Activar GitHub Pages

1. **En tu repositorio**, ve a la pestaña **"Settings"**
2. **Desplázate hacia abajo** hasta encontrar **"Pages"** en el menú lateral
3. **En "Source"**, selecciona **"Deploy from a branch"**
4. **En "Branch"**, selecciona **"main"**
5. **En "Folder"**, deja **"/ (root)"**
6. Haz clic en **"Save"**

## ⏱️ Paso 5: Esperar la Activación

1. **GitHub procesará** tu sitio (puede tomar 5-10 minutos)
2. **Recibirás una URL** como: `https://tu-usuario.github.io/renalma-website`
3. **Visita la URL** para ver tu sitio en vivo

## 🔗 Paso 6: Configurar Dominio Personalizado (Opcional)

Si tienes un dominio como `renalma.cl`:

1. **En la sección Pages** (donde activaste GitHub Pages)
2. **En "Custom domain"**, escribe: `renalma.cl`
3. Haz clic en **"Save"**
4. **En tu proveedor de dominio**, configura estos DNS:
   ```
   Tipo: CNAME
   Nombre: www
   Valor: tu-usuario.github.io
   
   Tipo: A
   Nombre: @
   Valor: 185.199.108.153
   Valor: 185.199.109.153
   Valor: 185.199.110.153
   Valor: 185.199.111.153
   ```

## ✅ Verificación Final

Tu sitio debería estar funcionando en:
- `https://tu-usuario.github.io/renalma-website` (GitHub Pages)
- `https://renalma.cl` (si configuraste dominio personalizado)

### URLs que deberían funcionar:
- ✅ Página principal: `/`
- ✅ Masajes: `/masajes`
- ✅ Tips: `/tips`
- ✅ Galería: `/galeria`
- ✅ Contacto: `/contacto`
- ✅ Agenda: `/agenda`
- ✅ Masajes individuales: `/masajerelajacion`, `/full-body-energetico`, etc.

## 🔄 Cómo Actualizar el Sitio

### Para cambios pequeños:
1. **Ve a tu repositorio** en GitHub
2. **Haz clic en el archivo** que quieres editar
3. **Haz clic en el ícono del lápiz** (Edit)
4. **Realiza los cambios**
5. **Scroll hacia abajo** y escribe un mensaje de commit
6. Haz clic en **"Commit changes"**

### Para cambios grandes:
1. **Descarga todos los archivos** del repositorio
2. **Edita los archivos** en tu computadora
3. **Sube los archivos actualizados** siguiendo el Paso 3

## 🎨 Personalización Rápida

### Cambiar Colores
Edita las variables CSS en cada archivo HTML:
```css
:root {
    --primary-color: #A4907C;      /* Cambia este color */
    --secondary-color: #8D7B68;    /* Y este también */
}
```

### Cambiar Textos
Busca y edita directamente en los archivos HTML:
- Títulos: `<h1>`, `<h2>`, `<h3>`
- Párrafos: `<p>`
- Botones: `<button>` o `<a class="btn">`

### Cambiar Imágenes
1. **Sube nuevas imágenes** a tu repositorio
2. **Edita las URLs** en los archivos HTML:
```html
<img src="https://tu-usuario.github.io/renalma-website/nueva-imagen.jpg">
```

## 🆘 Solución de Problemas

### El sitio no se ve bien
- ✅ Verifica que todos los archivos se subieron correctamente
- ✅ Espera 10-15 minutos para que GitHub procese los cambios
- ✅ Limpia la caché del navegador (Ctrl+F5)

### Las URLs no funcionan sin .html
- ✅ Asegúrate de que el archivo `.htaccess` esté subido
- ✅ Nota: GitHub Pages no soporta `.htaccess`, pero las URLs principales funcionarán

### El formulario de contacto no funciona
- ✅ Configura un servicio como Formspree (ver README.md)
- ✅ Actualiza el `action` del formulario

### Los precios no se muestran/ocultan
- ✅ Edita el CSS en `agenda.html` (ver README.md)

## 📞 Recursos Adicionales

- **Documentación GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Ayuda GitHub:** [docs.github.com](https://docs.github.com)
- **Configurar dominio:** [docs.github.com/pages/configuring-a-custom-domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 🎉 ¡Felicitaciones!

Tu sitio web profesional de Renalma ya está en línea y funcionando. Ahora puedes:

1. **Compartir la URL** con tus clientes
2. **Actualizar contenido** cuando necesites
3. **Agregar nuevos servicios** fácilmente
4. **Recibir reservas** a través del sistema de agenda

---

**¿Necesitas ayuda?** Revisa el archivo `README.md` para instrucciones más detalladas sobre personalización y configuración avanzada.
