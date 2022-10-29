const express = require("express");
const app = express();
const port = 3001;
const unirest = require("unirest");

app.get("/api/associations/:word", (req, res) => {
  const request = unirest(
    "GET",
    "https://twinword-word-associations-v1.p.rapidapi.com/associations/"
  );
  request.query({ entry: req.params.word });
  request.headers({
    "x-rapidapi-host": "twinword-word-associations-v1.p.rapidapi.com",
    "x-rapidapi-key": "6b5ecdbaa8msha46cbd1b758d4a7p194526jsn11e490fdeadd",
    useQueryString: true,
  });
});

request.end(function (response) {
  if (response.error) throw new Error(response.error);

  res.json(response.body.associations_scored || {});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
