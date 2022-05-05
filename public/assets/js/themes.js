const btn = document.querySelector('.switch-mode-btn');
const elements = $('.modal-overlay, .modal');
const closeModal = document.querySelector('.close-modal')
const showProfile = document.querySelector('.discord_profile_viewer')

btn.addEventListener('click', () => {
    let themeData = localStorage.getItem("theme");
    if(themeData === 'dark') {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        console.log('Dark');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-sun-bright"></i>';
    } else if(themeData === null || themeData === 'light') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.toggle('dark');
        console.log('Light');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

$(document).ready(function() {
    let themeData = localStorage.getItem('theme');
    if(themeData === 'dark') {
        document.documentElement.classList.toggle('dark');
        console.log('Dark');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-sun-bright"></i>';
    } else if(themeData === null || themeData === 'light') {
        document.documentElement.classList.remove('dark');
        console.log('Light');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
})

document.addEventListener("keydown", function (zEvent) {
    if (zEvent.shiftKey && zEvent.key === "K") {
        $('.modal-overlay, .modal').hasClass('active') ? $('.modal-overlay, .modal').removeClass('active') : $('.modal-overlay, .modal').addClass('active');
    }
});

closeModal.addEventListener('click', () => {
    $('.modal-overlay, .modal').removeClass('active');
})

showProfile.addEventListener('click', () => {
    $('.modal-overlay, .modal').addClass('active');
})