let position;
const body=document.body;
const input=document.querySelectorAll('input[type=text]');
console.log(body);
const btn=document.querySelector('.btn');
body.onload=function(ev){
    input[0].focus();
    position=0;
     input[0].style.outline='2px solid #0275d8'
     for(el of input){
        el.style.borderColor='#777';
     }
}

btn.addEventListener('click',(ev)=>{
    if(position==(input.length-1)){
        input[position].blur();
        input[position].style.outline=''
        input[position].style.borderColor='#777';
        input[0].focus();
        input[0].style.outline='2px solid #0275d8'
        position=0;
    }else{
        input[position].blur();
        input[position].style.outline=''
        input[position].style.borderColor='#777';
        input[position+1].focus();
        input[position+1].style.outline='2px solid #0275d8'
        position++;
    }
});
