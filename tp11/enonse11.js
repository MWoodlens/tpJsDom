const div=document.querySelector('.div-color');

div.onmousemove=(e)=>{
    let x=e.x,y=e.y;
    
    if(x>255){
        x=255;
    }
    if(y>255){
        y=255;
    }
    div.style.backgroundColor=`rgb(${x},${y},${(x+y)/2})`;

}
div.onmouseleave=(e)=>{
    div.style.backgroundColor='#000';
}