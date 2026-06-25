// Comprobar si el invitado ya introdujo la contraseña antes
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("accesoConcedido") === "true") {
        desbloquearWeb();
    }
});

function verificarContrasena() {
    const input = document.getElementById("input-contrasena");
    const contrasena = input.value.toLowerCase().trim();
    const mensajeError = document.getElementById("mensaje-error");

    // Puedes cambiar 'caput draconis' por la palabra que vayas a poner en las invitaciones
    if (contrasena === "caput draconis" || contrasena === "alohomora") {
        // Guardamos el token para que no tenga que volver a ponerla al recargar
        localStorage.setItem("accesoConcedido", "true");
        desbloquearWeb();
        mensajeError.style.display = "none";
    } else {
        mensajeError.style.display = "block";
        // Pequeña animación de error (opcional)
        input.classList.add("vibrar");
        setTimeout(() => input.classList.remove("vibrar"), 300);
    }
}

function desbloquearWeb() {
    document.getElementById("pantalla-bloqueo").style.display = "none";
    document.getElementById("contenido-magico").style.display = "block";
}

// Función para mostrar/ocultar la contraseña
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