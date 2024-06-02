const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


let toDos = [];

function saveToDos(){
  localStorage.setItem("todos",JSON.stringify(toDos));
};

function deleteToDo(event){
  const li = event.target.parentElement.parentElement;
  li.remove();
  console.log("삭제해줘",li);
  toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
  saveToDos();
};

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id=newTodo.id;
  const span= document.createElement("span");
  span.innerText=newTodo.text;
  const button = document.createElement("button");
  button.innerHTML = "<i class='fa-solid fa-xmark'></i>"

  const Xicon = button.querySelector("i");
  Xicon.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);

}


function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo =toDoInput.value;
  toDoInput.value ="";
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  
}

toDoForm.addEventListener("submit",handleTodoSubmit);




const saveToDos2 = localStorage.getItem("todos");
// console.log(saveToDos2);

if (saveToDos2){
  const parsedToDos = JSON.parse(saveToDos2);
  toDos=parsedToDos;//로컬에 저장되어 있는것을 불러올때, 그것을 다시 toDos array에 업데이트.
  // console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);//(item)=>{paintToDo(item)};
}

//지우고싶은 아이템을 제외
