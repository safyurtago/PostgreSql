const express = require('express');
const {fetchAll} = require('./connection')

const app = express();

app.use(express.json());


app.post('/createTable', async (req, res) => {
    // console.log(req.body);
    const table = await fetchAll(`
    CREATE TABLE users (
        id serial NOT NULL PRIMARY KEY,
        username text NOT NULL,
        age int NOT NULL,
        name text NOT NULL
    );`)
    res.status(201).send({message: 'Success'})
})   

app.post('/createUser', async (req, res) => {
    const {username, age, name} = req.body 
    console.log(req.body);
    const user = await fetchAll(`
    INSERT INTO users (username, age, name) VALUES ($1, $2, $3)`, [username, age, name])
    res.status(201).send({message: 'Success'})
})

app.delete('/users/:id', async (req, res) => {
    const {id} = req.params
    const user = await fetchAll('DELETE FROM users WHERE id = $1', [id])
    res.status(200).send({message: 'Deleted successfully'})
})


app.get('/users', async (req, res) => {
    const users = await fetchAll('select * from users')
    console.log(users);
    res.send(users);
})


app.listen(8080, () => {
    console.log(8080);
});