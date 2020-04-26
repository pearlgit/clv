$(function () {
	console.log("init success");

	//window.scrollBy(0,500);

	console.log("VH: " + $(window).innerHeight() +"; NB: "+$("#navbar").outerHeight()
	+"; NC: "+$("#navCont").outerHeight() );

	var dayList = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var dt = new Date(Date.now());
	
	function dispTime(){
		$("#time").html(dayList[dt.getUTCDay()]+" "+(dt.getHours() < 10 ? '0' : '')+dt.getHours()+":"+ (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes() );
	}
	
	dispTime();
	setInterval(function() {
		dt = new Date(Date.now());
		dispTime();
	}, 1000);

	var msgi = 0;
	var msgList = [
		"QRKZ",
		"<a href='https://www.blogger.com/'>Blogger</a>",
		"<a href='https://getuikit.com/'>UI Kit</a>",
		"<a href='https://draggabilly.desandro.com/'>Draggabilly</a>",
		"<a href='https://flickity.metafizzy.co/'>Flickity</a>",
		"<a href='https://www.w3schools.com/w3css/'>W3 CSS</a>",
		"<a href='https://jquery.com/'>jQuery</a>",
		"<a href='https://www.linuxmint.com/'>Linux Mint</a>"
	];
	msgi = Math.floor( Math.random() * (msgList.length - 1) ) + 1;
	$("#navMsg span").html(msgList[msgi]);
	setInterval(function msgDisp() {
		msgi = Math.floor(Math.random() * (msgList.length - 1) ) + 1;
		$("#navMsg span").html(msgList[msgi]);
	}, 60000);

	var draggie = new Draggabilly( '.nav', {
		containment:".navBox"
		// options...
	});

	var upos = 0, mpos, bpos, ubl, mul, mbl, bul, openf = 0;

	function getViewDim(){
		var scrH = $(window).innerHeight();
		upos = 0;
		ubl = Math.floor( scrH * 0.15 );
		mul = Math.floor( scrH * 0.35 );
		mpos = Math.floor( scrH * 0.5 );
		mbl = Math.floor( scrH * 0.65 );
		bul = Math.floor( scrH * 0.75 );
		bpos = $("#bot").position().top;
		console.log(bpos);
	}

	getViewDim();

	$("#navbar > .navbtn:last-child").click(function(){
		win = window.open('https://www.stackoverflow.com/', '_blank');
	});

	$(window).resize(function(){
		if(openf == 0){
			$("#nav").removeClass("bot2");
			$("#nav").removeClass("bot52");
			$("#nav").css("top","");
			$("#nav").addClass("bot94");
		}
		else if(openf == 1){
			$("#nav").removeClass("bot52");
			$("#nav").removeClass("bot94");
			$("#nav").css("top","");
			$("#nav").addClass("bot2");
		}
		else if(openf == 2){
			$("#nav").removeClass("bot94");
			$("#nav").removeClass("bot52");
			$("#nav").css("top","");
			$("#nav").addClass("bot52");
		}
	});

	function setNavTop(){
		$("html").addClass("noscroll");
		$("#nav").removeClass("bot52");
		$("#nav").removeClass("bot94");
		$("#nav").css("top","");
		$("#nav").addClass("bot2");
		$("#navBox").addClass("overlay");
		openf = 1;
	}

	function setNavMid(){
		$("html").addClass("noscroll");
		$("#nav").removeClass("bot2");
		$("#nav").removeClass("bot94");
		$("#nav").css("top","");
		$("#nav").addClass("bot52");
		$("#navBox").addClass("overlay");
		$("#navBox").removeClass("rmoverlay");
		openf = 2;
	}

	function setNavBot(){
		$("#navBox").removeClass("overlay");
		$("#navBox").addClass("rmoverlay");
		$("html").removeClass("noscroll");
		$("#nav").removeClass("bot52");
		$("#nav").removeClass("bot2");
		$("#nav").css("top","");
		$("#nav").addClass("bot94");
		openf = 0;
	}

	draggie.on('dragEnd', function(event, pointer){
		var dposy = draggie.position.y;
		console.log("dposy: " + dposy);
		if(openf == 0){
			if(dposy < bul){
				console.log("SetTop");
				setNavTop();
			}
			else if(dposy >= bul){
				console.log("SetBottom");
				setNavBot();
			}
		}
		else if(openf == 1){
			if (dposy > ubl) {
				console.log("SetMiddleUB");
				setNavMid();
			}
			else if(dposy <= ubl){
				console.log("SetTopUB");
				setNavTop();
			}
		}
		else if(openf == 2){
			if (dposy > mbl) {
				console.log("SetBottomMB");
				setNavBot();
			}
			else if(dposy <= mbl && dposy > mul){
				console.log("SetMiddleML");
				setNavMid();
			}
			else if(dposy < mul){
				console.log("SetTopMU");
				setNavTop();
			}
			else if(dposy >= mul){
				console.log("SetMiddleMU");
				setNavMid();
			}
		}
	});

});