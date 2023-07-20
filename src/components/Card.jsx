import React from "react";

function Card(props){

    return(
        <div className="cardContainer">
            <h2>{props.name}</h2>
        </div>
    )
}

export default Card