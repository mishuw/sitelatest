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
  if(dscdata.d.listening_to_spotify === true) {
    document.getElementById("spotify").innerHTML = `<i class="fab fa-spotify text-green-500 ml-1"></i> <b>${dscdata.d.spotify.artist.split(";")[0].split(",")[0]}</b> tarafından <a class="link" target="_blank" href="https://open.spotify.com/track/${dscdata.d.spotify.track_id}"><b>${dscdata.d.spotify.song}</b></a> dinliyor.`;
  } else {
    document.getElementById("spotify").innerHTML = `<i class="fab fa-spotify text-gray-500 ml-1"></i> Şuan Dinlemiyor.`;
  }
  document.getElementById('avatar-sec').innerHTML = `<img alt="mishu Avatar" draggable="false" class="head-img" src='https://cdn.discordapp.com/avatars/${dscdata.d.discord_user.id}/${dscdata.d.discord_user.avatar}?size=4096'>`
  document.getElementById('username').innerHTML = `${dscdata.d.discord_user.username}#${dscdata.d.discord_user.discriminator}`
}