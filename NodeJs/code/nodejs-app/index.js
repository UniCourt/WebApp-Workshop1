// imports
const { response, json } = require('express');
const express = require('express');
const request = require('request');
const wikip = require('wiki-infobox-parser');
const dotenv = require('dotenv')
const axios = require('axios');

//Initializing Express for creating Server
const app = express();
//Configuring env
dotenv.config();
//Static Resources 
app.use("/static", express.static(__dirname + "/static/"));
//Setting up the View Engine
app.set("view engine", 'ejs');

//Dashboard route here

//Nasa route here

//Search route here

//Starting the server
app.listen(6004, console.log("Listening at port 6004..."));