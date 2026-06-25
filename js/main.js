// ==========================================
// 1. SISTEMA DE LOGIN (SEÑORA GORDA)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Si ya tiene el token guardado en local, entramos directamente
    if (localStorage.getItem("accesoConcedido") === "true") {
        desbloquearWeb();
    }
});

function verificarContrasena() {
    const input = document.getElementById("input-contrasena");
    const contrasena = input.value.toLowerCase().trim();
    const mensajeError = document.getElementById("mensaje-error");

    // Cambia 'caput draconis' por vuestra contraseña real
    if (contrasena === "caput draconis" || contrasena === "alohomora") {
        localStorage.setItem("accesoConcedido", "true");
        desbloquearWeb();
        mensajeError.style.display = "none";
    } else {
        mensajeError.style.display = "block";
        input.classList.add("vibrar");
        setTimeout(() => input.classList.remove("vibrar"), 300);
    }
}

function desbloquearWeb() {
    // Oculta la pantalla que cubre todo
    document.getElementById("pantalla-bloqueo-wrapper").style.display = "none";
    // Muestra el layout del menú y contenido
    document.getElementById("layout-principal").style.display = "flex";
}

function togglePassword() {
    const input = document.getElementById("input-contrasena");
    const iconoAbierto = document.getElementById("icono-ojo-abierto");
    const iconoCerrado = document.getElementById("icono-ojo-cerrado");

    if (input.type === "password") {
        input.type = "text";
        iconoAbierto.style.display = "none";
        iconoCerrado.style.display = "inline";
    } else {
        input.type = "password";
        iconoAbierto.style.display = "inline";
        iconoCerrado.style.display = "none";
    }
}

// ==========================================
// 2. SISTEMA DE PESTAÑAS Y MENÚ MÓVIL
// ==========================================
function abrirPestana(idPestana) {
    // 1. Ocultar todas las pestañas
    const pestanas = document.querySelectorAll('.pestana');
    pestanas.forEach(p => p.classList.remove('activa'));

    // 2. Mostrar la pestaña solicitada
    document.getElementById(idPestana).classList.add('activa');

    // 3. Actualizar la clase "activo" en los botones del menú
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(b => b.classList.remove('activo'));

    // Buscamos el botón que acaba de ser pulsado (por su onclick) y lo marcamos
    const btnPulsado = Array.from(botones).find(b => b.getAttribute('onclick').includes(idPestana));
    if (btnPulsado) {
        btnPulsado.classList.add('activo');
    }

    // 4. Si estamos en móvil, cerrar el menú lateral automáticamente al pulsar una opción
    if (window.innerWidth <= 768) {
        toggleMenuLateral();
    }
}

function toggleMenuLateral() {
    const menu = document.getElementById("menu-lateral");
    menu.classList.toggle("abierto");
}

// ==========================================
// 3. SOMBRERO SELECCIONADOR (FORMULARIO)
// ==========================================
function asignarCasa() {
    const form = document.getElementById('form-rsvp');
    const q1 = form.querySelector('input[name="q1"]:checked');
    const q2 = form.querySelector('input[name="q2"]:checked');
    const resultadoDiv = document.getElementById('resultado-sombrero');
    const inputOculto = document.getElementById('casa-asignada');

    if (!q1 || !q2) {
        alert('¡El Sombrero necesita que respondas a las dos preguntas!');
        return;
    }

    let puntos = { 'G': 0, 'S': 0, 'R': 0, 'H': 0 };
    puntos[q1.value]++;
    puntos[q2.value]++;

    let casaGanadora = '';
    let maxPuntos = -1;

    for (let casa in puntos) {
        if (puntos[casa] > maxPuntos) {
            maxPuntos = puntos[casa];
            casaGanadora = casa;
        }
    }

    let nombreCasa, colorFondo;
    switch(casaGanadora) {
        case 'G': nombreCasa = 'Gryffindor'; colorFondo = '#740001'; break;
        case 'S': nombreCasa = 'Slytherin'; colorFondo = '#1a472a'; break;
        case 'R': nombreCasa = 'Ravenclaw'; colorFondo = '#0e1a40'; break;
        case 'H': nombreCasa = 'Hufflepuff'; colorFondo = '#eeba30'; break;
    }

    resultadoDiv.textContent = '¡' + nombreCasa.toUpperCase() + '!';
    resultadoDiv.style.backgroundColor = colorFondo;
    if(casaGanadora === 'H') {
        resultadoDiv.style.color = '#3d2612';
    } else {
        resultadoDiv.style.color = 'white';
    }

    resultadoDiv.style.display = 'block';
    inputOculto.value = nombreCasa;
}

// ==========================================
// 4. EASTER EGG: LA SNITCH DORADA
// ==========================================

function lanzarSnitch() {
    const snitch = document.getElementById('snitch');

    // Solo sale si ya han puesto la contraseña y están dentro de la web
    if (document.getElementById('layout-principal').style.display !== 'none') {
        snitch.style.display = 'block';

        // Reiniciamos las clases de animación para que vuelva a volar desde cero
        snitch.classList.remove('volando');
        void snitch.offsetWidth; // Truco mágico de JS para forzar el reinicio de CSS
        snitch.classList.add('volando');

        // La altura a la que sale es aleatoria
        snitch.style.top = Math.floor(Math.random() * 70) + 10 + '%';
    }

    // Se programa para volver a salir aleatoriamente entre 20 y 45 segundos después
    const tiempoAleatorio = Math.floor(Math.random() * 25000) + 20000;
    setTimeout(lanzarSnitch, tiempoAleatorio);
}

// Iniciar el reloj de la snitch a los 10 segundos de cargar la web
setTimeout(lanzarSnitch, 10000);

function atraparSnitch() {
    const snitch = document.getElementById('snitch');
    snitch.style.display = 'none'; // Desaparece al tocarla

    // Mostramos el pergamino con el cóctel
    document.getElementById('modal-secreto').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-secreto').style.display = 'none';
}