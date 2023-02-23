const express = require("express");
const app = express();
const seed = require("./seed");
const showRouter = require("./routes/show-router");
const userRouter = require("./routes/user-router");
const port = 3000;

//TODO
app.use(express.json());
app.use("/show", showRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  seed();
  console.log(`Listening on port ${port}`);
});
