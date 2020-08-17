const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    nom: String
})

const todo = mongoose.model('todo', todoSchema)

module.exports = todo