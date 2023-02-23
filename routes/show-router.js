const express = require("express");
const router = express.Router();
const { Show } = require("../models/Show");

// GET all shows
router.get("/show", async (request, response) => {
  const respond = await Show.findall(Show);
  response.send(respond);
});
// GET one show
router.get("/show/:id", async (request, response) => {
  const respond = await Show.findByPk(request.params.id);
  response.send(respond);
});
// GET shows of a particular genre (genre in req.params)
router.get("/show/:id", async (request, response) => {
  const respond = await Show.findByPk(request.params.id);
  response.send(respond);
});
// PUT update rating of a show that has been watched
router.put("/show/:id", async (request, response) => {
  const respond = await Show.update(request.body.update, {
    where: request.body.where,
  });
  response.send(respond);
});
// PUT update the status of a show
router.put("/show/:id", async (request, response) => {
  const respond = await Show.update(request.body.update, {
    where: request.body.where,
  });
  response.send(respond);
});
// DELETE a show
app.delete("/show/:id", async (request, response) => {
  const respond = await Show.destroy({
    where: { id: request.params.id },
  });
  response.json(respond);
});

module.exports = router;
