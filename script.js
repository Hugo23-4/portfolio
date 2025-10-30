/* Logina del menú en el móvil */

/* 1. Seleccionamos los elementos del DOM que necesitamos */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Mostrar menú */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Ocultar menú */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*Ocultar menú al hacer click en un enlace, un proyecto */

// 1. Seleccionar los enlaces del menú
const navLinks = document.querySelectorAll('.nav__link');

// 2. Función que quita la clase
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

// 3. Recorremos cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', linkAction);
});