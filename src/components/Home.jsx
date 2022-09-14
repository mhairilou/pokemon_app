import React, { useState, useEffect } from "react";
import "./Home.css"

const Home = () => {
    return (
        <div className="homepage-all">
            <div className="homepage-left">
                <h1>Howdy!</h1>
                <h2>This is an app for Pokemon fans.</h2>
                <button className="start-button">Start Here</button>
            </div>
            <div className="homepage-right">
                <img className="homepage-image" src={require("../images/arghpokemon.jpeg")} alt="pokemon" />
            </div>
        </div>
    )
}

export default Home;
