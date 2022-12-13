import React, { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Cards from './Cards'
import InputUser from './Input'
import Patch from './Patch'

function App() {

  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const [cardId, setCardId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [membershipstatus, setMembershipstatus] = useState("");


  useEffect(() => {
    const getUsers = async () => {

      await fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(result => {
          setUsersData(result)
          console.log(result)
        })
    };
    getUsers();

  }, []);


  const propsBucket = {
    users,
    setUsers,
    deleted,
    setDeleted,
    usersData,
    setUsersData,
    onEdit,
    setOnEdit,
    cardId,
    setCardId,
    name, 
    setName,
    age, 
    setAge,
    membershipstatus, 
    setMembershipstatus
  };

  if (onEdit === true) {
    return (
      <Patch {...propsBucket} />
    )
  }


  return (
    <div className="App">
      <button id="button">GET ALL GYM USERS</button>
      <InputUser {...propsBucket} />
      {/* <Patch {...propsBucket}/> */}
      <Cards {...propsBucket} />

    </div>
  )
}

export default App













