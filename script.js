const hamOpen = document.getElementById('ham-open');
const hamClose = document.getElementById('ham-close');
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
hamOpen.addEventListener('click', () => {
    if(hamOpen.className != 'bx bx-x'){
    const nav = document.querySelector('.nav-list');
    nav.style.display = 'flex';
    hamOpen.className = 'bx bx-x'
    // check if scroll 
    $(window).scroll(function() {
        const nav = document.querySelector('.nav-list');
        nav.style.display = 'none';
        hamOpen.className = 'bx bx-menu btn-open'
    });
    }
    else{
        const nav = document.querySelector('.nav-list');
        nav.style.display = 'none';
        hamOpen.className = 'bx bx-menu btn-open'
    }
}
);
function closeMenu() {
    const nav = document.querySelector('.nav-list');
    nav.style.display = 'none';
    hamOpen.className = 'bx bx-menu btn-open'
}