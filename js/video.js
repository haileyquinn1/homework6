var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down" + video.playbackRate);
	video.playbackRate *= .9;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up" + video.playbackRate);
	video.playbackRate /= .9;
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5) {
		video.currentTime += 5;
	}
	else {
		video.currentTime = 0;
		console.log("Start from the beginning");
	}
	video.play()
	console.log("Skip Ahead" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted) {
		video.muted = false;
			this.innerHTML = "Muted";
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmuted";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value/100;
	volume.innerHTML = this.value+"%";
	console.log("Volume");
});

document.querySelector("#old").addEventListener("click", function() {
	video.classlist.add("oldTime")
});

document.querySelector("#original").addEventListener("click", function() {
	video.classlist.remove("oldTime")
});



