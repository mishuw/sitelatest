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
      $('.preloader').fadeOut(500);
  })

  if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
    update_presence();
    console.log(data)
  }
};

function update_presence() {
  var codeAc = data.d.activities.find(mills => mills.application_id === "782685898163617802");
  if(codeAc){
    if(codeAc.details){
      document.querySelector('.acitivityUp').innerHTML = `&nbsp;${codeAc.details}`;
    }else {
      document.querySelector('.acitivityUp').style.display = 'none';
    }
    if(codeAc.state){
      document.querySelector('.acitivityDown').innerHTML = `&nbsp;${codeAc.state}`;
    }else {
      document.querySelector('.acitivityDown').style.display = 'none';
    }
  }else if(data.d.activities.find(el => el.type === 0)) {
    const d = data.d.activities.find(el => el.type === 0)
    if(d.details){
      document.querySelector('.acitivityUp').innerHTML = `&nbsp;${d.details}`;
    }else if(d.name){
      document.querySelector('.acitivityUp').innerHTML = `&nbsp;${d.name}`;
    }else {
      document.querySelector('.acitivityUp').style.display = 'none';
    }
    if(d.state){
      document.querySelector('.acitivityDown').innerHTML = `&nbsp;${d.state}`;
    }else {
      document.querySelector('.acitivityDown').style.display = 'none';
    }
  }else{
    document.querySelector('.activity').innerHTML = ``;
    document.querySelector('.activity').style.display = "none";
    document.querySelector('.acitivityUp').innerHTML = ``;
    document.querySelector('.acitivityUp').style.display = 'none';
    document.querySelector('.acitivityDown').innerHTML = ``;
    document.querySelector('.acitivityDown').style.display = 'none';
    document.querySelector('.activityElapsed').innerHTML = ``;
    document.querySelector('.activityElapsed').style.display = 'none';
  }
  document.querySelector('.discord_username').innerHTML = `${data.d.discord_user.username}<span class="text-color text-gray-500">#${data.d.discord_user.discriminator}</span>`;
  document.querySelector('.discord_user_img').src = `https://cdn.discordapp.com/avatars/` + data.d.discord_user.id + '/' + data.d.discord_user.avatar+'?size=4096';
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
  
  var cstatus = data.d.activities.find(el => el.id === "custom"); 
  if(cstatus) {
    document.querySelector('.customStatus').innerHTML = `<span class="text-color text-sm customText">${cstatus.state}</span><hr style="margin-right:1rem;">`;
  }else {
    document.querySelector('.customStatus').innerHTML = ``;
    document.querySelector('.customStatus').style.display = "none";
  }

  setInterval(function(){
    if(codeAc){
    var countDownDate = new Date(codeAc.timestamps.start).getTime();
    var now = new Date().getTime();
    var distance = now-countDownDate;
    var hour = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var elapsed_time = `${hour ? `${hour}h ${minutes}m ${seconds}s` : `${minutes}m ${seconds}s`}`
    document.querySelector('.activity').innerHTML = `<span class="ml-2 text-color px-2 py-1 font-normal rounded-md text-sm"><i class="fa-solid text-color fa-gamepad"></i> PLAYING ${codeAc.name} <span class="text-color">— elapsed ${elapsed_time}</span></span></span>`;
    document.querySelector('.activityElapsed').innerHTML = `&nbsp;${elapsed_time}`;
  }else if(data.d.activities.find(el => el.type === 0)) {
    const d = data.d.activities.find(el => el.type === 0)
    var countDownDate = new Date(d.timestamps.start).getTime();
    var now = new Date().getTime();
    var distance = now-countDownDate;
    var hour = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var elapsed_time = `${hour ? `${hour}h ${minutes}m ${seconds}s` : `${minutes}m ${seconds}s`}`

    document.querySelector('.activity').innerHTML = `<span class="ml-2 text-color px-2 py-1 font-normal rounded-md text-sm"><i class="fa-solid text-color fa-gamepad"></i> PLAYING ${d.name} <span class="text-color">— elapsed ${elapsed_time}</span></span></span>`;
    document.querySelector('.activityElapsed').innerHTML = `&nbsp;${elapsed_time}`;
  }
    if(data.d.listening_to_spotify == true) {
    var crD = new Date(data.d.spotify.timestamps.end).getTime();
    var now = new Date().getTime();
    var distance = crD - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var spotify_time = minutes + "m " + seconds + "s ";
    var artist = data.d.spotify.artist.split(";")[0].split(",")[0]
    var song = data.d.spotify.song.split("(")[0];

    document.querySelector('.listening-activity').innerHTML = `<span class="ml-2 text-color px-2 py-1 font-normal rounded-md text-sm"><i class="fa-brands text-color fa-spotify"></i> Listening to <a href="https://ope.spotify.com/track/${data.d.spotify.track_id}" target="_blank">${song}</a> by ${artist} <span class="text-color">— left ${spotify_time}</span></span></span>`
    } else {
      document.querySelector('.listening-activity').innerHTML = ``;
      document.querySelector('.listening-activity').style.display = "none";
    }
  }, 1000)
}
