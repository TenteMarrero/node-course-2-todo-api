const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// var id = '59cd42690f67be205042a59c';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('TodoById', todo);
// }).catch((e) => console.log(e));

User.findById('59ccfe5dff11531f0c01b468').then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User', user);
}, (e) => {
    console.log(e);
});
