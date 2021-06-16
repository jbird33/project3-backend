const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(methodOverride('_method'));

//Added this to troubleshoot being blocked by CORS -----------
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }
  app.use(cors(corsOptions))

  //-----------------------------------------------------


app.use('/users', routes.users);
app.use('/movies', routes.movies)

app.listen(3001, (req,res) => {
    console.log("Listening");
})