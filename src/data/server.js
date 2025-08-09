// server.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/movies", async (req, res) => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=d3a30a9f1d20c66bdfb69e9305fdd5e0&language=en-US&page=1";
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.listen(3001, () => console.log("Server on port 3001"));




//В React используй:

//js
//
//fetch("https://yourdomain.com/movies")