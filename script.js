$(document).ready(function () {


let cityName = "Hayward";
let apiKey = '&appid=b540f485d7fc2dc82c2bec349be77cf3' ;
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName + '&units=imperial'+ apiKey;

$.ajax({
    url: queryURL,
    method: "GET",
    
}).then(function(response){
console.log(response);
$('#currentWeather').empty();
let newDiv = $('<div>')
let cityName = $('<h1>').text(response.name)
let cityTemp = $('<p>').text('Temperature: '+ response.main.temp+'F')
let cityHumid = $('<p>').text('Humidity: ' + response.main.humidity + ' %')
let citySpeed = $('<p>').text('Wind Speed '+ response.wind .speed + ' MPH')

newDiv.append(cityName,cityTemp,cityHumid,citySpeed)
$('#currentWeather').append(newDiv)

})

// Create queryURL var that contains weathermap api + user input city name + API key

// Import weathermap API with Ajax to call for response and test with consolelog

// Create on("click") event listener for submit button, that then links to our queryURL key to present information about selected city
// In addition, create dynamic buttons that uses localstorage to pull up same information if pressed again

});