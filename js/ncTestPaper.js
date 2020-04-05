$(function(){
    // removes n random elements from array this
    // and returns them
    Array.prototype.pick = function(n) {
        if(!n || !this.length) return [];
        var i = Math.floor(this.length*Math.random());
        return this.splice(i,1).concat(this.pick(n-1));
    }
    // returns n unique random numbers between min and max
    function pick(n, min, max) {
        var a = [], i = max;
        while(i >= min) a.push(i--);
        return a.pick(n);
    }

    var arrMCQ = pick(42,1,50);
    for(var j = 0; j < arrMCQ.length; j++){
        $("#mainMCQ > ol > li:nth-child("+arrMCQ[j]+")").empty();
    }
    $("#mainMCQ > ol > li:empty").remove();

    var arrOnM = pick(42,1,50);
    for(var j = 0; j < arrOnM.length; j++){
        $("#mainOnM > ol > li:nth-child("+arrOnM[j]+")").empty();
    }
    $("#mainOnM > ol > li:empty").remove();

    var arrTwM = pick(42,1,50);
    for(var j = 0; j < arrTwM.length; j++){
        $("#mainTwM > ol > li:nth-child("+arrTwM[j]+")").empty();
    }
    $("#mainTwM > ol > li:empty").remove();

    var arrTrM = pick(41,1,50);
    for(var j = 0; j < arrTrM.length; j++){
        $("#mainTrM > ol > li:nth-child("+arrTrM[j]+")").empty();
    }
    $("#mainTrM > ol > li:empty").remove();

    var arrFrM = pick(46,1,50);
    for(var j = 0; j < arrFrM.length; j++){
        $("#mainFrM > ol > li:nth-child("+arrFrM[j]+")").empty();
    }
    $("#mainFrM > ol > li:empty").remove();

    var arrFvM = pick(49,1,50);
    for(var j = 0; j < arrFvM.length; j++){
        $("#mainFvM > ol > li:nth-child("+arrFvM[j]+")").empty();
    }
    $("#mainFvM > ol > li:empty").remove();
});
