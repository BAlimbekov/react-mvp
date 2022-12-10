import React from "react"
import './card.css'


const Card = (props) => {
    const handleClick1 = () => {
        fetch("http://localhost:3000/api/users/" + props.card.id, { method: 'DELETE' })
            .then(response => response.text())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <>
        <div className="card">
            <ul className="list-group list-group-flush"></ul>
            <li className="list-group-item">Name:{props.card.name}</li>
            <li className="list-group-item">Age:{props.card.age}</li>
            <li className="list-group-item">Membership Status:{props.card.membershipstatus}</li>
            <button id="deleteUser" onClick={handleClick1}>DELETE</button>
            <button id="editUser">EDIT</button>
        </div>
        
        </>

    )
}

export default Card;