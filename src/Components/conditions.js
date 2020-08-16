import React, { Component } from 'react';
import Map from './map';

//This is the main component page where the weather data and the map gets shown
//it uses an api from the backend to get the weather data from open weather map
//it uses the google geocode api to get the coordinates from a given zipcode
//it lists the data in a useable format 
//it handles the unit conversion from celcius to farentheit
//this handles the display

//*THINGS TO TAKE NOTE*//
//this uses the google api suite, google api's are a paid service.

class Conditions extends Component {
    //sets the state for the component
    constructor(props) {
        super(props);
        this.state = {
            error: null, //if the process has an error this will have a value
            isLoaded: false, //this will allow the page to show loading until the data is recieved, then it is set to true
            currentdata: {}, //this is the current weather data (at the time of the request)
            forecastdata: [], //this the forecast for the week 
            locationdata: [] //this is the location of the request
        }
    }
    componentDidMount() {
        var url = new URLSearchParams(window.location.search); //gets the zipcode from the url 
        var zipcode = url.get('zipcode');
        //gets the latitude and longtitude from the zipcode in south-africa
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=&components=postal_code:${zipcode}|country:ZA`)
            .then(res => res.json())
            .then(
                (data) => {
                    //gets the weather data using the lat and lng from the above fetch
                    fetch(`/weather/api?lon=${data.results[0].geometry.location.lng}&lat=${data.results[0].geometry.location.lat}`)
                        .then(response => response.json())
                        .then(data => {
                            this.setState({
                                isLoaded: true,
                                locationdata: [data.lat, data.lon],
                                currentdata: data.current,
                                forecastdata: data.daily,
                            });
                        }, (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            var condition = this.state.currentdata.weather[0].main;
            var conditiondescription = this.state.currentdata.weather[0].description;
            var temp = this.state.currentdata.temp;
            var feelsliketemp = this.state.currentdata.feels_like;
            var windspeed = this.state.currentdata.wind_speed;
            var humidity = this.state.currentdata.humidity;
            var image = this.state.currentdata.weather[0].icon;
            return (
                <>
                    <div className="conditionbox">
                        <img src={`http://openweathermap.org/img/wn/${image}.png`} className="conditionimage" alt={condition}></img>
                        <h5>{conditiondescription}</h5>
                        <h3>Temp: {!this.props.checked ? (Math.round(temp * 9 / 5) + 32) : Math.round(temp)}{this.props.checked ? '°C' : '°F'}</h3>
                        <h4>Feels like: {!this.props.checked ? (Math.round(feelsliketemp * 9 / 5) + 32) : Math.round(feelsliketemp)}{this.props.checked ? '°C' : '°F'}</h4>
                        <h4>Humidity: {humidity}% </h4>
                        <h4>Windspeed: {windspeed} m/s</h4>
                        <div>
                            {
                                this.state.forecastdata.map(data => { //maps through the array to get the individual days' forecast
                                    //var date = new Date(data.dt).toString();
                                    var forCondition = data.weather[0].main;
                                    var forImage = data.weather[0].icon;
                                    var forTemp = data.temp.day;
                                    var forHumidity = data.humidity;
                                    return (
                                        <div key={data.humidity + 2} className="forecastConditionBox">
                                            {/* <h5>{date}</h5> */}
                                            <img key={data.humidity * 2} src={`http://openweathermap.org/img/wn/${forImage}.png`} className="conditionimage" alt={forCondition}></img>
                                            <h4 key={data.humidity - 2}>Temp: {!this.props.checked ? (Math.round(forTemp * 9 / 5) + 32) : Math.round(forTemp)}{this.props.checked ? '°C' : '°F'}</h4>
                                            <h5 key={data.humidity / 2}>Humidity: {forHumidity}% </h5>
                                        </div>
                                    )
                                })
                            }
                        </div >
                    </div>
                    <div classname="mapbox"><Map location={this.state.locationdata} /></div>
                </>
            )
        }
    }
}

export default Conditions;
