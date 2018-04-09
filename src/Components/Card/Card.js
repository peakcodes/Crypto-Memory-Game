// Set up card
'use Strict';
import React from "React";
import "./Card.css";

// set up function to display cards - names and image

const CoinCard = props => (
    <div className="card">
        {/* Display selected card name */}
        <div className="content">
            <ul>
                <li>
                    <p>{props.name}</p>
                </li>
            </ul>
        </div>

        {/* display card image and cause shake gesture when clicked*/}

        <div className="img-responsive shake">
            <a onClick={() => props.clicked(props.id)}>
                <img alt={props.name} src={props.url} />
            </a>
        </div>
    </div>    
);

export default CoinCard;