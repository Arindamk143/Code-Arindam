burger = document.querySelector('.burger')
navbar = document.querySelector('#navbar')
navlist = document.querySelector('#my')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})