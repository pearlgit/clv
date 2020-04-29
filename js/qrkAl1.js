$(function(){
	console.log("init success!");

	var draggie = new Draggabilly('.drag',{
		containment: '.navCont', axis: 'y'
	});

	var bul, mbl, mul, ubl, upos, mpos, bpos;

	$(window).resize(function(){
		$("#navContainer").css("top","");
		if(openf == 0){
			$("#navContainer").removeClass("bot2");
			$("#navContainer").removeClass("bot52");
			$("#navContainer").addClass("bot94");
		}
		else if(openf == 1){
			$("#navContainer").removeClass("bot52");
			$("#navContainer").removeClass("bot94");
			$("#navContainer").addClass("bot2");
		}
		else if(openf == 2){
			$("#navContainer").removeClass("bot94");
			$("#navContainer").removeClass("bot2");
			$("#navContainer").addClass("bot52");
		}
	});

	draggie.on('dragEnd',function(e, p){
		var dragpos = draggie.position.y;
	});

	

});
