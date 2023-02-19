const express = require('express');
const app = express();
const bodyParser = require("body-parser");
// const pino = require("express-pino-logger")();
const cors = require("cors");
require('dotenv').config({
    path: './.env',
});
const authRoute = require("./routes/index");
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(pino);
app.use(cors());
app.use('/api',authRoute);

const port = process.env.PORT || 6000;

app.listen(port, ()=> {
    console.log(`app is running on port ${port}`);
})