import Toggle from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import React from "react";
import Condition from './conditions'
import WeatherImg from './WeatherPicture';


function ToggleSwitch() {
    const [state, setState] = React.useState({
        checked: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <>
            <div className="switch" >
                <WeatherImg weatherType={'sunny'} />
                <Grid component="label" container alignItems="center" spacing={0}>
                    <Grid item>°F</Grid>
                    <Grid item>
                        <Toggle
                            checked={state.checked}
                            onChange={handleChange}
                            name="checked"
                            color="primary"
                        />
                    </Grid>
                    <Grid item>°C</Grid>
                </Grid>
            </div>

            <Condition checked={state.checked} />
        </>
    );
}

export default ToggleSwitch;