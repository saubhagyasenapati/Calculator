const express = require("express");
const { getPersonalLoanCalculator, getBussinessLoanCalculator, getHomeLoanCalculator, getEMI } = require("../controller/calculatorController");

const router = express.Router();

router.route("/personal").post(getPersonalLoanCalculator);
router.route("/bussiness").post(getBussinessLoanCalculator);
router.route("/home").post(getHomeLoanCalculator);
router.route("/emi").post(getEMI);

module.exports = router;