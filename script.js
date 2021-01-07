$(document).ready(function () {


    function searchCity(cities) {
        let apiKey = '&appid=b540f485d7fc2dc82c2bec349be77cf3';
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

    // event listener onClick - perform this work
    $('#searchCity').on("click", function (event) {
        // stops the page from trying to submit a form
        event.preventDefault();
        // Grabs the value from input field id citySearch and places as an argument in our function.
        let inputCity = $("#citySearch").val().trim();
        searchCity(inputCity)
    })



    // function searchCity(cityName){
    //     for(i=0;i<cityName.length;i++){
    //         let newButton = $('<button');
    //         newButton.attr(cityName[i]);
    //         newButton.text(cityName[i])
    //         $('#historyButton').append(newButton);

    //     }
    // }
    // searchCity()
    // Create queryURL var that contains weathermap api + user input city name + API key

    // Import weathermap API with Ajax to call for response and test with consolelog

    // Create on("click") event listener for submit button, that then links to our queryURL key to present information about selected city
    // In addition, create dynamic buttons that uses localstorage to pull up same information if pressed again

});