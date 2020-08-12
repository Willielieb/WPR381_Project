const OpenWeatherMapHelper = require("openweathermap-node");
const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const { queryByRole } = require("@testing-library/react");
const { cursorTo } = require("readline");
const request = require('request-promise');
const { Console } = require("console");
const port = 3001;

var weatherdata;
var lat = 5.6037
var lon = 0.1870

APPID = 'ba3e8d5cc30f1c88709d50ab01fbe17',



app.get('/weather/api', (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    //queryObject.lat = lat;
    //queryObject.lon = lat;
    request(`https://api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335&exclude=hourly,daily&units=metric&appid=891395a968d64d9998247fdec85650e6`).then(
        response=>{res.send(response)}).catch(err=>{console.log(err)})
        
    
    

});

app.listen(port, () => {
    console.log(`listening at ${port}`)
});

