// Set up card
'use Strict';
import React from ("React");
import "./Card.css";

// set up function to display cards - names and image

const MemoryCard = props => (
    <div className="card">
        {/* Display selected prop name */}
        <div className="coin">
            <ul>
                <li>
                    <p>{props.name}</p>
                </li>
            </ul>
        </div>
        {/* display card image */}
        <div className="img">
            <a onClick={() => props.clicked(props.id)}>
                <img alt={prop.name} src={prop.url} />
            </a>
        </div>
    </div>    
);

export default MemoryCard;