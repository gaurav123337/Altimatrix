const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const loginRoutes = express.Router();
const PORT = 4000;

let Login = require('./login.model');

//DB name
const dbName = 'login';
const dbUrl = 'mongodb://127.0.0.1:27017/';

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(dbUrl+dbName, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

loginRoutes.route('/').get(function(req, res) {
    Login.find(function(err, login) {
        if (err) {
            console.log(err);
        } else {
            res.json(login);
        }
    });
});
loginRoutes.route('/signin').post(function(req, res) {
    //let id = req.params.id;
    console.log(req.body, 'req');
    const {username, password} = req.body;
    Login.find({user_name:username, password}, function(err, loginDetail) {
        console.log('Login successful', loginDetail)
        res.json(loginDetail);
    })
    .catch(err => {
        res.send("Update not possible");
    });
});
// loginRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Login.findById(id, function(err, todo) {
//         res.json(todo);
//     });
// });
// loginRoutes.route('/update/:id').post(function(req, res) {
//     Login.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;
//             todo.save().then(todo => {
//                 res.json('Todo updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });
loginRoutes.route('/signUp').post(function(req, res) {
    let login = new Login(req.body);
    login.save()
        .then(login => {
            res.status(200).json({'login': 'login data added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new login data failed');
        });
});

app.use('/login', loginRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
