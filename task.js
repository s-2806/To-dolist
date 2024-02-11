const info1 = document.getElementById('name');
const rollnumber = document.getElementById('rollnumber');
const output = document.getElementById('formoutput');
const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const namevalue = info1.value.trim();
    const rollvalue = rollnumber.value.trim();
    if(namevalue!==''&& rollvalue!=='')
    {
        addtotheoutputname(namevalue);
        addtotheoutputroll(rollvalue);

        info1=='';
        rollvalue=='';

    }
});

function addtotheoutputname(namevalue)
{
    const item1 = document.createElement('th');
    item1.textContent=namevalue;
    console.log(item1.textContent);
    output.appendChild(item1);
}
function addtotheoutputroll(rollvalue)
{
    const item2 = document.createElement('th');
    item2.textContent=rollvalue;
    console.log(item2.textContent);
    // const deletebutton = document.createElement('button');
    // deletebutton.textContent='delete';
    // deletebuttton.addEventListener('click',()=>{
    //     deleteinfo(item1,item2);
      

    // });

    // item2.appendChild(deletebutton);
    output.appendChild(item2);
}


