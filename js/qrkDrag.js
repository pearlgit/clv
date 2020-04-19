$(function () {
	console.log("init success");
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
	$(window).scroll(function(){
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
				draggie.setPosition(0, UPos);
				$("#navCont").removeClass("vh150");
				$("#navCont").addClass("vh80");
				openf = 1;
			}
			else if(dragPosY >= LL){
				draggie.setPosition(0, NPos);
				openf = 0;
				diagf = 0;
			}
		}
		else if(openf === 1){
			//console.log("L04: Entered openf=1");
			if(dragPosY > UL){
				draggie.setPosition(0, NPos);
				openf = 0;
				diagf = 0;
			}
			else if(dragPosY <= UL){
				draggie.setPosition(0, UPos);
				openf = 1;
			}
		}
	});

	draggie.on("dragMove",function(event, pointer, moveVector){
		var moveV = moveVector.y;
		if(openf === 1 && moveV > 100 && diagf === 0){
			$("#navCont").addClass("vh150");
			$("#navCont").removeClass("vh80");
			diagf = 1;
			UIkit.notification("Please swipe again to close menu!", {status:'alert',pos:'bottom-center',timeout:2000})
		}
	});
	/*
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	*/

	$('.carousel-main').flickity({
		pageDots: false,
		prevNextButtons: false
	});
	// 2nd carousel, navigation
	$('.carousel-nav').flickity({
	asNavFor: '.carousel-main',
	contain: true,
	pageDots: false,
	prevNextButtons: false
	});

});