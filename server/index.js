
const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const { queryByRole } = require("@testing-library/react");
const { cursorTo } = require("readline");
const request = require('request-promise');
<<<<<<< Updated upstream
const { Console } = require("console");
const port = 3001;

var lat;
var lon;

APPID = 'ba3e8d5cc30f1c88709d50ab01fbe17';



app.get('/weather/api', (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    request(`https://api.openweathermap.org/data/2.5/onecall?lat=${queryObject.lat}&lon=${queryObject.lon}&exclude=hourly,daily&units=metric&appid=891395a968d64d9998247fdec85650e6`).then(
        response=>{res.send(response)}).catch(err=>{console.log(err)})});
=======
const { response } = require('express');


const port = 3001;
const app = express();
const key = '891395a968d64d9998247fdec85650e6';
var forecast;

app.get('/weather/api', (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    var query = {
        uri: 'https://api.openweathermap.org/data/2.5/onecall',
        qs: {
            lat: queryObject.lat,
            lon: queryObject.lon,
            exclude: 'hourly',
            units: 'metric',
            appid: key
        }
    }
    request(query)
        .then(response => res.send(response))
        .catch(err => console.log(err));

            forecastdata={
            "dt": response.daily.dt,
            "sunrise": response.daily.sunrise,
            "sunset": response.daily.sunset,
            "temp": response.daily.temp.day,
            "feels_like": response.daily.feels_like.day,
            "pressure": response.daily.pressure,
            "humidity": response.daily.humidity,
            "dew_point": response.daily.dew_point,
            "wind_speed": response.daily.wind_speed,
            "wind_deg": response.daily.wind_speed,
            "rain":response.daily.rain,
            "rainmain":response.daily.weather.main,
            "raindescription":response.daily.weather.raindescription,
            "weathericon":response.daily.weather.icon,
            "cloud":response.daily.clouds,
        };
});
>>>>>>> Stashed changes

app.get('/weather/forecast', (req, res) => {
    res.send(forecast);
})




app.listen(port, () => {
    console.log(`listening at ${port}`)
});

