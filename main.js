document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.por-temporada',{ delay: 500});
ScrollReveal().reveal('.abajo-de-secciones',{ delay: 500});
ScrollReveal().reveal('.abajo-de-secciones-two',{ delay: 500});