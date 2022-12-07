const countryArray = ["Haiti", "France", "United States", "Belgium", "Canada", 
                      "Jamaica", "Mexico", "Brazil", "Nigeria"];
let ul=document.createElement('ul');
let pays=document.getElementById('pays');
const btn=document.querySelector('.btn');
const span=document.querySelector('#show');
countryArray.map(addCountry);
pays.append(ul);
function addCountry(country){
    let li=document.createElement('li');
    let input=document.createElement('input');
    input.setAttribute('type','checkbox');
    input.setAttribute('name','country');
    input.setAttribute('value',country);
    li.append(input);
    li.append(country);
    ul.append(li);

}
const p=document.querySelectorAll('input[name=country]');
let peyi=[];
p.forEach((e)=>{
    e.onchange=function(ev){
        let i;
        if(peyi.includes(ev.target.value)){
            i=peyi.indexOf(ev.target.value);
            peyi.splice(i,1);
        }else{
            peyi.push(ev.target.value);
        }
       
    }
});
btn.addEventListener('click',(evt)=>{
    span.innerHTML="Men lis Peyi ki kwoche yo : "+peyi;
})