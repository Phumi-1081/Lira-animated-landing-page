let mySong = document.getElementById("song");
let icon = document.getElementById("play");
icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "media/pause.png";
  } else {
    mySong.pause();
    icon.src = "media/play.png";
  }
};
