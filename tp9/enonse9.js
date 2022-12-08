const liste=['click', 'dblclick', 'aksyonpam'];
let btn=document.querySelector('#action');
let input=document.querySelector('input[name=event-name]');
btn.addEventListener('aksyonpam',(e)=>{
    alert('sa se aksyon pam');
});
const eventpam=new Event('aksyonpam');
const doubleclick=new Event('dblclick');
const span=document.querySelector('span');

input.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        if(!liste.includes(input.value)){
            input.blur();
           alert('Evènman sa pa valid');
        }else
        if(input.value=='click'){
            btn.click();
        }else
        if(input.value=='dblclick'){
            btn.dispatchEvent(doubleclick);
        }else{
            btn.dispatchEvent(eventpam);
        }
    }
})
liste.forEach( function(ev) {
    btn.addEventListener(ev, (e)=>{
        span.innerHTML=`Evènman sa valid. Se ${e.type}`;
    });
});