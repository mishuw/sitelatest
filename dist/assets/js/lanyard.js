const lanyard = new WebSocket("wss://api.lanyard.rest/socket");

var dscdata = {};
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

lanyard.onclose = function() {
  closedSocket()
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
  dscdata = JSON.parse(event.data);

  if (dscdata.t === "INIT_STATE" || dscdata.t === "PRESENCE_UPDATE") {
    update_presence();
    console.log(dscdata)
    $('.loader').fadeOut('slow', function() {
      $(this).remove();
    });
  }
};

function update_presence() { 
  if (dscdata.d.discord_status === "online") {
    document.getElementById("discordStatus").innerHTML = `<span class="w-3 h-3 bg-green-500 rounded-full inline-flex ml-1 mr-1"></span> eleven şu an çevrimiçi`;
  } else if (dscdata.d.discord_status === "idle") {
    document.getElementById("discordStatus").innerHTML = `<span class="w-3 h-3 bg-yellow-500 rounded-full inline-flex ml-1 mr-1"></span> eleven şu an çevrimiçi`;
  } else if (dscdata.d.discord_status === "dnd") {
    document.getElementById("discordStatus").innerHTML = `<span class="w-3 h-3 bg-red-500 rounded-full inline-flex ml-1 mr-1"></span> eleven şu an çevrimiçi`;
  } else if (dscdata.d.discord_status === "offline") {
    document.getElementById("discordStatus").innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-1"></span> eleven şu anda çevrimdışı`;
  } else {
    document.getElementById("discordStatus").innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-1"></span> Lanyard Yükleniyor`;
  }

  if(dscdata.d.listening_to_spotify === true) {
    document.getElementById("spotify").innerHTML = `<i class="fab fa-spotify text-green-500 ml-1"></i> <b>${dscdata.d.spotify.artist.split(";")[0].split(",")[0]}</b> tarafından <a class="link" target="_blank" href="https://open.spotify.com/track/${dscdata.d.spotify.track_id}"><b>${dscdata.d.spotify.song}</b></a> dinliyor.`;
  } else {
    document.getElementById("spotify").innerHTML = `<i class="fab fa-spotify text-gray-500 ml-1"></i> Şuan Dinlemiyor.`;
  }
  document.getElementById('avatar-sec').innerHTML = `<img alt="eleven Avatar" draggable="false" class="head-img" src='https://cdn.discordapp.com/avatars/${dscdata.d.discord_user.id}/${dscdata.d.discord_user.avatar}?size=4096'>`
  document.getElementById('username-discrim').innerHTML = `${dscdata.d.discord_user.username}<span class="discrim">#${dscdata.d.discord_user.discriminator}</span>`
}
function closedSocket () {
  console.log('Websocket closed');
  msgboxboxPersistent.show("WebSocket bağlantısı kesildi lütfen sayfayı yenileyin.");
  document.getElementById("discordStatus").innerHTML = `<span class="w-3 h-3 text-red-500">Socket bağlantısı kesildi</span>`;
  document.getElementById("spotify").innerHTML = `<span class="w-3 h-3 text-red-500">Socket bağlantısı kesildi</span>`;
}
function lanyardClick() {
  window.location = 'https://github.com/Phineas/lanyard/'
}