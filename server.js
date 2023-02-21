const express = require("express");
const app = express();
const { sequelize } = require("./db");

const port = 3000;

//TODO
app.get("/musicians/:id", async (request, response) => {
  response.send();
});
app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});
