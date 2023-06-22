const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const Sib = require('sib-api-v3-sdk')

const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY_MAIL

exports.sendMail = catchAsyncErrors(async (req, res) => {
    const {number,name}=req.body
    const tranEmailApi = new Sib.TransactionalEmailsApi()
let status=false
    const sender = {
        email: 'sikan2601@gmail.com',
        name: 'Rupeeboss',
    }
    
    const receivers = [
        {
            email: 'saubhagya.sena@gmail.com',
        },
    ]
    tranEmailApi
        .sendTransacEmail({
            sender,
            to: receivers,
            subject: 'A Message from A vistor Of your Website Feel Free to Contact him back',
            textContent: `
            Name Of Client:${name}
            Number:${number}
            `,
            params: {
                role: 'Frontend',
            },
        })
        .then(status=true )
       
        res.status(200).json({
            success: status,
          })
     
      
      });
      