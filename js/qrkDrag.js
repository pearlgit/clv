$(function () {
	console.log("init success");
	$("#htcom").html(document.documentElement.clientHeight);
	var UPos = Math.floor(window.innerHeight * 0.2);
	var UL = Math.floor(window.innerHeight * 0.4);
	var LL = Math.floor(window.innerHeight * 0.7);
	var NPos = Math.floor(window.innerHeight * 0.92);
	var openf = 0;
	var diagf = 0;

	$(window).resize(function(){
		$("#htcom").html(document.documentElement.clientHeight);
		UPos = Math.floor(window.innerHeight * 0.2);
		UL = Math.floor(window.innerHeight * 0.4);
		LL = Math.floor(window.innerHeight * 0.7);
		NPos = Math.floor(window.innerHeight * 0.92);
	});

	var draggie = new Draggabilly(".dragg",{
		containment:".navCont"
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