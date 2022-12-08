const btn=document.querySelector('#copy');
const h1=document.querySelector('h1');
const p=document.querySelector('p');
const main=document.querySelector('main');

h1.addEventListener('selectstart',(e)=>{
    e.preventDefault();
});
p.addEventListener('selectstart',(e)=>{
    e.preventDefault();
});
h1.addEventListener('copy',(e)=>{
    e.preventDefault();
});
p.addEventListener('copy',(e)=>{
    e.preventDefault();
});

btn.addEventListener('click',(e)=>{
    let range=document.createRange();
    range.setStart(h1.firstChild, 0) ;
  range.setEnd(p.firstChild, p.textContent.length);

  let selection=document.getSelection();
  selection.addRange(range);
  console.log(selection.toString())
  
  navigator.clipboard.writeText( selection.toString())
});