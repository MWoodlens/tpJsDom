const timer=document.getElementById('timer');
let val=timer.getAttribute('value');
timer.innerHTML=val;

let t=setInterval(timerPam,1000);
function timerPam(){
    val--;
    timer.innerHTML=val;
    if(val<0){
        timer.innerHTML='time out';
        clearInterval(t);
    }
}
