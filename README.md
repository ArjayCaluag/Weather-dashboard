# **Work Day Scheduler**
For this assignment, we are tasked to create a weather application that presents the current weather information and the next 5 day forcast. We are to utilize the server side API from openweathermap successfully pull the required information to present to our user. Additionally, the application must create dynamic buttons with the recent search to allow the user to cycle back to that city's information if needed.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/103982393-44401180-5138-11eb-942f-8e9c8af1ebc7.png)


# **Installation**


Link javascript,jQuery, bootstrap, and moment.js to html file
```html
<script src="script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"><script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">

```

Make a request from OpenWeatherMap's API

```js
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cities + '&units=imperial' + apiKey;

        // Calling the openweathermap API
        $.ajax({
            url: queryURL,
            method: "GET",

        }).then(function (response) {
            console.log(response);
```


# **Built With**

<ul>
    <li> OpenWeatherMap - Server side API for weather forecast
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> jQuery - Javascript library that simplifies javascript programming.
    <li> Moment.js - Third party library that helps displaying date/time.
    <li> HTML - The standard markup language for web pages </li>
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**
```js
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

            let currentDate = moment().format('L');
            let cityIcon = $('<img>').attr("src", 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png')
            let cityName = $('<h1>').text(response.name + ' ' + currentDate)
            let cityTemp = $('<p>').text('Temperature: ' + response.main.temp + 'F')
            let cityHumid = $('<p>').text('Humidity: ' + response.main.humidity + ' %')
            let citySpeed = $('<p>').text('Wind Speed ' + response.wind.speed + ' MPH')
            // appends all of our dynamic html to our currentWeather div tag
            newDiv.append(cityName, cityIcon, cityTemp, cityHumid, citySpeed)

            $('#currentWeather').append(newDiv)

```
# **Deployed Link**

https://arjaycaluag.github.io/Weather-dashboard/
# **Author**

Ron-Arjay Caluag

[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
