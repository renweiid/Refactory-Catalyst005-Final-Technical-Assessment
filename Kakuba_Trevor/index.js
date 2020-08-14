const express = require('express');

const bodyParser= require('body-parser');

const mongoose = require('mongoose');

//Importing the registration schema/model
const Register = require('./model/register');

const app = express();

// Database connection 
mongoose.connect('mongodb://localhost:27017/COVID-19', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});

// Setting the templating engine
app.set('view engine', 'pug')
app.set('views', './views');


app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/', async (req, res) => {
   
      const People = new Register(req.body);
      try {
        console.log(req.body);
        
        await People.save();
          
          res.redirect('/');
        }
        catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
});

app.listen(4000, () => console.log('listening on port 4000'));