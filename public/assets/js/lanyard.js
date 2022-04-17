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
  
  $(document).ready(function () {
    setTimeout(function () {
      $('.preloader').fadeOut(500);
    }, 10000) 
  })

  if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
    update_presence();
    console.log(data)
  }
};

function update_presence() { 
  document.querySelector('.user-data').innerHTML = `${data.d.discord_user.username}<span class="text-lg text-gray-500">#${data.d.discord_user.discriminator}</span>`
  document.querySelector('.avatar-dc').src = "https://cdn.discordapp.com/avatars/"+data.d.discord_user.id+"/"+data.d.discord_user.avatar+".png?size=4096"
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
  if(data.d.activities[0] && !data.d.listening_to_spotify) {
    document.querySelector('.ac-name').innerText = data.d.activities[0].name || ``;
    document.querySelector('.ac-data').innerText = data.d.activities[0].details || ``;
    document.querySelector('.ac-data-2').innerText = data.d.activities[0].state || ``;
    document.querySelector('.ac-img').src = `https://cdn.discordapp.com/app-assets/${data.d.activities[0].application_id}/${data.d.activities[0].assets.large_image}`;
  }else if(data.d.listening_to_spotify) {
    var countDownDate = new Date(data.d.spotify.timestamps.end).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var spotify_time = minutes + "m " + seconds+ 's '
    var artist = data.d.spotify.artist.split(';')[0].split(',')[0];
    var song = data.d.spotify.song.split('(')[0];
    document.querySelector('.ac-name').innerText = 'Spotify';
    document.querySelector('.ac-data').innerText = song;
    document.querySelector('.ac-data-2').innerText = artist;
    document.querySelector('.ac-duration').innerText = spotify_time;
    document.querySelector('.ac-img').src = `${data.d.spotify.album_art_url}`;
  }
}, 1000);
}
