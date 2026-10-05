// Menu movil
let boton = document.getElementById("botonMenu");
let nav = document.getElementById("navegacion");

boton.addEventListener("click", function () {
    nav.classList.toggle("abierto");
});

// Cerrar menu al hacer click en un enlace
nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        nav.classList.remove("abierto");
    }
});
