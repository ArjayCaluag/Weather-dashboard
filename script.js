$(document).ready(function () {
        let apiKey = '&appid=b540f485d7fc2dc82c2bec349be77cf3';
    function searchCity(cities) {
       
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cities + '&units=imperial' + apiKey;
        let newDiv = $('<div>')

        // Calling the openweathermap API
        $.ajax({
            url: queryURL,
            method: "GET",

        }).then(function (response) {
            console.log(response);
            $('#currentWeather').empty();

            let currentDate = moment().subtract(10, 'days').calendar();
            let cityName = $('<h1>').text(response.name + ' ' + currentDate)
            let cityTemp = $('<p>').text('Temperature: ' + response.main.temp + 'F')
            let cityHumid = $('<p>').text('Humidity: ' + response.main.humidity + ' %')
            let citySpeed = $('<p>').text('Wind Speed ' + response.wind.speed + ' MPH')

            // appends all of our dynamic html to our currentWeather div tag
            newDiv.append(cityName, cityTemp, cityHumid, citySpeed)
            
            $('#currentWeather').append(newDiv)
        })
    }

    historyButton();
   
    // event listener onClick - perform this work
    $('#searchCity').on("click", function (event) {
        // stops the page from trying to submit a form
        event.preventDefault();
        // Grabs the value from input field id citySearch and places as an argument in our function.
        let inputCity = $("#citySearch").val().trim();
        
        // Set input into local storage. key|value 'city|historyArray
        var storeInput = $(this).siblings("input").val();
        var historyArray = [];
        historyArray.push(storeInput);
        localStorage.setItem('city', JSON.stringify(historyArray));
        
        
        searchCity(inputCity)
        historyButton();
    });

    // function creates new button
    function historyButton(){
        let getStorage = JSON.parse(localStorage.getItem('city'));
        let newButton = $("<button>").addClass('row btn btn-primary').text(getStorage);
        $('#historyButton').append(newButton);

    }
   
});