import React from "react";
import Card from './Card';

const Cards = (props) => {
   
    return (
        <div id="cards">
            {props.users.map((card) => (
                <Card {...props} card={card} key={card.id} />
            ))}
        </div>
    )
}

export default Cards;