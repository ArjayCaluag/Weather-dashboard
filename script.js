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

            let currentDate = moment().format('L');;
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
        fiveDay(inputCity);
    });

    // function that creates new button with our search history
    function historyButton() {
        let getStorage = JSON.parse(localStorage.getItem('city'));
        let newButton = $("<button>").addClass('row histButton card bg-light shadow-lg bg-white').text(getStorage);
        $('#historyButton').append(newButton);

    }

    // Event listener for our new buttons that allow us to pull up information from previous searches

    $("#historyButton").on("click", '.histButton', function (event) {
        event.preventDefault();
        searchCity($(this).text())
        fiveDay($(this).text());
    });

    // Function to call 5-day forecast api 
    // Create card dynamically with for loop
    function fiveDay(cityName) {
        let queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}${apiKey}&units=imperial`;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            $('#dayForecast').empty();

            // Time tracks in increments of 3 hours I've chosen to given the 5 day forecast around 12pm each day.
            // First 5pm report is in index 4 and every increment of 8.
            for (let i = 4; i < 40; i += 8) {
                let forecastDiv = $('<div>').addClass('card-body col-2');

                // New javascript methods that returns a string to a date.
                let dateDiv = $('<h4>').addClass('date-div').text(new Date(res.list[i].dt_txt).toLocaleDateString())
                let iconDiv = $('<img>').addClass('icon-div').attr("src", `http://openweathermap.org/img/w/${res.list[i].weather[0].icon}.png`);
                let humidityDiv = $('<p>').addClass('humidity-div').text(`Humidity: ${res.list[i].main.humidity}`)
                let tempDiv = $('<p>').addClass('temp-div').text(`Temp: ${res.list[i].main.temp}`)

                forecastDiv.append(dateDiv, iconDiv, humidityDiv, tempDiv)
                $('#dayForecast').append(forecastDiv);



            }
        })
    }



});