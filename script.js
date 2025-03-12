document.addEventListener("DOMContentLoaded", () => {
    iniciarCarrusel();
    configurarEventos();
});

function iniciarCarrusel() {
    const carrusel = document.querySelector(".carrusel");
    const imagenes = document.querySelectorAll(".carrusel img");
    const btnPrev = document.querySelector(".prev");
    const btnNext = document.querySelector(".next");

    let indice = 0;

    function moverCarrusel(direccion) {
        indice += direccion;
        if (indice < 0) indice = imagenes.length - 1;
        if (indice >= imagenes.length) indice = 0;
        carrusel.style.transform = `translateX(-${indice * 100}%)`;
    }

    btnPrev.addEventListener("click", () => moverCarrusel(-1));
    btnNext.addEventListener("click", () => moverCarrusel(1));

    setInterval(() => moverCarrusel(1), 5000);
}

function configurarEventos() {
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("mouseover", () => link.style.transform = "scale(1.1)");
        link.addEventListener("mouseout", () => link.style.transform = "scale(1)");
    });

    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Formulario enviado correctamente.");
        });
    }
}
