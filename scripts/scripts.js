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

//footer menu behaviou (on mobile)

let footerTitles = document.querySelectorAll('.footer-menu-list__title');

footerTitles.forEach(title => title.addEventListener('click', open));

function open (e) {
    let arrow = this.firstElementChild;
    let list = this.nextElementSibling;
    arrow.classList.toggle('footer-menu-list__arrow--open');
    list.classList.toggle('footer-menu-list-secondary--open');
}   

// const element = document.getElementById('foo');
// const styles = window.getComputedStyle(element, '::after');
// const content = styles.content;