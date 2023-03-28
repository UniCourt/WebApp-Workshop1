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
app.get('/', (req, res)=>{
    res.render("dashboard")
})
//Nasa route here
app.get('/nasa', (req,res) =>{
    (async () => {
        try {
          url = 'https://api.nasa.gov/planetary/apod?api_key=' + process.env.api_key
          const response = await axios.get(url);
          console.log("test");
          console.log(response.data);
          res.render('nasa.ejs',{data:response.data})
        } catch (error) {
          console.log(error.response);
        }
      })();
    })
//Search route here
app.get('/search', (req, response)=>{
    if(req.originalUrl === "/search"){
        response.render("search")
        return;
    }

    let url = "https://en.wikipedia.org/w/api.php"
    let params = {
        action: "opensearch",
        search: req.query.person,
        limit: "1",
        namespace: "0",
        format: "json"
    }

    url = url + "?"
    Object.keys(params).forEach( (key) => {
        url += '&' + key + '=' + params[key] 
    });

    request(url , (err, res, body) => {
        if(err) throw err;

        result = JSON.parse(body)
        console.log(result);

        data = result[3][0]
        data = data.substring(30, data.length)
        wikip(data, (err, final) => {
            if(err) throw err;
            else {
                const ans = JSON.parse(final);
                ans["person"] = req.query.person
                response.render("details", {
                    data : ans
                })
            }
        })
        // response.send("SUCCESS")
    })
})
//Starting the server
app.listen(6004, console.log("Listening at port 6004..."));