
const express = require('express');
const url = require('url');
const request = require('request-promise');
const { response } = require('express');
const port = 3001;
const app = express();
const key = '891395a968d64d9998247fdec85650e6';
var forecastdata=[];

app.get('/weather/api', (req, res) => {
    const queryObject = url.parse(req.url, true).query
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
        .then(response => {res.send(response);
            var rdaily = response.daily;
            for(item in rdaily){
                forecastdata.push({
                    "dt": item.dt,
                    "sunrise": item.sunrise,
                    "sunset": item.sunset,
                    "temp": item.temp.day,
                    "feels_like": item.feels_like.day,
                    "pressure": item.pressure,
                    "humidity": item.humidity,
                    "dew_point": item.dew_point,
                    "wind_speed": item.wind_speed,
                    "wind_deg": item.wind_speed,
                    "rain": item.rain,
                    "rainmain":item.weather.main,
                    "raindescription":item.weather.raindescription,
                    "weathericon":item.weather.icon,
                    "cloud":item.clouds,
                })
            }}).catch(err => console.log(err));
});

app.get('/weather/api/forecast', (req, res) => {res.send(forecastdata);});

app.listen(port, () => {
    console.log(`listening at ${port}`)
});

