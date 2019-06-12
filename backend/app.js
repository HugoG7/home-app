const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const listUsers = [
    { name: 'Hugo', age: 27 },
    { name: 'Cristiano', age: 32 },
    { name: 'Messi', age: 31 }
]

app.get('/get/users', (req, res, error) => {
    res.status(200).send(listUsers);
});

app.post('/post/json/addUser', (req, res, error) => {
    console.log(req.body);
    listUsers.push(req.body);
    res.status(200).send('Users added through json => ' + req.body);
});

app.post('/post/form/addUser', (req, res, error) => {
    console.log(req.body);
    listUsers.push({ name: req.body.name, age: +req.body.age});
    res.status(200).send('User added through form => ' + { ...req.body });
});

app.listen(port, error => {
    if (error) {
        console.log('!!!Error in home service', error);
    }

    console.log('Home service is available in port => ' + port);
});
