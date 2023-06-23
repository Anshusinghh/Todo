//selectors
var todoinput=document.querySelector('.todo-input');
var todobutton=document.querySelector('.todo-button');
var todolist=document.querySelector('.todo-list');


//event listeners
todobutton.addEventListener('click',addTodo);
todolist.addEventListener('click',deletecheck);
document.addEventListener('DOMContentLoaded',gettodos);

//functions
function addTodo(event){
    //prevent from submission
    event.preventDefault();

    const tododiv=document.createElement('div');
    tododiv.classList.add('todo');

    const todoitem=document.createElement('li');
    todoitem.classList.add('todo-item');
    todoitem.innerText=todoinput.value;
    tododiv.appendChild(todoitem);
    savelocaltodos(todoinput.value);

    const checked=document.createElement('button');
    checked.innerHTML='<i class="fas fa-check"></i>';
    checked.classList.add('checked');
    tododiv.appendChild(checked);

    const trash=document.createElement('button');
    trash.innerHTML='<i class="fas fa-trash"></i>';
    trash.classList.add('trash');
    tododiv.appendChild(trash);

    todolist.appendChild(tododiv);

    todoinput.value='';
    console.log("reacted");
}
function deletecheck(e){
    
    var item=e.target;
    if(item.classList[0]==="trash")
        {
            let todo=item.parentElement;
            todo.classList.add("slide");
            removelocaltodos(todo);
            todo.addEventListener('transitionend',()=>{
                todo.remove();
            });
            
        }
    if(item.classList[0]==="checked"){
        let todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}
function savelocaltodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}
function gettodos(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    
    function testin(todo){
        const tododiv=document.createElement('div');
    tododiv.classList.add('todo');

    const todoitem=document.createElement('li');
    todoitem.classList.add('todo-item');
    todoitem.innerText=todo;
    tododiv.appendChild(todoitem);
    

    const checked=document.createElement('button');
    checked.innerHTML='<i class="fas fa-check"></i>';
    checked.classList.add('checked');
    tododiv.appendChild(checked);

    const trash=document.createElement('button');
    trash.innerHTML='<i class="fas fa-trash"></i>';
    trash.classList.add('trash');
    tododiv.appendChild(trash);

    todolist.appendChild(tododiv);
    }
    todos.forEach(testin);
}
function removelocaltodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}