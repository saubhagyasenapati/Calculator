const express = require("express");
const { sendMail } = require("../controller/mailController");

const router = express.Router();

router.route("/contact").post(sendMail);


module.exports = router;