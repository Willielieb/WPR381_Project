import Toggle from '@material-ui/core/Switch';
import React from "react";
import Condition from './conditions'

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
                <span>°F<Toggle checked={state.checked} onChange={handleChange} name="checked" color="primary" />°C</span>
            </div>
            <div className="inner-box">
                <Condition checked={state.checked} />
            </div>
        </>
    );
}

export default ToggleSwitch;