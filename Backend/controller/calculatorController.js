
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");


exports.getPersonalLoanCalculator = catchAsyncErrors(async (req, res) => {
const {Amount,Tenure,Income,Obligations}=req.body
let str="";
let Loan=false;
if(Amount>Income*11){
    str="Sorry,You are Not Eligible For Personal Loan"
   
}
else if(Obligations>0){
    str="Sorry,You are Not Eligible For Personal Loan"
}
else if(Amount>Income*Tenure){
    str="Sorry,You are Not Eligible For Personal Loan"
}
else{
    str="You Are Eligible for a personal loan"
    Loan=true
}
    res.status(200).json({
      success: true,
      message:str,
      Accept:Loan
    });
  });
  

  exports.getBussinessLoanCalculator = catchAsyncErrors(async (req, res) => {
    const {Amount,Tenure,date,Turnover,InterestPaidonLoans,PAT,Depr,DirRemuration,TotalEMI,NoOfEMIPaid}=req.body
    let str="";
    let Loan=false;
    if(Amount>Turnover*11){
        str="Sorry,You are Not Eligible For Bussiness Loan"
       
    }
    // else if(Obligations>0){
    //     str="Sorry,You are Not Eligible For Personal Loan"
    // }
    // else if(Amount>Income*Tenure){
    //     str="Sorry,You are Not Eligible For Personal Loan"
    // }
    else{
        str="You Are Eligible for a Bussiness loan"
        Loan=true
    }
        res.status(200).json({
          success: true,
          message:str,
          Accept:Loan
        });
      });

      exports.getHomeLoanCalculator = catchAsyncErrors(async (req, res) => {
        const {Source,Amount,Property,date,Tenure,Obligations}=req.body
        let str="";
        let Loan=false;
        if(Amount>Property*2){
            str="Sorry,You are Not Eligible For Home Loan"
           
        }
        // else if(Obligations>0){
        //     str="Sorry,You are Not Eligible For Personal Loan"
        // }
        // else if(Amount>Income*Tenure){
        //     str="Sorry,You are Not Eligible For Personal Loan"
        // }
        else{
            str="You Are Eligible for a Home loan"
            Loan=true
        }
            res.status(200).json({
              success: true,
              message:str,
              Accept:Loan
            });
          });