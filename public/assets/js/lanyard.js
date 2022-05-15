const lanyard = new WebSocket("wss://api.lanyard.rest/socket");

var data = {};
var received = false;

lanyard.onopen = function () {
  lanyard.send(
    JSON.stringify({
      op: 2,
      d: {
        subscribe_to_id: "906634054311481364",
      },
    })
  );
};

setInterval(() => {
  if (received) {
    lanyard.send(
      JSON.stringify({
        op: 3,
      })
    );
  }
}, 30000);

lanyard.onmessage = function (event) {
  received = true;
  data = JSON.parse(event.data);
  
  /*$(document).ready(function () {
      $('.preloader').fadeOut(500);
  })*/

  if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
    update_presence();
    console.log(data)
  }
};

function update_presence() {
  document.querySelector('.discord_username').innerHTML = `${data.d.discord_user.username}<span class="text-color text-gray-500">#${data.d.discord_user.discriminator}</span>`;
  document.querySelector('.discord_user_img').src = `https://cdn.discordapp.com/avatars/` + data.d.discord_user.id + '/' + data.d.discord_user.avatar+'.png?size=1024';
  if(data.d.discord_status == "online"){
    document.querySelector('.status-bg').innerHTML = `<span class="ml-2 text-online px-2 py-1 font-normal rounded-md text-sm"><i class="fa fa-circle text-online mr-2"></i>Online</span>`
  } else if(data.d.discord_status == "idle"){
    document.querySelector('.status-bg').innerHTML = `<span class="ml-2 text-idle px-2 py-1 font-normal rounded-md text-sm"><i class="fa fa-circle text-idle mr-2"></i>Idle</span>`
  } else if(data.d.discord_status == "dnd"){
    document.querySelector('.status-bg').innerHTML = `<span class="ml-2 text-dnd px-2 py-1 font-normal rounded-md text-sm"><i class="fa fa-circle text-dnd mr-2"></i>Do not distrub</span>`
  } else if(data.d.discord_status == "offline"){
    document.querySelector('.status-bg').innerHTML = `<span class="ml-2 text-offline px-2 py-1 font-normal rounded-md text-sm"><i class="fa fa-circle text-offline mr-2"></i>Offline</span>`
  } else {
    document.querySelector('.status-bg').innerHTML = `<span class="ml-2 text-offline px-2 py-1 font-normal rounded-md text-sm"><i class="fa fa-circle text-offline mr-2"></i>Offline</span>`
  }
  setInterval(function () {
    if(data.d.activities[0]) {
    if(data.d.activities[0].type === 0) {
      if(data.d.activities[0].timestamps.start) {
      var countDownDate = new Date(data.d.activities[0].timestamps.start).getTime();
      var now = new Date().getTime();
      var distance = now-countDownDate;
      var hour = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 *60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var spotify_time = `${hour ? `${hour}h ${minutes}m ${seconds}s` : `${minutes}m ${seconds}s`}` //hour ? hour+'h ' : ''+ minutes + "m " + seconds+ 's '
      document.querySelector('.activity').innerHTML = `<span class="ml-2 text-color px-2 py-1 font-normal rounded-md text-sm"><i class="fa-solid text-color fa-gamepad"></i> PLAYING ${data.d.activities[0].name} <span class="text-color">— elapsed ${spotify_time}</span></span></span>`
      }else {
       var countDownDate = new Date(data.d.activities[0].timestamps.end).getTime();
      var now = new Date().getTime();
      var distance = countDownDate-now;
      var hour = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 *60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var spotify_time = `${hour ? `${hour}h ${minutes}m ${seconds}s` : `${minutes}m ${seconds}s`}` //hour ? hour+'h ' : ''+ minutes + "m " + seconds+ 's '
      document.querySelector('.activity').innerHTML = `<span class="ml-2 text-color px-2 py-1 font-normal rounded-md text-sm"><i class="fa-solid text-color fa-gamepad"></i> PLAYING ${data.d.activities[0].name} <span class="text-color">— left ${spotify_time}</span></span></span>`
      }
    }else if(data.d.activities[0].type === 2) {
    var countDownDate = new Date(data.d.spotify.timestamps.end).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hour = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var spotify_time = minutes + "m " + seconds+ 's '
    var artist = data.d.spotify.artist.split(';')[0].split(',')[0];
    var song = data.d.spotify.song.split('(')[0];
    document.querySelector('.activity').innerHTML = `<span class="ml-2 text-color px-2 py-1 font-normal rounded-md text-sm"><i class="fa-brands fa-spotify text-color mr-2"></i>Listening to <a href="https://open.spotify.com/track/${data.d.spotify.track_id}" target="_blank" class="text-color decoration_yh">${song}</a> <span class="text-color">— left ${spotify_time}</span></span>`
  }else if(data.d.activities[0].type === 3) {
    var countDownDate = new Date(data.d.spotify.timestamps.end).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var spotify_time = `${hour ? `${hour}h ${minutes}m ${seconds}s` : `${minutes}m ${seconds}s`}` //hour ? hour+'h ' : ''+ minutes + "m " + seconds+ 's '
    var artist = data.d.spotify.artist.split(';')[0].split(',')[0];
    var song = data.d.spotify.song.split('(')[0];
    document.querySelector('.activity').innerHTML = `<span class="ml-2 text-color px-2 py-1 font-normal rounded-md text-sm"><i class="fa-solid text-color fa-tv"></i>Watching ${data.d.activities[0].name} <span class="text-color">— left ${spotify_time}</span></span>`
  }
}else {
  document.querySelector('.activity').innerHTML = `<span class="ml-2 text-color px-2 py-1 font-normal rounded-md text-sm"><i class="fa fa-circle text-offline mr-2"></i>No Activity</span>`
}
}, 1000);
}
