import React from "react";

import ToggleSwitch from '../Components/Switch';

class WeatherPage extends React.Component {
    render() {
        return (
            <>
                <header></header>
                <main className="mainScreen">
                    <div className="item">
                        <div className="inner-box">
                            <ToggleSwitch />
                        </div>
                    </div>
                </main>
                <footer></footer>
            </>
        );
    }
    //}
}
export default WeatherPage;