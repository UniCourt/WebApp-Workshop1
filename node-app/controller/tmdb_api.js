const express = require("express");
const axios = require('axios');
const router = express.Router();
const { query } = require("../postgres");

router.get("/movie-info/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const apiKey = '<api-key-here>';
    let tmdbApiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    console.log(`Movie URL : ${tmdbApiUrl}`)
    const movieInfoResponse = await axios.get(tmdbApiUrl);

    const data = movieInfoResponse.data;
    const queryStatement = `INSERT INTO movie 
    (original_title, original_language, popularity, release_date, revenue, status, tagline, title, vote_average)
    VALUES (
      '${data.original_title}',
      '${data.original_language}',
       ${data.popularity},
      '${data.release_date}',
       ${data.revenue},
      '${data.status}',
      '${data.tagline.replace("\'", "")}',
      '${data.title}',
      ${data.vote_average}
    );`

    await query(queryStatement);
    console.log(`API fetch is successfull`)

    return res.json(movieInfoResponse.data);
  } catch (e) {
    console.log(`E R R O R: ${e.message}`);
    return res.status(500).json({ message: "Something Went Wrong!!" });
  }
});

module.exports = router;