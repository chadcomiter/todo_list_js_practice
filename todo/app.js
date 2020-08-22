//Selectors (Set some variable by grabbing whatever html by class, id, whatever.)
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners (These call functions when some event happens, it seems)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

//Add Todo on button click
function addTodo(event){
        //Prevent form from submitting
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear ToDo Input
    todoInput.value = '';
    
}

//Delete and Check (e = event)
function deleteCheck(e){
    const item = e.target;
    //DELETE
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //CHECK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

