import React, { Component } from 'react'
import WeatherPicture from './WeatherPicture';
class Conditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    }
    render() {
        var condition = 'rainny';
        var conditiondescription = 'light rain';
        var temp = 53;
        var feelsliketemp = 52;
        var windspeed = 1.5;
        var min = 20;
        var max = 30;
        var image;

        return (
            <div className="conditionbox">
                <img src={image} className="conditionimage" alt={condition}></img>
                <h5>{conditiondescription}</h5>
                <h3>Temp:{!this.props.checked ? ((temp * 9 / 5) + 32) : temp} {this.props.checked ? '°C' : '°F'}</h3>
                <h4>Feels like: {!this.props.checked ? ((feelsliketemp * 9 / 5) + 32) : feelsliketemp}{this.props.checked ? '°C' : '°F'}</h4>
                <h4>min: {!this.props.checked ? ((min * 9 / 5) + 32) : min}{this.props.checked ? '°C ' : '°F '}
                max: {!this.props.checked ? ((max * 9 / 5) + 32) : max}{this.props.checked ? '°C' : '°F'}</h4>
                <h4>Windspeed: {windspeed}</h4>
            </div>
        )
    }

}

export default Conditions;
