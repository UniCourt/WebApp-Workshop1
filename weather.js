const express = require("express");
const router = express.Router();
const axios = require("axios");
const { query } = require("./postgres");
const API_KEY = "2386fc87e81fc26f86a1fcf2d39ddb62";
let url =  `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

router.get("/weather/:city", async (req,res) => {
    const { city } = req.params;
    
    try {
        const weatherResponse = await axios.get(`${url}&q=${city}`);
        const data = weatherResponse.data;
        const desc = data.weather[0].description;
        const temp = data.main.temp;

        const sqlStatement = `INSERT INTO weather(city,description,tempurature) VALUES('${city}','${desc}','${temp}')`;
        await query(sqlStatement);
        
        return res.json(data);
    } catch(e) {
        console.log(e.message);
        return res.status(500).json({message: "Something Went Wrong!!"});
    }
});

module.exports = router;
