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

document.addEventListener("keydown", function (pressedKey) {
    if (pressedKey.shiftKey && pressedKey.key === "K") {
        $('.modal-overlay, .modal').hasClass('active') ? $('.modal-overlay, .modal').removeClass('active') : $('.modal-overlay, .modal').addClass('active');
        $('.modal-overlay, .modal').hasClass('active') ? document.querySelector('.discord_user_img').src = `https://cdn.discordapp.com/avatars/` + data.d.discord_user.id + '/' + data.d.discord_user.avatar+'.gif?size=4096' : document.querySelector('.discord_user_img').src = `https://cdn.discordapp.com/avatars/` + data.d.discord_user.id + '/' + data.d.discord_user.avatar+'.png?size=4096';
        $('.modal-overlay, .modal').hasClass('active') ? document.querySelector('.banner').style.background = `url('https://cdn.discordapp.com/banners/${user.id}/${user.banner}.gif?size=4096') center center no-repeat` : document.querySelector('.banner').style.background = `url('https://cdn.discordapp.com/banners/${user.id}/${user.banner}.png?size=4096') center center no-repeat`;
    }
});

closeModal.addEventListener('click', () => {
    $('.modal-overlay, .modal').removeClass('active');
    if($('.modal-overlay, .modal').hasClass('active') !== true) {
        document.querySelector('.discord_user_img').src = `https://cdn.discordapp.com/avatars/` + data.d.discord_user.id + '/' + data.d.discord_user.avatar+'.png?size=4096';
        document.querySelector('.banner').style.background = `url('https://cdn.discordapp.com/banners/${user.id}/${user.banner}.png?size=4096') center center no-repeat`;
        console.log("%c[PERFORMANCE] Switch png", "color:#b5b5e7;font-family:sans-serif;font-size: 15px;font-weight: bold;");
    }
})

showProfile.addEventListener('click', () => {
    $('.modal-overlay, .modal').addClass('active');
    if($('.modal-overlay, .modal').hasClass('active') === true) {
        document.querySelector('.discord_user_img').src = `https://cdn.discordapp.com/avatars/` + data.d.discord_user.id + '/' + data.d.discord_user.avatar+'.gif?size=4096';
        document.querySelector('.banner').style.background = `url('https://cdn.discordapp.com/banners/${user.id}/${user.banner}.gif?size=4096') center center no-repeat`;
        console.log("%c[PERFORMANCE] Switch gif.", "color:#b5b5e7;font-family:sans-serif;font-size: 15px;font-weight: bold;");
    }
})