const express = require("express");
const { handleConnection } = require("../connection/connect");
const { addemp, filter } = require("../controller/emp");
const router = express.Router();
handleConnection();

router.post("/add", addemp);
router.post("/filter", filter);

module.exports = router;
