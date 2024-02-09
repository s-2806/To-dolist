const form =  document.getElementById("todoform");
const list = document.getElementById("todolist");
const input = document.getElementById("todoinput");

form.addEventListener('submit',(e)=>{
e.preventDefault();
const task = input.value.trim();
if(task!=='')
{
    addTodoItem(task);
    input.value='';
}
}
);
function addTodoItem(task) {
    const item = document.createElement('li');
    item.textContent=task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent='Delete';
    deleteButton.addEventListener('click',()=>{
        deleteTodoItem(item);
    });

    item.appendChild(deleteButton);
    list.appendChild(item);
};

function deleteTodoItem(item){
    item.remove();
}
