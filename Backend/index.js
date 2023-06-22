const express = require("express");
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
dotenv.config({ path: "config/config.env" });
const path=require("path")
const Sib = require('sib-api-v3-sdk')
const calculator=require("./routes/calculatorRoute")
const mailRoute=require("./routes/mailRoute")
//Handling Uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to Uncaught exception");
  process.exit(1);
});
app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

// app.use(cookieParser());
//Route Import
app.use("/api/v1/calculator",calculator);
app.use("/api/v1/mail",mailRoute);


// app.use(express.static(path.join(__dirname,"../frontendn/build")))
// app.get("*",(req,res)=>{
//   res.sendFile(path.resolve(__dirname,"../frontendn/build/index.html"));
// })
//MiddleWare for error
app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  console.log(`Server is Working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});