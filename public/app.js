let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault(); 
  //prevent form submitted 避免form送出
  
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  if(todoText!='' && typeof todoText === 'string'){
    //create a todo 
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText
    document.querySelector(".input_text").value = '';
    todo.appendChild(text);
    
    // check
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    todo.appendChild(completeButton);
    
    // remove
    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todo.appendChild(trashButton);


    section.appendChild(todo);
  }
}

function handleKeyUp(e) {
  if (e.keyCode === 13) {
    // enter键被按下
    handleClick(e);
  }
}