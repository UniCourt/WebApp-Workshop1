// imports
const { response, json } = require("express");
const express = require("express");
const request = require("request");
const wiki = require("wikipedia");
const dotenv = require("dotenv");
const axios = require("axios");
const { URL } = require("node:url");

async function generateImage({ prompt, size = "256x256", n = 1 }) {
  return await axios
    .post(
      "https://api.openai.com/v1/images/generations",
      JSON.stringify({
        prompt,
        n,
        size,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CHAT_GPT_API_KEY}`,
        },
      }
    )
    .then(function (response) {
      return response.data.data[0].url;
    })
    .catch(function (error) {
      console.log(`Image genrator failed with the error: ${error}`);
      return "";
    });
}

//Initializing Express for creating Server
const app = express();
//Configuring env
dotenv.config();
//Static Resources
app.use("/static", express.static(__dirname + "/static/"));
//Setting up the View Engine
app.set("view engine", "ejs");

//Dashboard route here
app.get("/", (req, res) => {
  res.render("dashboard");
});

//Nasa route here
app.get("/nasa", (req, res) => {
  (async () => {
    const url = new URL("https://api.nasa.gov/planetary/apod");
    url.searchParams.append("api_key", process.env.API_KEY);
    const response = await axios.get(url.href);
    res.render("nasa", { data: response.data });
  })();
});

//Search route here
app.get("/search", async (req, response) => {
  if (req.originalUrl === "/search") {
    response.render("search");
    return;
  }
  const query = req.originalUrl.split("=")[1];
  const page = await wiki.page(query);
  const summary = await page.summary();
  response.render("details", { data: summary });
});

// chatgpt route here
app.get("/chatgpt", async (req, res) => {
  if (req.originalUrl === "/chatgpt") {
    res.render("chatgpt");
    return;
  }
  const prompt = req.originalUrl.split("=")[1];
  const image = await generateImage({ prompt });
  res.render("image", { data: { image: image, title: prompt } });
});

//Starting the server
app.listen(6004, console.log("Listening at port 6004..."));
