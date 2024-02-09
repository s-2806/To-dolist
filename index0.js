let btn1= document.getElementById('btn1');

let descripType=document.getElementById('description');

let jobType = document.getElementById("jobtype");

let numType = document.getElementById("number");

let fetchcont=document.getElementById("fetchcont");

btn1.addEventListener('click',addtask)
 
function addtask() {
let div1=document.createElement('div');
div1.innerHTML= `<div class="fetch" > JOB-TYPE:${jobType.value} <br> DESCRIPTION: ${descripType.value}<br> NUMBER:${numType.value}</div><br><br>`;
fetchcont.appendChild(div1);

numType.value="";
descripType.value="";
jobType.value="";
}
localStorage.setItem('details',fetchcont);