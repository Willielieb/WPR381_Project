import React from "react";

function WeatherImg(props) {
    switch (props.weatherType) {
        case 'rainny':
            return (<img src="" className="" alt="rainny"></img>)
            break;
        case 'sunny':
            return (<img src="" className="" alt="sunny"></img>)
            break;
        case 'cloudy':
            return (<img src="" className="" alt="cloudy"></img>)
            break;
        default:
            return (<img src="" className="" alt="none"></img>)
            break;
    }
}
export default WeatherImg;

