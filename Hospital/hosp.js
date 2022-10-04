const menu = document.querySelector('.hambugger') ;
const mobile = document.querySelector('.mobile-nav') 
menu = addEventListener('click', function() {
    menu.classList.toggle ('is-active');
    mobile.classList.toggle('is-active')
});