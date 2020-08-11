import React, { Component } from 'react'

class Conditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    }
    render() {
        var temp = 53;
        var feelsliketemp = 52;
        var windspeed = 1.5;
        var min = 20;
        var max = 30;
        return (
            <div>
                <h1>Temp:{!this.props.checked ? ((temp * 9 / 5) + 32) : temp} {this.props.checked ? '°C' : '°F'}</h1>
                <h1>Feels like: {!this.props.checked ? ((feelsliketemp * 9 / 5) + 32) : feelsliketemp}{this.props.checked ? '°C' : '°F'}</h1>
                <h1>min: {!this.props.checked ? ((min * 9 / 5) + 32) : min}{this.props.checked ? '°C' : '°F'}</h1>
                <h1>max: {!this.props.checked ? ((max * 9 / 5) + 32) : max}{this.props.checked ? '°C' : '°F'}</h1>
                <h1>Windspeed: {windspeed}</h1>
            </div>
        )
    }

}

export default Conditions;
