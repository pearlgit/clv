$(function () {
	$pageMatterFlick = new Flickity('.pageMatterFlick', {
		"contain": true,
		"pageDots": false,
		"prevNextButtons": false,
		"adaptiveHeight": true,
		"cellAlign": "left"
	});

	var emobj = {
		1: {
			1: "(︶︵︶ )",
			2: "(︶⸏︶  )",
			3: "(︶‿︶  )",
		},
		2: {
			1: "(⌒︵⌒ )",
			2: "(⌒⸏⌒  )",
			3: "(⌒‿⌒  )",
		},
		3: {
			1: "(˘꒢˘ )",
			2: "(˘_˘  )",
			3: "(˘◡˘  )",
		},
		4: {
			1: "(ᵔᵕᵔ  )",
			2: "(ᵔ_ᵔ  )",
			3: "(ᵔ᎑ᵔ  )",
		},
		5: {
			1: "(꒡꒢꒡  )",
			2: "(꒡⸏꒡  )",
			3: "(꒡‿꒡  )",
		},
		6: {
			1: "(◕︵◕ )",
			2: "(◕⸏◕  )",
			3: "(◕‿◕  )",
		},
		7: {
			1: "(o_O  )",
			2: "(⊙_⊙  )",
			3: "(⊙‿⊙  )",
		},
		8: {
			1: "(¬︵¬ )",
			2: "(¬⸏¬  )",
			3: "(¬‿¬  )",
		},
		9: {
			1: "(☒︵☒  )",
			2: "(☐⸏☐  )",
			3: "(☑‿☑  )",
		},
		10: {
			1: "(�︵� )",
			2: "(✦⸏✦  )",
			3: "(✦‿✦  )",
		},
		11: {
			1: "(  𑱢 ﹏ 𑱢)",
			2: "(  𑱢 ︵ 𑱢)",
			3: "(  𑱢 ‿ 𑱢)",
			4: "(  𑱢 ⸏ 𑱢)",
		},
		12: {
			1: "(𒊹︵𒊹 )",
			2: "(𒊹⸏𒊹  )",
			3: "(𒊹‿𒊹  )",
		},
		13: {
			1: "(𖣘︵𖣘 )",
			2: "(𖣘⸏𖣘  )",
			3: "(𖣘‿𖣘  )",
		},
		14: {
			1: "(𖣐︵𖣐 )",
			2: "(𖣐⸏𖣐  )",
			3: "(𖣐‿𖣐  )",
		},
		15: {
			1: "(@︵@ )",
			2: "(@⸏@  )",
			3: "(@‿@  )",
		},
		16: {
			1: "(᪤︵᪤ )",
			2: "(᪤⸏᪤  )",
			3: "(᪤‿᪤  )",
		},
		17: {
			1: "(ꉺ︵ꉺ )",
			2: "(ꉻ⸏ꉻ  )",
			3: "(ꄱ‿ꄱ  )",
		},
		18: {
			1: "(Ő︵Ő )",
			2: "(Ő⸏Ő  )",
			3: "(Ő‿Ő  )",
		},
		19: {
			1: "(◟_◞  )",
			2: "(◜⸏◝  )",
			3: "(◜‿◝  )",
		},
		20: {
			1: "(⩌︵⩌ )",
			2: "(⩌⸏⩌  )",
			3: "(⩐‿⩐  )",
		},
		21: {
			1: "(⬒︵⬒ )",
			2: "(⬒⸏⬒  )",
			3: "(⬒‿⬒  )",
		},
		22: {
			1: "(⬓︵⬓ )",
			2: "(⬓⸏⬓  )",
			3: "(⬓‿⬓  )",
		},
		23: {
			1: "(᰽︵ᰞ )",
			2: "(o⸏ᰞ  )",
			3: "(o‿O )",
		},
		24: {
			1: "(㇣︵㇣ )",
			2: "(㇣⸏㇣  )",
			3: "(ꄲ‿ꄲ  )",
		},
		25: {
			1: "(ᗌ︵ᗏ  )",
			2: "(ᗌ⸏ᗏ  )",
			3: "(ᗌ‿ᗏ  )",
		},
		26: {
			1: "(>︵< )",
			2: "(>⸏<  )",
			3: "(>‿<  )",
		},
		27: {
			1: "(*︵* )",
			2: "(*⸏*  )",
			3: "(*‿*  )",
		},
		28: {
			1: "(~︵~ )",
			2: "(~⸏~  )",
			3: "(~‿~ )",
		},
		29: {
			1: "(#︵# )",
			2: "(#⸏#  )",
			3: "(#‿#  )",
		},
		30: {
			1: "(^︵^ )",
			2: "(^⸏^  )",
			3: "(^‿^  )",
		},
		31: {
			1: "(×︵× )",
			2: "(×⸏×  )",
			3: "(×‿×  )",
		},
		32: {
			1: "(°︵° )",
			2: "(°⸏°  )",
			3: "(°‿°  )",
		},
		33: {
			1: "(`︵` )",
			2: "(`⸏`  )",
			3: "(`‿`  )",
		},
		34: {
			1: "(﹌︵﹌  )",
			2: "(﹋⸏﹋  )",
			3: "(︶‿︶  )",
		},
		35: {
			1: "(・︵・ )",
			2: "(・⸏・  )",
			3: "(・‿・  )",
		},
		36: {
			1: "(𐄂︵𐄂 )",
			2: "(𐄂⸏𐄂  )",
			3: "(𐄂‿𐄂  )",
		},
		37: {
			1: "(ꤥ︵ꤥ  )",
			2: "(ꤥ⸏ꤥ  )",
			3: "(ꤥ‿ꤥ  )",
		},
		38: {
			1: "(⦸︵⦸ )",
			2: "(⦸⸏⦸  )",
			3: "(⦸‿⦸  )",
		},
		39: {
			1: "(⦷︵⦷ )",
			2: "(⦷⸏⦷  )",
			3: "(⦷‿⦷  )",
		},
		40: {
			1: "(𐅁𐅀︵𐅁𐅀 )",
			2: "(𐅁𐅀⸏𐅁𐅀  )",
			3: "(𐅁𐅀‿𐅁𐅀  )",
		},
		41: {
			1: "(⬦︵⬦ )",
			2: "(⬥⸏⬥  )",
			3: "(⬥‿⬥  )",
		},
		42: {
			1: "(⏑︵⏑ )",
			2: "(⏑⸏⏑  )",
			3: "(⏑‿⏑  )",
		},
		43: {
			1: "(ᐞ︵ᐞ )",
			2: "(ᐞ⸏ᐞ  )",
			3: "(ᐞ‿ᐞ  )",
		},
		44: {
			1: "(ᰟ︵ᰟ )",
			2: "(ᰟ⸏ᰟ  )",
			3: "(ᰟ‿ᰟ  )",
		},
		45: {
			1: "(⬨︵⬨ )",
			2: "(⬧⸏⬧  )",
			3: "(⬧‿⬧  )",
		},
	}

	function putEmo(){
		var emobjLen = Object.keys(emobj).length;
		$("#pageSlideCountIndi").html( emobj[random1to(emobjLen)][3] );
	}
	function random1to(n){
		return(Math.floor(Math.random() * n) + 1);
	}
	putEmo();
	
	setTimeout(function () {
		$pageMatterFlick.reloadCells();
	}, 500);

	$(".pageMatter").append("<div class='pageRow pageMatEnd'>*&nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*<br/><< &nbsp; Swipe to change sections. &nbsp; >></div>");

//	$("#pageSlideCountIndi").html( emobj[23][3] );

	var draggie = new Draggabilly('.drag',{
		containment: '.navCont', axis: 'y', handle: '.qrHandle'
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
		$("#navContainer").removeClass("noWidth");
		$("#navBody").removeClass("navMid navBot");
		$("#navBody").css("top","");
		$("#navBody").addClass("navTop");
		openf = 1;
		$("#navContainer").addClass("fullWidth");
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
		$("#navContainer").addClass("noWidth");
		$("#navBody").removeClass("navMid navTop");
		$("#navBody").css("top","");
		$("#navBody").addClass("navBot");
		openf = 0;
		$("#navContainer").removeClass("fullWidth");
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

	function setMatterTop(){
		$("html,body").scrollTop( $("#pageMatterCont").offset().top - $("#introFix").outerHeight() - $("#pagePillsCont").outerHeight() + 2);
	}
	$pageMatterFlick.on('change', function (index) {
		setMatterTop();
		$("#pageSlideCountIndi").html("(" + (index + 1) + "/" + $pageMatterFlick.slides.length + ")");
	});

	$pageMatterFlick.on('pointerUp', function (event, pointer) {
		setTimeout(function () {
			$pageMatterFlick.reloadCells();
		}, 500);
	});

	$(".addPageRow").click(function () {
		$("<div class=\"pageCard\">Page 01 Row3</div>").insertAfter(".pageMatter.is-selected > .pageCard:nth-last-child(2)");
	});
	$(".remPageRow").click(function () {
		$(".pageMatter.is-selected > .pageCard:nth-last-child(2)").remove();
	});

});


