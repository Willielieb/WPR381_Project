//Here is code that is suspected to return a map. using coordinates.
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

//defines the map object with style, authentication and location
class Mapper extends Component {
    render() {
        return (
            <div className='mapbox'>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={{
                        height: '10rem',
                        marginTop: '1rem',
                        marginLeft: '4rem',
                        background: '#f0f0f3',
                        boxShadow: '-1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)',
                        width: '32rem',
                        borderRadius: '15px'
                    }}
                    initialCenter={{
                        lat: this.props.location[0],
                        lng: this.props.location[1]
                    }}
                >
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({ apiKey: '' })(Mapper);
