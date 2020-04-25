$(function () {
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

	var $draggie = $('.nav').draggabilly({
		containment:".navBox"
	});

	var upos = 0, mpos, bpos, udl, mul, mbl, bul, openf = 0;

	function getViewDim(){
		var scrH = $(window).innerHeight();
		upos = 0;
		mpos = Math.floor( scrH * 0.5 );
		bpos = $("#bot").position().top;
		udl = Math.floor( scrH * 0.15 );
		mul = Math.floor( scrH * 0.35 );
		mbl = Math.floor( scrH * 0.65 );
		bul = Math.floor( scrH * 0.75 );

		console.log(bpos);
	}

	getViewDim();

	$("#navbar > .navbtn:last-child").click(function(){
		win = window.open('https://www.stackoverflow.com/', '_blank');
	});

	$(window).resize(function(){
		if(openf == 0){
			$("#nav").removeAttr("style");
			$("#nav").addClass("bot94");
		}
		else if(openf == 1){
			$("#nav").removeAttr("style");
			$("#nav").addClass("bot52");
		}
		else if(openf == 2){
			$("#nav").removeAttr("style");
			$("#nav").addClass("bot94");
		}
	});
	$draggie.on('dragEnd', function(event, pointer){
		if(openf == 0){
			openf = 1;
		}
		else if(openf == 1){
			openf = 2;
		}
		else if(openf == 2){
			openf = 0;
		}
	});
/*
	draggie.on("dragEnd",function(event,pointer){
		var dragPosY = draggie.position.y;
		//console.log("L02: "+dragPosY+"/"+openf);
		if (openf === 0) {
			//console.log("L03: Entered openf=0");
			if (dragPosY < LL) {
				draggieSetUp();
			}
			else if(dragPosY >= LL){
				draggieSetBot();
			}
		}
		else if(openf === 1){
			//console.log("L04: Entered openf=1");
			if(dragPosY > UL){
				draggieSetBot();
			}
			else if(dragPosY <= UL){
				draggie.setPosition(0, UPos);
				$("#navbar > .navbarBtn:first-child").html("<i class='fas fa-times'></i>");
				openf = 1;
				$("html").addClass("noscroll");
			}
		}
	});

	draggie.on("dragMove",function(event, pointer, moveVector){
		var moveV = moveVector.y;
		var dragPosY = draggie.position.y;

		if (openf === 0) {
			//console.log("L03: Entered openf=0");
			if (dragPosY < LL) {
				$("#navbar>div").css({"box-shadow":"inset #0fc 0 4px, inset rgba(221,221,221,0.4) -0 -2px"});
				$("#nav").css({"box-shadow":"0px -80px 150px #0fc"});
			}
			else if(dragPosY >= LL){
				$("#navbar>div").css({"box-shadow":"inset #ddd 0 2px, inset rgba(221,221,221,0.4) -0 -2px"});
				$("#nav").css({"box-shadow":""});
			}
		}
		else if(openf === 1){
			//console.log("L04: Entered openf=1");
			if(dragPosY > UL){
				$("#navbar>div").css({"box-shadow":"inset #ddd 0 2px, inset rgba(221,221,221,0.4) -0 -2px"});
				$("#nav").css({"box-shadow":""});
			}
			else if(dragPosY <= UL){
				$("#navbar>div").css({"box-shadow":"inset #0fc 0 4px, inset rgba(221,221,221,0.4) -0 -2px"});
				$("#nav").css({"box-shadow":"0px -80px 150px #0fc"});
			}
		}

		if(openf === 1 && moveV > 100 && diagf === 0){
			$("#navCont").addClass("vh150");
			$("#navCont").removeClass("vh80");
			diagf = 1;
			UIkit.notification("Please swipe again to close menu!", {status:'alert',pos:'bottom-center',timeout:2000})
		}
	});


	$('.carousel-main').flickity({
		pageDots: false,
		prevNextButtons: false
	});
	// 2nd carousel, navigation
	$('.carousel-nav').flickity({
		asNavFor: '.carousel-main',
		contain: true,
		pageDots: false,
		prevNextButtons: false,
		percentPosition: false
	});
	*/
});