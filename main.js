/*
<div class="todo">
          <ul class="todo-list">
             <li>
                Buy something
              </li>
         <button class="done-btn"><i class="fas fa-check"></i></button>
         <button class="delete-btn"><i class="fas fa-trash"></i></button>
        </ul>
</div>
*/
const input = document.querySelector('.input-field');
const submit = document.querySelector('.submit-btn');
const todosHolder = document.querySelector('.todos-holder');


//Events
submit.addEventListener('click', addToList);

//Functions
function addToList(event){
    event.preventDefault();
  
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const done = document.createElement('button');
    const del = document.createElement('button');
    const inputText = input.value;
    done.innerHTML = '<i class="fas fa-check"></i>';
    del.innerHTML = '<i class="fas fa-trash"></i>'
    //append element together
    if(inputText === ""){
        input.classList.add('error');
        return;
    }
    todosHolder.appendChild(div);
    div.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(done);
    ul.appendChild(del);
    //add clases
    div.classList.add('todo');
    ul.classList.add('todo-list');
    done.classList.add('done-btn');
    del.classList.add('delete-btn');
    input.classList.remove('error');
    //put input text to the li 
    
 
    li.innerText =  inputText;
    input.value = "";
    

    //Check and Delete event listener 
    done.addEventListener('click', checkItem);
    del.addEventListener('click',deleteItems)
}

function checkItem(event){
  const doneUl = event.target.parentElement.parentElement;
  doneUl.classList.add('done');
}
function deleteItems(event){
    const doneUl = event.target.parentElement.parentElement;
    doneUl.parentElement.remove();
}