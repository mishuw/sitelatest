const btn = document.querySelector('.switch-mode-btn');
const elements = $('.modal-overlay, .modal');
const closeModal = document.querySelector('.close-modal')
const showProfile = document.querySelector('.discord_profile_viewer')

btn.addEventListener('click', () => {
    let themeData = localStorage.getItem("theme");
    if(themeData === 'dark') {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        console.log('Theme switch (light)');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else if(themeData === null || themeData === 'light') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.toggle('dark');
        console.log('Theme switch (dark)');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-sun-bright"></i>';
    }
});

$(document).ready(function() {
    let themeData = localStorage.getItem('theme');
    if(themeData === 'dark') {
        document.documentElement.classList.toggle('dark');
        console.log('Loaded theme (dark)');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-sun-bright"></i>';
    } else if(themeData === null || themeData === 'light') {
        document.documentElement.classList.remove('dark');
        console.log('Loaded theme (light)');
        document.getElementById('switch-mode-btn').innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
})

document.addEventListener("keydown", function (pressedKey) {
    if (pressedKey.shiftKey && pressedKey.key === "K") {
        $('.modal-overlay, .modal').hasClass('active') ? $('.modal-overlay, .modal').removeClass('active') && $('body').css('overflow', 'auto') : $('.modal-overlay, .modal').addClass('active') && $('body').css('overflow', 'hidden');
    }
    if(pressedKey.key === 'Escape'){
        if($('.modal-overlay, .modal').hasClass('active')){
            $('.modal-overlay, .modal').removeClass('active')
            $('body').css('overflow', 'auto')
        }
    }
});

closeModal.addEventListener('click', () => {
    $('.modal-overlay, .modal').removeClass('active');
    $('body').css('overflow', 'auto')
})

showProfile.addEventListener('click', () => {
    $('.modal-overlay, .modal').addClass('active');
    $('body').css('overflow', 'hidden')
})