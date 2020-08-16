import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//this is the landing page
const MainPage = () => {
    const [zipcode, setzipcode] = useState('');
    return (
        <>
            <header></header>
            <main className="homeMain">
                <div className="content" >
                    <h1> Weather Forcast <span> </span></h1>
                    <p> Enter your zipcode </p>
                </div>
                <div className="inputContainer">
                    <input type="text" className="textInput" id="textInput" onChange={event => setzipcode(event.target.value)}></input>
                    <div>
                        <NavLink to={'/weather?zipcode=' + zipcode} className="btnSend" >Get forecast</NavLink>
                    </div>
                </div>
            </main>
            <footer></footer>
        </>
    )
}

export default MainPage;