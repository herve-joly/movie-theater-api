const express = require("express");
const app = express();
const seed = require("./seed");

const port = 3000;

//TODO

app.listen(port, () => {
  seed();
  console.log(`Listening on port ${port}`);
});
