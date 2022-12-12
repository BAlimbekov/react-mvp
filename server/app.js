const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors');
app.use(cors());
const { Client } = require('pg');
const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/user_db';
const client = new Client({
  connectionString: connectionString
});
client.connect();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  client.query('SELECT * FROM users')
    .then((result) => {
      res.status(200).send(result.rows)
    })
    .catch((err) => console.error(err.stack))
});

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  client.query(`SELECT * FROM users WHERE id=${id}`)
    .then((result) => {
      res.status(200).send(result.rows[0])
    })
    .catch((err) => console.error(err.stack))
});

app.post('/api/users', (req, res)=>{
  const person = req.body;
  const name = person.name;
  const age = person.age;
  const membershipstatus = person.membershipstatus;
  const id = req.params.id;
  const queryString = "INSERT INTO users(name, age, membershipstatus)VALUES($1, $2, $3) RETURNING *"
  client.query(queryString, [name, age, membershipstatus]) 
  .then((result) => {
    res.status(200).send(result.rows[0])
    
  })
  .catch((err)=>console.error(err.stack))
})

app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  client.query(`DELETE FROM users WHERE id=${id} RETURNING *`)
    .then((result) => {
      console.log("looking for", result)
      res.status(200).send(result.rows[0])
    })
    .catch((err) => console.error(err.stack))
});

app.patch('/api/users/:id', (req, res)=>{
  const person = req.body;
  const name = person.name;
  const age = person.age;
  const membershipstatus = person.membershipstatus;
  const id = req.params.id;
  client.query(`UPDATE users SET name='${name}', age=${age}, membershipstatus='${membershipstatus}' WHERE id=${id}`)
  .then((result)=> {
    res.status(200).send(result.rows[0])
  })
  .catch((err)=> console.error(err.stack))
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
