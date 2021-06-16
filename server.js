const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.listen(3001, (req,res) => {
    console.log("Listening");
})