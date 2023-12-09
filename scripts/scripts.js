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
let headerArrows = document.querySelectorAll('.header-nav__arrow');

window.addEventListener('scroll', fixHeader);

function fixHeader() {
    if(window.scrollY > window.innerHeight - 100) {
        header.classList.add('header--pre-fixed');
    } else {
        header.classList.remove('header--pre-fixed');

    }

    if(window.scrollY > window.innerHeight) {
        header.classList.add('header--fixed');
        headerLogo.setAttribute('src', './assets/logo-b.svg');
        burguerIcon.setAttribute('src', './assets/burguer-b.png');
        headerArrows.forEach(arrow => arrow.setAttribute('src', './assets/chevron.png'));
    } else {
        header.classList.remove('header--fixed');
        // header.classList.add('header--backTop');
        headerLogo.setAttribute('src', './assets/logo-w.svg');
        burguerIcon.setAttribute('src', './assets/burguer.png');
        headerArrows.forEach(arrow => arrow.setAttribute('src', './assets/chevron-w.png'));
        
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

