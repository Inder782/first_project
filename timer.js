let count=0;
let timer;

function starttimer(){
    timer=setInterval(function(){
        count++;
        document.getElementById("countdown").innerHTML=count;
    },500);
}

function pausetimer(){
    clearInterval(timer);
    count=timer;
    
}
function stoptimer(){
    clearInterval(countdown);
    count=0;
    document.getElementById("countdown").innerHTML="0";
}