// ==========================================
// 1. SISTEMA DE LOGIN Y TEMAS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Si ya tiene el token guardado en local, entramos directamente
    if (localStorage.getItem("accesoConcedido") === "true") {
        desbloquearWeb();
    }

    // Novedad: Cargar el Tema Mágico guardado de la casa elegida
    const temaGuardado = localStorage.getItem("temaMagico");
    if(temaGuardado) {
        document.body.classList.add(temaGuardado);
    }
});

function verificarContrasena() {
    const input = document.getElementById("input-contrasena");
    const contrasena = input.value.toLowerCase().trim();
    const mensajeError = document.getElementById("mensaje-error");

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
    document.getElementById("pantalla-bloqueo-wrapper").style.display = "none";
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
    const pestanas = document.querySelectorAll('.pestana');
    pestanas.forEach(p => p.classList.remove('activa'));

    document.getElementById(idPestana).classList.add('activa');

    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(b => b.classList.remove('activo'));

    const btnPulsado = Array.from(botones).find(b => b.getAttribute('onclick').includes(idPestana));
    if (btnPulsado) {
        btnPulsado.classList.add('activo');
    }

    if (window.innerWidth <= 768) {
        toggleMenuLateral();
    }
}

function toggleMenuLateral() {
    const menu = document.getElementById("menu-lateral");
    menu.classList.toggle("abierto");
}

// ==========================================
// 3. SOMBRERO SELECCIONADOR Y TEMATIZACIÓN
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

    let nombreCasa, colorFondoResultado, claseTema;

    // Novedad: Asignamos el nombre de la clase CSS de cada casa
    switch(casaGanadora) {
        case 'G':
            nombreCasa = 'Gryffindor';
            colorFondoResultado = '#740001';
            claseTema = 'tema-gryffindor'; // (Base, no hace falta clase extra pero la nombramos)
            break;
        case 'S':
            nombreCasa = 'Slytherin';
            colorFondoResultado = '#1a472a';
            claseTema = 'tema-slytherin';
            break;
        case 'R':
            nombreCasa = 'Ravenclaw';
            colorFondoResultado = '#0e1a40';
            claseTema = 'tema-ravenclaw';
            break;
        case 'H':
            nombreCasa = 'Hufflepuff';
            colorFondoResultado = '#eeba30';
            claseTema = 'tema-hufflepuff';
            break;
    }

    // Mostrar el resultado dentro del pergamino
    resultadoDiv.textContent = '¡' + nombreCasa.toUpperCase() + '!';
    resultadoDiv.style.backgroundColor = colorFondoResultado;
    if(casaGanadora === 'H') {
        resultadoDiv.style.color = '#3d2612';
    } else {
        resultadoDiv.style.color = 'white';
    }

    resultadoDiv.style.display = 'block';
    inputOculto.value = nombreCasa;

    // MAGIA: Aplicar el cambio de tema a la página
    // 1. Limpiamos cualquier tema anterior
    document.body.classList.remove('tema-slytherin', 'tema-ravenclaw', 'tema-hufflepuff');
    // 2. Añadimos el nuevo (si no es el base)
    if (claseTema !== 'tema-gryffindor') {
        document.body.classList.add(claseTema);
    }
    // 3. Lo guardamos en el navegador
    localStorage.setItem("temaMagico", claseTema);
}

// ==========================================
// 4. EASTER EGG: LA SNITCH DORADA
// ==========================================
function lanzarSnitch() {
    const snitch = document.getElementById('snitch');

    if (document.getElementById('layout-principal').style.display !== 'none') {
        snitch.style.display = 'block';

        snitch.classList.remove('volando');
        void snitch.offsetWidth;
        snitch.classList.add('volando');

        snitch.style.top = Math.floor(Math.random() * 70) + 10 + '%';
    }

    const tiempoAleatorio = Math.floor(Math.random() * 25000) + 20000;
    setTimeout(lanzarSnitch, tiempoAleatorio);
}

setTimeout(lanzarSnitch, 10000);

function atraparSnitch() {
    const snitch = document.getElementById('snitch');
    snitch.style.display = 'none';
    document.getElementById('modal-secreto').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-secreto').style.display = 'none';
}