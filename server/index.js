
const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const { queryByRole } = require("@testing-library/react");
const { cursorTo } = require("readline");
const request = require('request-promise');
const { Console } = require("console");
const port = 3001;

var lat;
var lon;

APPID = 'ba3e8d5cc30f1c88709d50ab01fbe17';



app.get('/weather/api', (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    request(`https://api.openweathermap.org/data/2.5/onecall?lat=${queryObject.lat}&lon=${queryObject.lon}&exclude=hourly,daily&units=metric&appid=891395a968d64d9998247fdec85650e6`).then(
        response=>{res.send(response)}).catch(err=>{console.log(err)})});

app.listen(port, () => {
    console.log(`listening at ${port}`)
});

