function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
   let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity);
  let windSpeedElement = document.querySelector("#wind-speed);
  let timeElement = document.querySelector("#time);
  let date= new Date(response.data.time *1000);
  console.log(response.data.temperature.current);
  
  descriptionElement.innerHTML= response.data.temperature.description;
  temperatureElement.innerHTML = response.data.temperature.current;
 humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
 windSpeedElement.innerHTML = `${response.data.temperature.wind.speed}km/h`;
 timeElement.innerHTML = formatDate(date);
 
 console.log(response.data.condition.description);
}

function formatDate(date) {
  
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
  let day = days[date.getDay()];

  if (minutes <10){
    minutes= `0${minutes}`;
  }
  
  
  
  return `${day} ${hours}:${minutes}`;
}


function searchCity(city) {
  let apiKey = "bo5f3e39f7d12b2d8fbte9a3c4ed7901";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; // Notice the backticks and `${}` for variables
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

