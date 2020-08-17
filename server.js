const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const port = 3000

mongoose.connect('mongodb://localhost/todos', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mon DB est connecté');
  
});

const app = express()

app.use(methodOverride('_method')) //modifier et supprimer 

app.set('views', './views')
app.set('view engine', 'ejs')



const indexRouter = require('./routes/index')
app.use('/', indexRouter)


app.listen (port, ()=>{
    console.log('mon port marche bien: ', port);
    
})