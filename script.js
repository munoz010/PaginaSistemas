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

// Carrusel hero
let pista = document.querySelector(".carrusel-pista");
let imagenes = document.querySelectorAll(".carrusel-pista img");
let contenedorPuntos = document.querySelector(".carrusel-puntos");
let indiceActual = 0;

// Crear puntos
for (let i = 0; i < imagenes.length; i++) {
    let punto = document.createElement("button");
    punto.classList.add("carrusel-punto");
    if (i === 0) punto.classList.add("activo");
    punto.addEventListener("click", function () {
        irA(i);
    });
    contenedorPuntos.appendChild(punto);
}

let puntos = document.querySelectorAll(".carrusel-punto");

function irA(indice) {
    indiceActual = indice;
    pista.style.transform = "translateX(-" + (indiceActual * 100) + "%)";
    puntos.forEach(function (p) { p.classList.remove("activo"); });
    puntos[indiceActual].classList.add("activo");
}

// Auto avance cada 4 segundos
setInterval(function () {
    let siguiente = (indiceActual + 1) % imagenes.length;
    irA(siguiente);
}, 4000);

// Inicializar AOS (Animate On Scroll)
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100
    });
}
