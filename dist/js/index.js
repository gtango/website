// Navigation js
const navToggle = document.querySelector('.nav--toggle');
const navMove = document.querySelector('.nav--movable');
const navLink = document.querySelectorAll('.nav__item');
const home = document.getElementById('home');
const homePos = home.getBoundingClientRect();

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLink.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); 
    })
})

window.addEventListener("scroll", () =>{
    if(window.scrollY > homePos.height){
        navMove.style.opacity = '1';
        navMove.style.visibility = 'visible';
    } else {
        navMove.style.opacity = '0';
        navMove.style.visibility = 'hidden';
    }
})
