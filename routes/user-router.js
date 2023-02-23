const express = require("express");
const { Show } = require("../models");
const router = express.Router();
const { User } = require("../models/User");

//GET all users
router.get("/", async (request, response) => {
  const respond = await User.findAll();
  response.send(respond);
});
//GET one user
router.get("/:id", async (request, response) => {
  const respond = await User.findByPk(request.params.id);
  response.send(respond);
});
//GET all shows watched
router.get("/:id/watched", async (request, response) => {
  const user = await User.findByPk(request.params.id);
  const show = await user.getShows();
  response.send(show);
});
//Update user shows if watched
router.put("/:id/show/:showid", async (request, response) => {
  const user = await User.findByPk(request.params.id);
  const show = await Show.findByPk(request.params.showid);
  user.addShow(show);
  const updatedUser = await User.findByPk(request.params.id, {
    include: {
      model: Show,
    },
  });

  response.send(updatedUser);
});

module.exports = router;
