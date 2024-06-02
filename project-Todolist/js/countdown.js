const calender = document.getElementById("calander");
const calenderBtn = document.querySelector("#Dday button");
const day = document.querySelector(".countdown .day p");
const hour = document.querySelector(".countdown .hour p");
const minute = document.querySelector(".countdown .minute p");
const second = document.querySelector(".countdown .second p");


function getTime(){
  const time = new Date(calender.value).getTime();
  const now = new Date().getTime();
  const count= time - now;
  
  const countday=String(parseInt(count/(24*60*60*1000))).padStart(2,"0");
  const countdayLeft=parseInt(count%(24*60*60*1000));
  const counthour=String(parseInt(countdayLeft/(60*60*1000))).padStart(2,"0");
  const counthourLeft=parseInt(countdayLeft%(60*60*1000));
  const countminute =String(parseInt(counthourLeft/(60*1000))).padStart(2,"0");
  const countminuteLeft =parseInt(counthourLeft%(60*1000));
  const countsecond=String(parseInt(countminuteLeft/1000)).padStart(2,"0");

  day.innerText=`${countday}`;
  hour.innerText=`${counthour}`;
  minute.innerText=`${countminute}`;
  second.innerText=`${countsecond}`;

  console.log(`${countday}d ${counthour}h ${countminute}m ${countsecond}s`);

};

function countdown(e){
  e.preventDefault();
  getTime();
  setInterval(getTime,1000);
};


calenderBtn.addEventListener("click",countdown);