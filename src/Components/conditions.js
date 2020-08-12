import React, { Component } from 'react'
class Conditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            temperaturedata: {},
            weatherdata: {},
            winddata: {}
        }
    }

    componentDidMount() {
        fetch('/weather/api')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    temperaturedata: data.main,
                    weatherdata: data.weather[0],
                    winddata: data.wind
                });
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            var condition = this.state.weatherdata.main;
            var conditiondescription = this.state.weatherdata.description;
            var temp = this.state.temperaturedata.temp;
            var feelsliketemp = this.state.temperaturedata.feels_like;
            var windspeed = this.state.winddata.speed;
            var min = this.state.temperaturedata.temp_min;
            var max = this.state.temperaturedata.temp_max;
            var image = this.state.weatherdata.icon;
            return (
                <div className="conditionbox">
                    <img src={image} className="conditionimage" alt={condition}></img>
                    <h5>{conditiondescription}</h5>
                    <h3>Temp:{!this.props.checked ? ((temp * 9 / 5) + 32) : temp} {this.props.checked ? '°C' : '°F'}</h3>
                    <h4>Feels like: {!this.props.checked ? ((feelsliketemp * 9 / 5) + 32) : feelsliketemp}{this.props.checked ? '°C' : '°F'}</h4>
                    <h4>Min: {!this.props.checked ? ((min * 9 / 5) + 32) : min}{this.props.checked ? '°C ' : '°F '}
                Max: {!this.props.checked ? ((max * 9 / 5) + 32) : max}{this.props.checked ? '°C' : '°F'}</h4>
                    <h4>Windspeed: {windspeed}</h4>
                </div>
            )
        }
    }

}

export default Conditions;
