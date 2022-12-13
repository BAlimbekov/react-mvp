import React from "react";
import Card from './Card';

const Cards = (props) => {
   console.log("cards", props.usersData)
    return (
        
        <div id="cards">
            {props.usersData.map((card) => (
                <Card card={card} key={card.id} setDeleted = {props.setDeleted} setUsersData = {props.setUsersData} setOnEdit={props.setOnEdit} {...props} />
            ))}
        </div>
    )
}

export default Cards;