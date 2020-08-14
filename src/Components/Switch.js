import Toggle from '@material-ui/core/Switch';
import React from "react";
import Condition from './conditions';
import { withStyles } from '@material-ui/core/styles';

function ToggleSwitch() {
    const [state, setState] = React.useState({
        checked: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const ToggleSwitch = withStyles((theme) => ({
        root: {
            width: 42,
            height: 24,
            padding: 1,
            background: `#F0F0F3`,
            boxShadow: `-1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)`,
            borderRadius: 12
        },
        switchBase: {
            background: `#F0F0F3`,
            boxShadow: `inset -1px -1px 1px rgba(255, 255, 255, 0.7), inset 1px 1px 2px rgba(174, 174, 192, 0.2)`,
            borderRadius: 12,
            padding: 0,
            marginTop: 3,
            marginLeft: 2,

        },
        thumb: {
            background: `#e1e1e4`,
            boxShadow: `0px 1px 4px rgba(174, 174, 192, 0.25), 2px 2px 3px rgba(174, 174, 192, 0.25)`,
            borderRadius: 10,
            height: 18,
            width: 18,
        },
        track: {
            borderRadius: 13,
            background: `#EEEEEE`,
            boxShadow: `inset -1px -1px 1px rgba(255, 255, 255, 0.7), inset 1px 1px 2px rgba(174, 174, 192, 0.2)`,
        },
        checked: {},
    }))(({ classes, ...props }) => {
        return (
            <Toggle
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        );
    });
    return (
        <>
            <div className="switch" >
                <span>°F<ToggleSwitch checked={state.checked} onChange={handleChange} name="checked" color="default" />°C</span>
            </div>
            <div className="inner-box">
                <Condition checked={state.checked} />
            </div>
        </>
    );
}


export default ToggleSwitch;