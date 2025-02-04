function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  console.log(response.data.temperature.current);
  temperatureElement.innerHTML = response.data.temperature.current;
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
