const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-icon-btn');
const navBar = document.querySelector('.nav-bar');
const navClose = document.querySelector('.nav-close');
navBtn.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        console.log('active');
        nav.classList.remove('active');
        navClose.style = "display: none !important";
        navBar.style = "display: block !important";

    }
    else {
        nav.classList.toggle('active');
        navClose.style = "display: block !important";
        navBar.style = "display: none !important";
    }
})

const avatarImg = document.getElementById('avatar-img')
const avatarRefresh = document.getElementById('avatar-refresh')

avatarRefresh.addEventListener('click', () => {
    avatarImg.src = "https://avatars.dicebear.com/api/avataaars/" + Math.random() +".svg";
})