import React from "react";
import { NavLink } from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <header></header>
            <main className="homeMain">
                <div className="content" >
                    <h1> Weather Forcast <span> </span></h1>
                    <p> Enter your zipcode </p>
                </div>
                <div className="inputContainer">
                    <input type="text" className="textInput" id="textInput"></input>
                    <div>
                        <NavLink to="/weather" className="btnSend">goto</NavLink>
                    </div>
                </div>
            </main>
            <footer></footer>
        </>
    )
}

export default MainPage;