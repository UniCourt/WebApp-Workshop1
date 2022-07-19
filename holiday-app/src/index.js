const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//App routes
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',routes);

app.listen(port, ()=> {
    console.log(`Express app is running on port ${port}`);
});