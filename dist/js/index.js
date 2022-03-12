const navToggle = document.querySelector('.nav--toggle');
const navLink = document.querySelectorAll('.nav__item');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

console.log(navLink);

navLink.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); 
    })
})