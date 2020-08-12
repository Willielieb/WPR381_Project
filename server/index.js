
const express = require('express');
const url = require('url');
const request = require('request-promise');


const port = 3001;
const app = express();
const key = '891395a968d64d9998247fdec85650e6';

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
});

app.listen(port, () => {
    console.log(`listening at ${port}`)
});

