import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import "./index.css";
import Weather from './WeatherPage';
import MainPage from './MainPage';
import Navigation from '../Components/Navigation';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id="root">
                    <Navigation />
                    <Switch>
                        <Route path="/" component={MainPage} exact />
                        <Route path="/weather" component={Weather} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;