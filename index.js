const express = require("express");
const route = require("./routes/router");
const ejsrouter = require("./routes/ejsroute");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

app.use("/", route);
app.use("/", ejsrouter);

app.listen(PORT, () => {
  console.log(`server Started at ${PORT}`);
});
