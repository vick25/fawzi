const navToggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav--visible');
})