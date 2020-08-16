import React, { Component } from 'react'
class Conditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            currentdata: {},
            forecastdata: [],
            locationdata: []
        }
    }
    componentDidMount() {
        var url = new URLSearchParams(window.location.search);
        var zipcode = url.get('zipcode');
        // fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=&components=postal_code:${zipcode}|country:ZA`)
        //     .then(res => res.json())
        //     .then(
        //         (data) => {
        //             fetch(`/weather/api?lon=${data.results[0].geometry.location.lng}&lat=${data.results[0].geometry.location.lat}`)
        //                 .then(response => response.json())
        //                 .then(data => {
        //                     this.setState({
        //                         isLoaded: true,
        //                         locationdata: [data.lat, data.lon],
        //                         currentdata: data.current,
        //                         forecastdata: data,
        //                     });
        //                 }, (error) => {
        //                     this.setState({
        //                         isLoaded: true,
        //                         error
        //                     });
        //                 });
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
        fetch(`/weather/api?lon=11.11&lat=22.22`)
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
    }
    //*TODO*
    //make a card for each item in daily forcast data
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
                    </div>
                    <Forecaster data={this.props.forecastdata}/>
                </>
            )
        }
    }
	//Here is code that is suspected to return a map. using coordinates.
	
	//npm install --save google-map-react
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: YOUR_LATITUDE,
            lng: YOUR_LONGITUDE
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'API_KEY'
})(Demo1);
}
function Forecaster() {
    this.props.data.forEach(data => {
        var forCondition = data.weather[0].main;
        var forImage = data.weather[0].icon;
        var forTemp = data.temp;
        var forWindspeed = data.wind_speed;
        var forHumidity = data.humidity;
        return(
            <>
                    <div className="forecastConditionBox">
                        <img src={`http://openweathermap.org/img/wn/${forImage}.png`} className="conditionimage" alt={forCondition}></img>
                        <h3>Temp: {!this.props.checked ? (Math.round(forTemp * 9 / 5) + 32) : Math.round(forTemp)}{this.props.checked ? '°C' : '°F'}</h3>
                        <h4>Humidity: {forHumidity}% </h4>
                        <h4>Windspeed: {forWindspeed} m/s</h4>
                    </div>
            </>
        ) 
    });
   /*  this.props.data.map((data) =>{
        var forCondition = data.weather[0].main;
        var forImage = data.weather[0].icon;
        var forTemp = data.temp;
        var forWindspeed = data.wind_speed;
        var forHumidity = data.humidity;
        return(
            <>
                    <div className="forecastConditionBox">
                        <img src={`http://openweathermap.org/img/wn/${forImage}.png`} className="conditionimage" alt={forCondition}></img>
                        <h3>Temp: {!this.props.checked ? (Math.round(forTemp * 9 / 5) + 32) : Math.round(forTemp)}{this.props.checked ? '°C' : '°F'}</h3>
                        <h4>Humidity: {forHumidity}% </h4>
                        <h4>Windspeed: {forWindspeed} m/s</h4>
                    </div>
            </>
        )        
    }) */
}

export default Conditions;