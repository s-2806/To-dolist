let btn1= document.getElementById('btn1');

var descripType=document.getElementById('description');



var numType = document.getElementById("number");

let fetchcont=document.getElementById("fetchcont");



function getselectedvalue() {
    var selecteditem=  document.getElementById("jobtype").value
    console.log(selecteditem);
    localStorage.setItem( "jobtype",selecteditem);
}



// btn1.addEventListener('click',addtask)

function addtask() {
localStorage.setItem("descriptype",descripType.value);
localStorage.setItem("numtype",numType.value);
let div1=document.createElement('div');
div1.innerHTML= ` <div class="fetch" > JOB-TYPE:${localStorage.getItem("jobtype")} <br> DESCRIPTION: ${localStorage.getItem("descriptype")}<br> NUMBER:${localStorage.getItem("numtype")}</div><br><br>`;
fetchcont.appendChild(div1);


numType.value="";
descripType.value="";
jobtype.value="select";
}
// localStorage.setItem('details',fetchcont);
// /* */<div class="fetch" > JOB-TYPE:${selecteditem.value} <br></br>