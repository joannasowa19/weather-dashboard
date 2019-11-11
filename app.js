// database //
// raw weather object from API //
let city = "";
let storedData = JSON.parse(localStorage.getItem("saved"));
let cities = storedData || [];

// variables //
// can create an empty (parsed) weather object //

// utility functions //
function searchCity(city) {
  let apiKey =
    "https:api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=6f3f1bb1f2450a9219117bb18f842d80";
  $.ajax({
    url: apiKey,
    method: "GET"
  }).then(function(response) {
    let cityName = response.name;
    let temp = response.main.temp;
    let humid = response.main.humidity;
    let wind = response.wind.speed;
    $("#cityName").html(cityName);
    $("#temperature").html(`Temperature : ${temp} F`);
    $("#humidity").html(`Humidity : ${humid} %`);
    $("#windSpeed").html(`Wind Speed : ${wind}mph`);
  });
}

function forecast(city) {
  var queryUrl =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=6f3f1bb1f2450a9219117bb18f842d80";

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    displayForecast(response);
  });
}
// get raw data //
// parse raw data //
// render parsed data //

// event functions //
function displayForecast(response) {
  $("#futureForecast").html("");
  for (i = 5; i < response.list.length; i += 8) {
    forecastDiv = $(
      `<div class="bds-o m-10px">
              
              <div>
                Temperature: ${response.list[i].main.temp}°F
              </div>
              <div>
                Humidity: ${response.list[i].main.humidity}%
              </div>
              <div>
                Wind: ${response.list[i].wind.speed}MPH
              </div>
          </div>`
    );
    $("#futureForecast").append(forecastDiv);
  }
}
// search button click //
// have city name //
// send city name to an open weather API //
// set the weather info to the object returned (see raw data set up) //

// init //
// check local storage for history of cities and render them - this takes care of the init //
