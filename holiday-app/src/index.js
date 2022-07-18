const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({message: "Hello world"});
})

app.listen(port, ()=> {
    console.log(`Express app is running on port ${port}`);
});