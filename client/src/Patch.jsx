import React from "react";
import { useState } from "react";

const Patch = (props) => {
    // const [name, setName] = useState("")
    // const [age, setAge] = useState("")
    // const [membershipstatus, setMembershipstatus] = useState("")
    

    const handleName = (e) => {
        props.setName(e.target.value)
        console.log(e.target.value)
    };

    const handleAge = (e) => {
        props.setAge(e.target.value)
        console.log(e.target.value)
    };

    const handleMembershipstatus = (e) => {
        props.setMembershipstatus(e.target.value)
        console.log(e.target.value)
    };

    const handleEdit = async (e) => {
        console.log("whatever")
        const card = {
            name: props.name,
            age: props.age,
            membershipstatus: props.membershipstatus
        };
        e.preventDefault();
        await fetch(`https://react-api-server-jqzf.onrender.com/api/users/${props.cardId}`, { method: 'PATCH', headers: { "Content-type": "application/json" }, body: JSON.stringify(card) })
            .then(response => response.json())
            .then((result) => props.setUsersData(data =>[result, ...data]))
    }

    return (
        <div id="inputBar">
            <p>Edit</p>
            <input type="text" name="name" placeholder="name" value={props.name} onChange={handleName} />
            <input type="text" name="age" placeholder="age" value={props.age} onChange={handleAge} />
            <input type="text" name="membershipstatus" placeholder="membership status" value={props.membershipstatus} onChange={handleMembershipstatus} />
            <button id='submit' onClick={handleEdit}>ADD</button>
        </div>
    )
}

export default Patch;