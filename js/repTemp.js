$(function () {
	console.log("Init succeeded");

	$("#fullScreen").on("click", openFullscreen() );

	var elem = document.getElementById("myvideo");
	if (elem.requestFullscreen) {
	elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
	elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
	elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
	elem.webkitRequestFullscreen();
	}

});