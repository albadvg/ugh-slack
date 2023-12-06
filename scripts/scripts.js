//burguer menu behaviour

let burguerIcon = document.getElementById('burguer-icon');
let closeIcon = document.getElementById('close-icon');
let headerNav = document.getElementById('header-nav');

burguerIcon.addEventListener('click', () => {
    headerNav.classList.add('header-nav--open');
})

closeIcon.addEventListener('click', () => {
    headerNav.classList.remove('header-nav--open');
})