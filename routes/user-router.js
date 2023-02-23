const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

//GET all users
router.get("/user", async (request, response) => {
  const respond = await User.findall(User);
  response.send(respond);
});
//GET one user
router.get("/user/:id", async (request, response) => {
  const respond = await User.findByPk(request.params.id);
  response.send(respond);
});
//GET al shows watched
router.get("/user/:id", async (request, response) => {
  const respond = await User.findByPk(request.params.id);
  response.send(respond);
});
//Update user shows if watched
router.put("/user/:id", async (request, response) => {
  const respond = await User.update(request.body.update, {
    where: request.body.where,
  });
  response.send(respond);
});

module.exports = router;
