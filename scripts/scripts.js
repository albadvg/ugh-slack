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

//header behaviour on scroll
let header = document.querySelector('.header');
let headerLogo = document.querySelector('.header__logo');

window.addEventListener('scroll', fixHeader);

function fixHeader() {
    if(window.scrollY > window.innerHeight) {
        header.classList.add('header--fixed');
        headerLogo.setAttribute('src', './assets/logo-b.svg');
        burguerIcon.setAttribute('src', './assets/burguer-b.png');
        headerNav.classList.add('header-nav--fixed');
    } else {
        header.classList.remove('header--fixed');
        headerLogo.setAttribute('src', './assets/logo-w.svg');
        burguerIcon.setAttribute('src', './assets/burguer.png');
        headerNav.classList.remove('header-nav--fixed');
    }
}


//footer menu behaviou (on mobile)

let footerTitles = document.querySelectorAll('.footer-menu-list__title');

footerTitles.forEach(title => title.addEventListener('click', open));

function open (e) {
    let arrow = this.firstElementChild;
    let list = this.nextElementSibling;
    arrow.classList.toggle('footer-menu-list__arrow--open');
    list.classList.toggle('footer-menu-list-secondary--open');
}   

