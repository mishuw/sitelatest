var topBtn = document.querySelector(".topperButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topper(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
