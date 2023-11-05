let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault(); 
  //prevent form submitted 避免form送出
  
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  if(todoText !== '' && typeof todoText === 'string'){
    savetodo(todoText)

    //create a todo 
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    todo.classList.add("todo-text");
    text.innerText = todoText
    todo.appendChild(text);
    document.querySelector(".input_text").value = '';
    
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

function savetodo(todoText) {
  const todo = {
    Text: todoText,
    index: 1,
    Datetime: getDateTime()
  };

  alert(todo.Text + todo.Datetime)
}

// 取得當下時間
function getDateTime() {
  const DateTime = new Date();
  const year = DateTime.getFullYear();
  const month = DateTime.getMonth() + 1;
  const day = DateTime.getDate();
  const hours = DateTime.getHours();
  const minutes = DateTime.getMinutes();
  const seconds = DateTime.getSeconds();

  const rtnDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  
  return rtnDateTime;
}