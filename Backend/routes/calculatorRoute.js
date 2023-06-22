const express = require("express");
const { getPersonalLoanCalculator, getBussinessLoanCalculator, getHomeLoanCalculator } = require("../controller/calculatorController");

const router = express.Router();

router.route("/personal").post(getPersonalLoanCalculator);
router.route("/bussiness").post(getBussinessLoanCalculator);
router.route("/home").post(getHomeLoanCalculator);

module.exports = router;