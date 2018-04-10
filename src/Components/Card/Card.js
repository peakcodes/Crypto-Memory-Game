// Set up card
import React from "react";
import "./Card.css";

// set up function to display cards - names and image

const CoinCard = props => (
    <div className="card">
        {/* Display selected card name */}
        <div className="content">
            <ul>

                    <p>{props.name}</p>

            </ul>
        </div>

        {/* display card image and cause shake gesture when clicked*/}

        <div id="crypto" className="img-responsive shake">
            <a onClick={() => props.clicked(props.id)}>
                <img alt={props.name} src={props.url} />
            </a>
        </div>
    </div>    
);

export default CoinCard;