const modal= document.querySelector(".Modal");
const greeting = document.querySelector("#greeting");
const insert= greeting.querySelector("input")

const layout = document.querySelector(".mainLayout");
const usernameH2 = document.querySelector("#userName h2");

//유저 캐치
const occupied = localStorage.getItem("user");


function signIn(event){
  event.preventDefault();
  modal.classList.add("hide");
  layout.classList.remove("hide");
  localStorage.setItem("user",insert.value);
  console.log("저장",occupied)
  paintGreetings();
};

//레이아웃 이름띄우기
function paintGreetings(){
  const username= localStorage.getItem("user");
usernameH2.innerText=`어서오세요, ${username}님!`
// console.log(username);
}



greeting.addEventListener("submit",signIn);






if(occupied===null){
  modal.classList.remove("hide");
  layout.classList.add("hide");
  
}else{
  modal.classList.add("hide");
  layout.classList.remove("hide");
  paintGreetings(occupied);
}


