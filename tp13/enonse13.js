const btn=document.querySelector('.btn');
const div=document.querySelector('.data-wrapper')
btn.addEventListener('click',getResponse);

  async function getResponse() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await response.json(); 
    for(i in data){
    let h3=document.createElement('h3');
    h3.innerHTML=data[i]['title'];
    let inputCheck=document.createElement('input');
    inputCheck.setAttribute('type','checkbox');
    if(data[i]['completed']===true){
        inputCheck.setAttribute('checked',"");
    }
    let label=document.createElement('label');
    label.innerHTML='ID : '+data[i]['id'];
    let hr=document.createElement('hr');
    div.append(h3);
    div.append(inputCheck);
    div.append(label);
    div.append(hr);
    }
   
}
