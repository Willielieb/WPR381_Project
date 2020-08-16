import React from "react";
import ToggleSwitch from '../Components/Switch';
import Navigation from '../Components/Navigation';
//this is the page which houses the weather data,
//because it all works with if the user wants celcius or not the state of the app depends on the switch
class WeatherPage extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <main className="mainScreen">
                    <div className="item">
                        <ToggleSwitch />
                    </div>
                </main>
                <footer></footer>
            </>
        );
    }
}
export default WeatherPage;
