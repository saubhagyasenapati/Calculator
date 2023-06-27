const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");

exports.getPersonalLoanCalculator = catchAsyncErrors(async (req, res) => {
  const { Amount, Tenure, Income, Obligations } = req.body;
  let str = "";
  let Loan = false;
  if (Amount > Income * 11) {
    str = "Sorry,You are Not Eligible For Personal Loan";
  } else if (Obligations > 0) {
    str = "Sorry,You are Not Eligible For Personal Loan";
  } else if (Amount > Income * Tenure) {
    str = "Sorry,You are Not Eligible For Personal Loan";
  } else {
    str = "You Are Eligible for a personal loan";
    Loan = true;
  }
  res.status(200).json({
    success: true,
    message: str,
    Accept: Loan,
  });
});

exports.getBussinessLoanCalculator = catchAsyncErrors(async (req, res) => {
  const { NetMonthlyIncome, Obligations } =
    req.body;

  var AllowedLoan = 0.7 * NetMonthlyIncome;
  AllowedLoan = AllowedLoan - Obligations;
  const Rate = 18/(12 * 100);
  const powerFactor = Math.pow(1 + Rate, 36);
  const EMI =(100000 * Rate * powerFactor) / (Math.pow(1 + Rate,36) - 1);
  const TotalAmount = (100000 * AllowedLoan) / EMI;
  res.status(200).json({
    success: true,
    EMI:EMI,
    TotalAmount: TotalAmount.toFixed(2),
  });
});

exports.getHomeLoanCalculator = catchAsyncErrors(async (req, res) => {
  const { Source, Amount, Property, date, Tenure, Obligations } = req.body;
  let str = "";
  let Loan = false;

    str = "Sorry,You are Not Eligible For Home Loan";
  
  // else if(Obligations>0){
  //     str="Sorry,You are Not Eligible For Personal Loan"
  // }
  // else if(Amount>Income*Tenure){
  //     str="Sorry,You are Not Eligible For Personal Loan"
  // }

  res.status(200).json({
    success: true,
    message: str,
    Accept: Loan,
  });
});

exports.getEMI = catchAsyncErrors(async (req, res) => {
  console.log(req.body);
  const { loanAmount, interest, loanTenure } = req.body;
  const Rate = interest / (12 * 100);

  const powerFactor = Math.pow(1 + Rate, loanTenure);

  console.log(Math.pow(1 + Rate, loanTenure) - 1);
  const EMI =
    (loanAmount * Rate * powerFactor) / (Math.pow(1 + Rate, loanTenure) - 1);

  const Total = EMI * loanTenure;
  const InterestTotal = Total - loanAmount;
  res.status(200).json({
    success: true,
    emi: EMI.toFixed(2),
    Interest: InterestTotal.toFixed(2),
    Total: Total.toFixed(2),
  });
});
