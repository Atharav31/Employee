const mongoose = require("mongoose");
function handleConnection() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/employee")
    .then(console.log("Mongodb Connected Successfully"))
    .catch((err) => {
      console.log("!!ERROR NOT CONNECTED");
    });
}

module.exports = { handleConnection };
