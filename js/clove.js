$(function () {
	console.log("ready!");
	var myaud = document.getElementById("myAudio");

	var dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var wk1ri = [0.20, 0.30, 0.50, 0.60, 0.25, 0.45, 0.40, 0.20];
	var wk2ri = [0.10, 0.35, 0.55, 0.30, 0.65, 0.35, 0.45, 0.25];
	var wk1freq = [20, 60, 60, 45, 60, 30, 60, 90];
	var wk2freq = [5, 45, 20, 15, 60, 45, 60, 120];

	var flag = 0;
	var submitF = 0;
	var alflag = 0;

	var wkmax = 20;
	var wknum = 1;
	var stmul = 1;

	var tgt = 1*60;
	var rem;
	var freq;
	var ri;

	var date = new Date();
	var ld = date.getDay();
	var lh = date.getHours();
	var lm = date.getMinutes();
	var ls = date.getSeconds();

	pageinit();

	$("button[type='submit']").click(function setLForm(){
		console.log("Form Submitted");
		if(wkmax < 10){
			wkmax = 10;
		}
		localStorage.setItem('wkmax', $("input[name='maxLimit']").val() );
		localStorage.setItem('wknum', $("input[name='weekRadio']:checked").val() );
		localStorage.setItem('stmul', $("input[name='startRadio']:checked").val() );
		localStorage.setItem('loadDay', ld);
		console.log("SubmittedValues!!");
		freq = setFreqRI( localStorage.getItem('wknum'), alflag ).freq;
		ri = setFreqRI( localStorage.getItem('wknum'), alflag ).ri;
		tgt = setTgt();
		repeatP5();
		setInterval(repeatP5, 0.5 * 1000);
		$("#cdtimer3").remove();
	});

	$('input[name="maxLimit"]').on("input",function () { // bind a function to the change event
		var inpval = $('input[name="maxLimit"]').val();
		if(inpval < 20){
			inpval = 20;
		}
		$("#maxToday").html("("+ inpval +")");
	});

	$('input[name="weekRadio"]').click(function () { // bind a function to the change event
		if(flag == 0){
			if ($(this).is(":checked")) { // check if the radio is checked
				week = $(this).val(); // retrieve the value
				$("#weekType").html("("+week+")");
				if(week == 1){
					$("#day").html(" / "+ dayArray[ld]+"("+100*wk1ri[ld]+"%, "+wk1freq[ld]+")" );
				}
				else if(week == 2){
					$("#day").html(" / "+ dayArray[ld]+"("+100*wk2ri[ld]+"%, "+wk2freq[ld]+")" );
				}
				
			}
		}
	});
	
	$('input[name="startRadio"]').click(function () { // bind a function to the change event
		if(flag == 0){
			if ($(this).is(":checked")) { // check if the radio is checked
				startMul = $(this).val(); // retrieve the value
				localStorage.setItem('stmul', startMul);
				$("#startTime").html("(x"+startMul+")");
				$("#mm3").html( setFreqRI( localStorage.getItem('wknum'), 0).freq );
			}
		}
	});

	function getLVals(){// Reads values from localStorage and stores in JS vars;

	}


	function getTotSec(h,m,s){// Converts hour, min & sec into total sec;
		var totSec = (h*3600) + (m*60) + (s);
		return totSec;
	}

	function setTgt(){
		var dt = new Date();
		return ( (3600*dt.getHours()) + (60*dt.getMinutes()) + (dt.getSeconds()) + (60*setFreqRI( localStorage.getItem('wknum'), alflag ).freq) );
	}

	function setFreqRI(wn, alflag){
		var freq = 1;
		var stm;
		var mindy;
		if(alflag == 0){
			stm = localStorage.getItem('stmul');
			mindy = new Date().getMinutes();
			freq = (stm - mindy%stm);
		}
		else if(alflag == 1){
			if(wn == 1){
				freq = wk1freq[ld];
			}
			else if(wn == 2){
				freq = wk2freq[ld];
			}
		}
		return {
			freq:freq,
			ri:wk2ri[ld]
		};
	}

	function repeatP5(){
		var now = new Date();
		nowh = now.getHours();
		nowm = now.getMinutes();
		nows = now.getSeconds();
		var nowt = ( 3600 * nowh ) + ( 60 * nowm ) + ( 1 * nows );
		var rem = tgt - nowt;
		var days = Math.floor(rem / ( 60 * 60 ));
		var hours = Math.floor((rem%(60 * 60))/(60 * 60));
		var minutes = Math.floor((rem % (60 * 60)) / (60));
		var seconds = Math.floor((rem % (60)));

		if(hours < 10){
			$("#hh").html("0"+hours);
		}
		else if(hours >= 10){
			$("#hh").html(hours);
		}

		if(minutes < 10){
			$("#mm").html("0"+minutes);
		}
		else if(minutes >= 10){
			$("#mm").html(minutes);
		}

		if(seconds < 10){
			$("#ss").html("0"+seconds);
		}
		else if(seconds >= 10){
			$("#ss").html(seconds);
		}

		// console.log("rem:"+rem+" | Tgt:" + tgt+" | Nowt:"+nowt);
		if (rem == 5) {
			if(alflag == 0){
				playAudio();
				alflag = 1;
				setTimeout(5*60);
				tgt = setTgt();
			}
			else if(alflag == 1){
				playAudio();
				alflag = 1;
				tgt = setTgt();
			}
		}

		wkmax = localStorage.getItem('wkmax');
		$("#cdtimer").html("Today's RI - "+ (wkmax*ri ) );
		if(nowh<10){
			$("#time").html("Current Time - 0"+nowh+":"+nowm+":"+nows);
		}
		else if(nowm<10){
			$("#time").html("Current Time - "+nowh+":0"+nowm+":"+nows);
		}
		else if(nows<10){
			$("#time").html("Current Time - "+nowh+":"+nowm+":0"+nows);
		}
		else if(nowh<10 && nowm<10){
			$("#time").html("Current Time - 0"+nowh+":0"+nowm+":"+nows);
		}
		else if(nowh<10 && nows<10){
			$("#time").html("Current Time - 0"+nowh+":"+nowm+":0"+nows);
		}
		else if(nowm<10 && nows<10){
			$("#time").html("Current Time - "+nowh+":0"+nowm+":0"+nows);
		}
		else if(nowh<10 && nowm<10 && nows<10){
			$("#time").html("Current Time - 0"+nowh+":0"+nowm+":0"+nows);
		}
		else{
			$("#time").html("Current Time - "+nowh+":"+nowm+":"+nows);
		}
	}

	function pageinit(){
		$("#maxToday").html("("+wkmax+")");
		$("#weekType").html("("+wknum+")");
		$("#startTime").html("(x"+stmul+")");
		if(lh<10){
			$("#time").html("Time at Page Load - 0"+lh+":"+lm+":"+ls);
		}
		else if(lm<10){
			$("#time").html("Time at Page Load - "+lh+":0"+lm+":"+ls);
		}
		else if(ls<10){
			$("#time").html("Time at Page Load - "+lh+":"+lm+":0"+ls);
		}
		else if(lh<10 && lm<10){
			$("#time").html("Time at Page Load - 0"+lh+":0"+lm+":"+ls);
		}
		else if(lh<10 && ls<10){
			$("#time").html("Time at Page Load - 0"+lh+":"+lm+":0"+ls);
		}
		else if(lm<10 && ls<10){
			$("#time").html("Time at Page Load - "+lh+":0"+lm+":0"+ls);
		}
		else if(lh<10 && lm<10 && ls<10){
			$("#time").html("Time at Page Load - 0"+lh+":0"+lm+":0"+ls);
		}
		else{
			$("#time").html("Time at Page Load - "+lh+":"+lm+":"+ls);
		}
		$("#day").html(" / "+ dayArray[ld]+"("+100*wk1ri[ld]+"%, "+wk1freq[ld]+")" );
	}

	function playAudio(){
		myaud.play();
		console.log("AudioPlayStared");
		setTimeout( function(){myaud.muted = false;}, 5000 );
		console.log("AudioUnmuted");
	}
	function pauseAudio(){ myaud.pause(); }
	function stopAudio(){ myaud.stop(); }
});