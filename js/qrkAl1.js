$(function(){
	console.log("init success!");

	var draggie = new Draggabilly('.drag',{
		containment: '.navCont', axis: 'y'
	});

	var openf = 0, scrH, bul, mbl, mul, tbl;

	
	function calNavLimits(){
		scrH = $(window).innerHeight();
		tbl = Math.floor(scrH * 0.15);
		mul = Math.floor(scrH * 0.27);
		mbl = Math.floor(scrH * 0.57);
		bul = Math.floor(scrH * 0.77);
	}
	
	calNavLimits();

	function setNavTop(){
		$("html").addClass("noscroll");
		$("#navBody").removeClass("navMid navBot");
		$("#navBody").css("top","");
		$("#navBody").addClass("navTop");
		openf = 1;
	}

	function setNavMid(){
		$("html").addClass("noscroll");
		$("#navBody").removeClass("navTop navBot");
		$("#navBody").css("top","");
		$("#navBody").addClass("navMid");
		openf = 2;
	}

	function setNavBot(){
		$("html").removeClass("noscroll");
		$("#navBody").removeClass("navMid navTop");
		$("#navBody").css("top","");
		$("#navBody").addClass("navBot");
		openf = 0;
	}

	$(window).resize(function(){
		calNavLimits();
		$("#navBody").css("top","");
		if(openf == 0){
			setNavBot();
		}
		else if(openf == 1){
			setNavTop();
		}
		else if(openf == 2){
			setNavMid();
		}
	});

	draggie.on('dragEnd',function(event, position){
		var dragpos = draggie.position.y;
		if(openf == 0){
			if(dragpos < bul){
				setNavTop();
			}
			else if(dragpos >= bul){
				setNavBot();
			}
		}
		else if(openf == 1){
			if(dragpos < tbl){
				setNavTop();
			}
			else if(dragpos >= tbl){
				setNavMid();
			}
		}
		else if(openf == 2){
			if(dragpos < mul){
				setNavTop();
			}
			else if(dragpos >= mul && dragpos <= mbl){
				setNavMid();
			}
			else if(dragpos > mbl){
				setNavBot();
			}
		}
	});

	function topClr(){
		$(".navbarBtn").removeClass("nbGray nbAqua");
		$(".navbarBtn").addClass("nbGreen");
	}
	function midClr(){
		$(".navbarBtn").removeClass("nbGray nbGreen");
		$(".navbarBtn").addClass("nbAqua");
	}
	function botClr(){
		$(".navbarBtn").removeClass("nbGreen nbAqua");
		$(".navbarBtn").addClass("nbGray");
	}

	draggie.on('dragMove', function(event,pointer,moveVector) {
		var dragpos = draggie.position.y;
		if(openf == 0){
			if(dragpos < bul){
				topClr();
			}
			else if(dragpos >= bul){
				botClr();
			}
		}
		else if(openf == 1){
			if(dragpos < tbl){
				topClr();
			}
			else if(dragpos >= tbl){
				midClr();
			}
		}
		else if(openf == 2){
			if(dragpos < mul){
				topClr();
			}
			else if(dragpos >= mul && dragpos <= mbl){
				midClr();
			}
			else if(dragpos > mbl){
				botClr();
			}
		}
	});

	$("#navbar > div:last-child").click(function() {
		$("#bodyMain > div:last-child").remove();
	});
	$("#navbar > div:first-child").click(function() {
		$("#bodyMain").append("<div>Row4</div>");
	});

	$("#bodyMain .sticky").wrapInner( "<span></span>");
	$("#bodyMain .sticky span").attr("uk-parallax","opacity: 0.4, 1; viewport: 0.8");
	$("#bodyMain .sticky:first-child span").attr("uk-parallax","opacity: 0.4, 1; viewport: 0.4");
	
	/*
	var stickyIntroOffset = $("#bodyMain div:nth-child(2)").offset().top;
	$("html").scroll(function(){

		if( $("html").scrollTop() < ( stickyIntroOffset / 2 )){
			$("html").scrollTop( stickyIntroOffset );
		}
	});
	*/

});
