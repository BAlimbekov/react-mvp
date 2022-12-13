import React from "react"
import './card.css'


const Card = (props) => {
    const handleClick1 = () => {
        fetch("https://react-api-server-jqzf.onrender.com/api/users/" + props.card.id, { method: 'DELETE' })
            .then(response => response.json())
            .then(result => {
                //const filteredData = props.usersData.filter(data => data.id !== result.id)
                props.setUsersData(users => users.filter(data => data.id !== result.id))
                console.log("Delete", result)
            })
    };


    const handleClick5 =(e)=> {
        props.setOnEdit(true)
        // console.log(e.target.id)
        props.setCardId(e.target.id)
    }

    return (
        <>
        <div className="card" id={props.card.id}>
            <ul className="list-group list-group-flush"></ul>
            <li className="list-group-item">Name:{props.card.name}</li>
            <li className="list-group-item">Age:{props.card.age}</li>
            <li className="list-group-item">Membership Status:{props.card.membershipstatus}</li>
            <button className="button" onClick = {handleClick1}>DELETE</button>
            <button className="button" id={props.card.id} onClick = {handleClick5}>EDIT</button>
        </div>
        
        </>

    )
}

export default Card;