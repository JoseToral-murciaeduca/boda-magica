# 🪄 Enlace Mágico - Jose y Mila

Repositorio oficial para la página web de nuestra boda, diseñada y desarrollada desde cero con temática del universo de Harry Potter. 

Este proyecto es una **Single Page Application (SPA) estática**, alojada en GitHub Pages, que ofrece una experiencia inmersiva e interactiva a los invitados desde el momento en que reciben su carta de aceptación.

## ✨ Características y Funcionalidades

* 🚪 **El Retrato de la Señora Gorda:** Pantalla de bloqueo inicial que requiere una "palabra clave" (contraseña) para acceder al contenido de la web, simulando la entrada a la sala común.
* 🗺️ **Mapa del Merodeador:** Animaciones CSS personalizadas con huellas que guían a los invitados por las diferentes ubicaciones del evento.
* 🗞️ **El Profeta Diario:** Sección de información estructurada en columnas como un periódico antiguo, incluyendo imágenes en movimiento (GIFs) con filtro sepia automático.
* 🎩 **Sombrero Seleccionador (RSVP):** Formulario de confirmación de asistencia que incluye un mini-test interactivo para asignar a los invitados a una de las cuatro casas mágicas de cara a la distribución de las mesas.
* ✉️ **Lechuzas de Confirmación:** Integración de backend estático (Serverless) mediante Formspree para recibir los datos del formulario directamente por correo electrónico sin necesidad de base de datos propia.
* 🏆 **Easter Egg Oculto:** Una Snitch Dorada animada que cruza la pantalla de forma aleatoria y premia a quien logre atraparla.
* 📱 **Diseño 100% Responsive:** Adaptación completa a dispositivos móviles y tablets mediante Media Queries, incluyendo un menú lateral deslizable (Off-canvas menu).

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Semántica y estructuración del contenido.
* **CSS3:** Grid, Flexbox, animaciones (`@keyframes`), filtros de imagen y estilos personalizados con tipografías externas.
* **JavaScript (Vanilla):** Lógica de SPA (cambio de pestañas), validación de contraseñas, *LocalStorage* para recordar la sesión y control del DOM.
* **Formspree:** Procesamiento del formulario de contacto (RSVP).
* **GitHub Pages (Static HTML):** Despliegue y alojamiento de la web.

## 📂 Estructura del Proyecto

```text
boda-magica/
│
├── assets/                  # Imágenes, GIFs y tipografías (.otf)
│   ├── EscudoJM.png         # Escudo personalizado
│   ├── senora-gorda.jpg     # Imagen de la pantalla de bloqueo
│   ├── profeta.gif          # GIF para la sección de noticias
│   └── snitch.png           # Imagen para el easter egg
│
├── css/
│   └── style.css            # Hoja de estilos global y animaciones
│
├── js/
│   └── main.js              # Lógica de la web y minijuegos
│
├── index.html               # Archivo principal (SPA)
└── README.md                # Documentación del proyecto
```

## 🚀 Instalación y Uso en Local
* 1. Clona este repositorio:
     git clone [https://github.com/JoseToral-murciaeduca/boda-magica.git](https://github.com/JoseToral-murciaeduca/boda-magica.git)
* 2. Entra en la carpeta del proyecto:
     
* 3. Abre el archivo index.html directamente en cualquier navegador web (Chrome, Firefox, Edge). Al ser una web completamente estática, no requiere de un servidor local (localhost) ni de Node.js para funcionar.
