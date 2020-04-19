$(function () {
	console.log("init success");

	setInterval(function() {
		var dt = new Date(Date.now());
		var dayList = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
		$("#time").html(dayList[dt.getUTCDay()]+">"+dt.getHours()+":"+dt.getMinutes());
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
		msgi = Math.floor(Math.random() * 6) + 1;
		$("#navMsg span").html(msgList[msgi]);
	}, 60000);

	var botPos = $("#bot").position().top;
	var contPos = $("#navCont").position().top;
	var UPos = contPos;
	var UL = Math.floor(botPos * 0.4);
	var LL = Math.floor(botPos * 0.7);
	var NPos = botPos;
	var openf = 0;
	var diagf = 0;

	var draggie = new Draggabilly(".dragg",{
		containment:".navCont"
	});


	function draggieSetUp(){
		draggie.setPosition(0, UPos);
		$("#navCont").removeClass("vh150");
		$("#navCont").addClass("vh80");
		openf = 1;
		$("html").addClass("noscroll");
		$("#navbar > .navbarBtn:first-child").html("<i class='fas fa-times'></i>");
	}

	function draggieSetBot(){
		draggie.setPosition(0, NPos);
		openf = 0;
		diagf = 0;
		$("html").removeClass("noscroll");
		$("#navbar > .navbarBtn:first-child").html("<i class='fas fa-bars'></i>");
	}

	$("#navbar > .navbarBtn:first-child").click(function(){
		if(openf === 1){
			draggieSetBot();
			$("#navCont").addClass("vh150");
			$("#navCont").removeClass("vh80");
		}
		else if(openf === 0){
			draggieSetUp();
		}
	});

	$("#navbar > .navbarBtn:last-child").click(function(){
		win = window.open('https://www.stackoverflow.com/', '_blank');
	});

	$(window).resize(function(){
		botPos = $("#bot").position().top;
		contPos = $("#navCont").position().top;
		UPos = contPos;
		UL = Math.floor(botPos * 0.4);
		LL = Math.floor(botPos * 0.7);
		NPos = botPos;

		if(openf === 0){
			draggie.setPosition(0,NPos);
		}
		else if(openf === 1){
			draggie.setPosition(0,UPos);
		}
	});

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

});