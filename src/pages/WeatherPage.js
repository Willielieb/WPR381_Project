import React from "react";
import ToggleSwitch from '../Components/Switch';
import Navigation from '../Components/Navigation';
class WeatherPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         error: null,
    //         isLoaded: false,
    //         location: []
    //     };
    // }
    //componentDidMount() {
    //     var url = new URLSearchParams(window.location.search);
    //     var zipcode = url.get('zipcode')
    //     fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode + '&key=AIzaSyBoVVBAwxlYlpHNXdwLheRym2OHzWtncDg')
    //         .then(res => res.json())
    //         .then(
    //             (data) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     location: [data.results[0].geometry.location.lng,
    //                     data.results[0].geometry.location.lat]
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    //}
    render() {
        // const { error, isLoaded, location } = this.state;
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
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
//}
export default WeatherPage;