$(document).ready(function() {
  // database //
  // raw weather object from API //
  var cityWeather =
    "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"; // for now example is for london b/c of website //
  let apiKey = "6f3f1bb1f2450a9219117bb18f842d80";

  // variables //
  // can create an empty (parsed) weather object //

  // utility functions //
  // get raw data //
  // parse raw data //
  // render parsed data //

  // event functions //
  // search button click //
  // have city name //
  // send city name to an open weather API //
  // set the weather info to the object returned (see raw data set up) //

  // init //
  // check local storage for history of cities and render them - this takes care of the init //
  $.ajax({
    url: cityWeather,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    /* parse data */
  });
});
