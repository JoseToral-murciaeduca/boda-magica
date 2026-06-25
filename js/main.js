// Comprobar si el invitado ya introdujo la contraseña antes
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("accesoConcedido") === "true") {
        desbloquearWeb();
    }
});

function verificarContrasena() {
    const contrasena = document.getElementById("input-contrasena").value.toLowerCase().trim();
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
        const input = document.getElementById("input-contrasena");
        input.classList.add("vibrar");
        setTimeout(() => input.classList.remove("vibrar"), 300);
    }
}

function desbloquearWeb() {
    document.getElementById("pantalla-bloqueo").style.display = "none";
    document.getElementById("contenido-magico").style.display = "block";
}