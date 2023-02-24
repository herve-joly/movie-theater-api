const express = require("express");
const router = express.Router();
const { Show } = require("../models/Show");
const { db } = require("../db");

// GET all shows
router.get("/", async (request, response) => {
  const respond = await Show.findAll();
  response.send(respond);
});
// GET one show
router.get("/:id", async (request, response) => {
  const respond = await Show.findByPk(request.params.id);
  response.send(respond);
});
// GET shows of a particular genre (genre in req.params)
router.get("/genre/:genre", async (request, response) => {
  const genre = request.params.genre;
  const shows = await Show.findAll({
    where: {
      genre: db.where(db.fn("LOWER", db.col("genre")), genre),
    },
  });
  response.send(shows);
});

// PUT update rating of a show that has been watched
router.put("/:id/rating", async (request, response) => {
  const { id } = request.params;
  const { rating } = request.body;
  await Show.update(
    { rating },
    {
      where: { id },
    }
  );
  response.send("Rating updated");
});
// PUT update the status of a show
router.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { status } = request.body;

  const result = await Show.update({ status }, { where: { id } });

  response.send(result);
});

// DELETE a show
router.delete("/:id", async (request, response) => {
  await Show.destroy({
    where: { id: request.params.id },
  });
  response.send("Record deleted successfully.");
});

module.exports = router;
