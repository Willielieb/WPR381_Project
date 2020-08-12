const OpenWeatherMapHelper = require("openweathermap-node");
const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const { queryByRole } = require("@testing-library/react");
const port = 3001;

var weatherdata;
var lat = 5.6037
var lon = 0.1870


const helper = new OpenWeatherMapHelper(
    {
        APPID: '891395a968d64d9998247fdec85650e6',
        units: 'metric'
    }
);

app.get('/weather/api', (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    queryObject.lat = lat;
    queryObject.lon = lat;
    helper.getCurrentWeatherByGeoCoordinates(lat, lon, (err, currentWeather) => {
        if (err) {
            console.log(err);
        }
        else {
            //console.log(currentWeather);
            res.send(currentWeather);
        }
    });
});

app.listen(port, () => {
    console.log(`listening at ${port}`)
});

