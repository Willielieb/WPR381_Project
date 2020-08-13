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
                    forecastdata: data,
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
            //var min = this.state.temperaturedata.temp_min;
            //var max = this.state.temperaturedata.temp_max;
            var image = this.state.currentdata.weather[0].icon;
            //var forecast = this.state.forecastdata.daily;
            return (
                <>
                    <div className="conditionbox">
                        <img src={`http://openweathermap.org/img/wn/${image}.png`} className="conditionimage" alt={condition}></img>
                        <h5>{conditiondescription}</h5>
                        <h3>Temp: {!this.props.checked ? ((temp * 9 / 5) + 32) : temp}{this.props.checked ? '°C' : '°F'}</h3>
                        <h4>Feels like: {!this.props.checked ? ((feelsliketemp * 9 / 5) + 32) : feelsliketemp}{this.props.checked ? '°C' : '°F'}</h4>
                        <h4>Humidity: {humidity}% </h4>
                        {/* <h4>Min: {!this.props.checked ? ((min * 9 / 5) + 32) : min}{this.props.checked ? '°C ' : '°F '}
                Max: {!this.props.checked ? ((max * 9 / 5) + 32) : max}{this.props.checked ? '°C' : '°F'}</h4> */}
                        <h4>Windspeed: {windspeed} m/s</h4>
                    </div>
                </>
            )
        }
    }
}

export default Conditions;
