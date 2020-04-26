$(function () {

	setTimeout(function() {
		$("#tempLogo").remove();
	},2800);

	console.log("init success");
	
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
		mul = Math.floor( scrH * 0.25 );
		mpos = Math.floor(scrH * 0.40 );
		mbl = Math.floor( scrH * 0.55 );
		bul = Math.floor( scrH * 0.77 );
		bpos = $("#bot").position().top;
		console.log(bpos);
	}

	getViewDim();

	$("#navbar > .navbtn:last-child").click(function(){
		win = window.open('https://www.stackoverflow.com/', '_blank');
	});

	$(window).resize(function(){
		$("#nav").css("top","");
		if(openf == 0){
			$("#nav").removeClass("bot2");
			$("#nav").removeClass("bot52");
			$("#nav").addClass("bot94");
		}
		else if(openf == 1){
			$("#nav").removeClass("bot52");
			$("#nav").removeClass("bot94");
			$("#nav").addClass("bot2");
		}
		else if(openf == 2){
			$("#nav").removeClass("bot94");
			$("#nav").removeClass("bot2");
			$("#nav").addClass("bot52");
		}
	});

	function setNavTop(){
		$("html").addClass("noscroll");
		$("#nav").removeClass("bot52");
		$("#nav").removeClass("bot94");
		$("#nav").css("top","");
		$("#nav").addClass("bot2");
		openf = 1;
	}

	function setNavMid(){
		$("html").addClass("noscroll");
		$("#nav").removeClass("bot2");
		$("#nav").removeClass("bot94");
		$("#nav").css("top","");
		$("#nav").addClass("bot52");
		openf = 2;
	}

	function setNavBot(){
		$("html").removeClass("noscroll");
		$("#nav").removeClass("bot52");
		$("#nav").removeClass("bot2");
		$("#nav").css("top","");
		$("#nav").addClass("bot94");
		openf = 0;
	}

	draggie.on('dragEnd', function(event, pointer){
		var dposy = draggie.position.y;
		if(openf == 0){
			if(dposy < bul){
				setNavTop();
			}
			else if(dposy >= bul){
				setNavBot();
			}
		}
		else if(openf == 1){
			if (dposy > ubl) {
				setNavMid();
			}
			else if(dposy <= ubl){
				setNavTop();
			}
		}
		else if(openf == 2){
			if (dposy > mbl) {
				setNavBot();
			}
			else if(dposy <= mbl && dposy > mul){
				setNavMid();
			}
			else if(dposy < mul){
				setNavTop();
			}
			else if(dposy >= mul){
				setNavMid();
			}
		}
	});

	function topgr(){
		$("#navbar > div").css("box-shadow","inset #cf0 0 4px, inset #fff4 0 -2px");
	}
	function midaq(){
		$("#navbar > div").css("box-shadow","inset #0ff 0 4px, inset #fff4 0 -2px");
	}
	function botgy(){
		$("#navbar > div").css("box-shadow","inset #ddd9 0 2px, inset #fff4 0 -2px");
	}

	draggie.on('dragMove', function(event, pointer, moveVector){
		var dposy = draggie.position.y;
		if(openf == 0){
			if(dposy < bul){
				topgr();
			}
			else if(dposy >= bul){
				botgy();
			}
		}
		else if(openf == 1){
			if (dposy > ubl) {
				midaq();
			}
			else if(dposy <= ubl){
				topgr();
			}
		}
		else if(openf == 2){
			if (dposy > mbl) {
				botgy();
			}
			else if(dposy <= mbl && dposy > mul){
				midaq();
			}
			else if(dposy < mul){
				topgr();
			}
			else if(dposy >= mul){
				midaq();
			}
		}
	});

	$("#mainmain").click(function() {
		if(openf > 0){
			setNavBot();
			botgy();
		}
	});

});