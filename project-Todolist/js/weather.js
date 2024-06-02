const API_KEY ="5ce6a217d07e9b678689063f8f06874c";

function onGeoOK(position){
  // console.log(position);
  const lat=position.coords.latitude;
  const lon=position.coords.longitude;
  
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    const weather = document.querySelector("#weather span:first-of-type");
    const city = document.querySelector("#weather span:last-of-type");
    city.innerText=data.name;
    weather.innerText=`${data.weather[0].main} / ${data.main.temp}°C`;
    const icon=document.querySelector("#weather img");
    icon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  });
};
function onGeoError(){
  alert("Can't find you. No weather for you");
};


navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);