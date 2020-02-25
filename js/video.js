
var video = document.getElementById("myVideo");
var speed = 1.0;


function getVid() {
  document.querySelector("#myVideo");

}
function playVid() {
  console.log("Play Video");
  video.play();
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
}


function pauseVid() {
  console.log("Pause Video");
  video.pause();

}

function decreaseSpeed() {
  speed = speed - (speed * 0.2);
  video.playbackRate = speed;
  console.log("Speed is "+ speed);
}

function increaseSpeed() {
  speed = speed * 1.25;
  video.playbackRate = speed;
	console.log("Speed is "+ speed);
}

function skipAhead() {
  var skip = video.currentTime + 60;

  if (skip > video.duration){
    video.currentTime = 0;
    video.playbackRate = 1.0;

  } else{
    video.currentTime = skip;
  }
  console.log("Current location is "+ video.currentTime);

}

function mute() {
  if (video.muted) {
    video.muted = false;
    document.getElementById("mute").innerHTML = "mute";
    console.log("Unmuted");

  } else{
    video.muted = true;
    document.getElementById("mute").innerHTML = "unmute";
    console.log("Muted");
  }
}

function changeVolume() {
  var slider  = document.querySelector("#volumeSlider");
  video.volume = slider.value / 100;
  document.getElementById("volume").innerHTML = slider.value + "%";
  console.log("Volume is "+ video.volume *100);

}


function gray() {
  video.className = "grayscale";
	console.log("In grayscale");
}

function color() {
  video.className = "video";
	console.log("In color");
}
