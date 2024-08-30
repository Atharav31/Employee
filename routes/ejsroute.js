const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("addemp");
});
router.get("/list", (req, res) => {
  return res.render("list");
});
module.exports = router;
