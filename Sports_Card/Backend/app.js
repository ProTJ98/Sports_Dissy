const express =require('express');
const expressLayouts =require('express-ejs-layouts');
const moongoose = require('mongoose')


const app = express() ;

//Sports Config
const db = require('./keys').MongoURI;

//mongo connection
moongoose.connect(db, { useNewUrlParser: true}) 
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//bodypar

app.use(express.urlencoded({extended: false})) ;

//My Routes
app.use('/', require('./routes/index')); //My Default Route
app.use('/users', require('./routes/users')); //My User Route

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server Started on port ${PORT}'));
