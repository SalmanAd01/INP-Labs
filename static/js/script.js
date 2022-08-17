const header = document.getElementsByTagName('header')[0];
const navList = document.getElementsByClassName('nav-list')[0];
function openNav(){
    if (!header.classList.contains('active')){
        header.classList.add('active');
    }
}
function closeNav(){
    if (header.classList.contains('active')){
        header.classList.remove('active');
    }

}
navList.addEventListener('click', closeNav);
