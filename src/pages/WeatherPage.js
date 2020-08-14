import React from "react";
import ToggleSwitch from '../Components/Switch';
import Navigation from '../Components/Navigation';
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
