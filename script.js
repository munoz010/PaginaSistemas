// Menu movil
let boton = document.getElementById("botonMenu");
let nav = document.getElementById("navegacion");
let botonMas = document.getElementById("botonMas");
let menuDesplegable = document.getElementById("menuDesplegable");

boton.addEventListener("click", function () {
    nav.classList.toggle("abierto");
    menuDesplegable.classList.remove("desplegable-abierto");
});

// Cerrar menu al hacer click en un enlace
nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        nav.classList.remove("abierto");
        menuDesplegable.classList.remove("desplegable-abierto");
    }
});

// Menu desplegable (tres rayitas - solo desktop)
botonMas.addEventListener("click", function () {
    menuDesplegable.classList.toggle("desplegable-abierto");
    nav.classList.remove("abierto");
});

// Cerrar desplegable al hacer click fuera
document.addEventListener("click", function (e) {
    if (!botonMas.contains(e.target) && !menuDesplegable.contains(e.target)) {
        menuDesplegable.classList.remove("desplegable-abierto");
    }
});

// Inicializar AOS (Animate On Scroll)
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100
    });
}
