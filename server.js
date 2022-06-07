const express = require('express')
const logger = require('./chapter1')
const { Pool, Client } = require("pg");

let app = express()
const credentials = {
  user: "admin_user",
  host: "postgres",
  database: "movie_db",
  password: "admin_pass",
  port: 5432,
};

//Define port
let port = 3000

app.use(require("./weather"));

//Define request response in root URL (/)
app.get('/', function (req, res) {  
  logger.log("__initiating__")
  res.send("### Welcome to Nodejs WorkShop ###")
})



//Launch listening server on port 3000
app.listen(port, function () {
  const pool = new Pool(credentials);
  const now = pool.query("SELECT NOW()");
  pool.end();
  console.log("### Welcome to Nodejs WorkShop ###")
})