const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//App routes
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send("Hello world");
});

app.listen(port, ()=> {
    console.log(`Express app is running on port ${port}`);
});