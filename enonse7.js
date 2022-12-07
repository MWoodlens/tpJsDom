const chif="1234567890";
const otherKey=['Backspace','ArrowLeft','ArrowRight'];
const idPhone=document.getElementById('phone');
const sp=document.getElementById('sp');

idPhone.addEventListener('keydown',(ev)=>{
    if(!chif.includes(ev.key) && !otherKey.includes(ev.key)){
        ev.preventDefault();
        sp.innerHTML="chif pou mete";
        sp.style.color='#ff4436';
        sp.style.fontStyle='italic';
    }
    if(ev.target.value.length==8 && !otherKey.includes(ev.key)){
        sp.innerHTML="";
        ev.preventDefault();
    }
});

idPhone.addEventListener('input',(ev)=>{
    if(ev.target.value.length<8){
        sp.innerHTML="antre yon bon numero phone";
        sp.style.color='#ff4436';
        sp.style.fontStyle='italic';
    }
    if(ev.target.value.length==8){
        ev.preventDefault();
        sp.innerHTML="";
    }
});


