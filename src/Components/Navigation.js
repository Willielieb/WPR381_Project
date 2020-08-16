import React from 'react';

import { NavLink } from 'react-router-dom';
//this handles the navingation on the nav bar
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/weather">Weather</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;