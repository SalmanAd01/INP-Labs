const header = document.getElementsByTagName('header')[0];
const navList = document.getElementsByClassName('nav-list')[0];
function openNav(){
    header.classList.add('active');
}
function closeNav(){
    header.classList.remove('active');
}
navList.addEventListener('click', closeNav);
