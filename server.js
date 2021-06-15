const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.listen(3000, (req,res) => {
    consolg.log("Listening");
})