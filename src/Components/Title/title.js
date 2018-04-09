import React from "react";
import "./Title.css";

const Title = props => (
    <div className="header">
    <h1 className="title"> Crypto Memory Game!</h1>
    <h4 className="directions"> Click on a image/card to score points, but do not click on the same image twice! If so...GAME OVER!</h4>
</div>
)

export default Title;