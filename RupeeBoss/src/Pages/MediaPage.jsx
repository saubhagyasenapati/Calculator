import React from 'react'
import Temp from "../assets/temporary.png"
import Headline from "../assets/Headline.png"
import News from '../subcomponent/News'
import News1 from '../assets/News1.png'
import News2 from '../assets/News2.png'
import News3 from '../assets/News3.png'
import News4 from '../assets/News4.png'
import News5 from '../assets/News5.png'
import News6 from '../assets/News6.png'
import News7 from '../assets/News7.png'
import News8 from '../assets/News8.png'
import "../styles/Media.css"
const MediaPage = () => {
    const news=[
        {
            title: "World's first AI based bot developed by Rupeeboss.com with Reliance JIO",
            description:
              "Now, Reliance Jio will help you resolve your loan queries The Loan Genie is a video call based bot that will help customers seek answers to all their loan-related queries through interactions and engagement. Users can also apply for the loan on this platform.",
            imageUrl: News1,
            url:"https://www.businesstoday.in/latest/corporate/story/reliance-jio-help-resolve-loan-queries-loan-genie-168643-2019-02-20"
          },
          {
            title: "ECONOMIC TIMES MENTIONS RUPEEBOSS.COM's NEW CHATBOT LAUNCH",
            description:
              "Private sector lender Yes Bank has partnered with online financial services company RupeeBoss.com for the integration of the bank’s chat bot based platform to support instant loan eligibilities for its several loan products.",
            imageUrl: News2,
            url:"https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/yes-bank-partners-with-rupeeboss-com/articleshow/65936035.cms"
          },
          {
            title: "BUSINESS WORLD DESCRIBES RUPEEBOSS CHATBOT AS GAME CHANGER IN FINANCE INDUSTRY",
            description:
              "YES BANK, India’s fourth largest private sector bank announced its partnership with RupeeBoss.com, an online financial services company for the integration.",
            imageUrl: News3,
            url:"http://bwcio.businessworld.in/article/YES-BANK-integrates-mPower-BOT-with-RupeeBoss-com/25-09-2018-160737/"
          },
          {
            title: "BANKING & FINANCE POST MENTIONS RUPEEBOSS.COM & YESBANK POWERED CHATBOT AS THE CONVENIENT WAY FOR LOAN Temp",
            description:
              "Private lender YES Bank has collaborated with online financial services provider RupeeBoss.com in a bid to integrate bank’s chatbot based platform to support instant loan.",
            imageUrl: News4,
            url:"https://bfsi.eletsonline.com/yes-bank-rupeeboss-com-partner-to-enable-instant-loan-sanctions/"
          },
          {
            title: "INDIA INFOLINE ACKNOWLEDGES THE INTEGRATION OF RUPEEBOSS.COM WITH YESBANK FOR INITIATING CHATBOT 'MPOWER'",
            description:
              "Private sector lender Yes Bank has partnered with online financial services company RupeeBoss.com for the integration of the bank’s chat bot based platform to support instant loan eligibilities for its several loan products.",
            imageUrl: News5,
            url:"https://www.indiainfoline.com/top-share-market-news"
          },
          {
            title: "BANKING FRONTIERS STATES ABOUT RUPEEBOSS.COM's NEW FINTECH LAUNCH",
            description:
              "The borrower submits a loan application to the bank, either in person, online, or through other channels. The Temp includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan.",
            imageUrl: News6,
            url:"https://bankingfrontiers.com/yes-bank-partners-with-rupeeboss-com/?__cf_chl_rt_tk=vABVhmCMjZ61b40EOJYabVf95PpF41msE8gBK_Qbdsk-1687345536-0-gaNycGzNCiU"
          },
          {
            title: "YES BANK, RUPEEBOSS.COM PARTNER TO ENABLE INSTANT LOAN SANCTIONS",
            description:
              "Private lender YES Bank has collaborated with online financial services provider RupeeBoss.com in a bid to integrate bank’s chatbot based platform to support instant loan eligibilities for its several loan products",
            imageUrl: News7,
            url:"https://nrinews24x7.com/yes-bank-integrates-mpower-bot-with-rupeeboss-com-in-an-industry-first-digital-initiative/"
          },
          {
            title: "YES BANK INTEGRATES CHATBOT WITH RUPEEBOSS.COM",
            description:
              "Yes Bank has partnered with online financial services company RupeeBoss.com to integrate its chatbot based platform YES mPower BOT.",
            imageUrl: News8,
            url:"https://www.verdict.co.uk/retail-banker-international/news/yes-bank-chatbot-rupeeboss-com/"
          },
    ]
  return (
    <div className='Media'>
      <div className='heading'>
        <div className='partleft'>
        <p className='title'>World's first AI based bot developed by Rupeeboss.com with Reliance JIO</p>
         <p className='subtitle'>
            <span className='bold'>
            Now, Reliance Jio will help you resolve your loan queries
            </span>
. The Loan Genie is a video call based bot that will help customers seek answers to all their loan-related queries through interactions and engagement. Users can also apply for the loan on this platform. 
         </p>
         <button className='newsbutton'>Read More</button>
        </div>
 <div className='partright'>
<img src={Headline} alt="" />
 </div>
      </div>
      <div>
        <p className='Newshead'>
            Latest News
        </p>
       <div className='NewsGrid'>
        {
            news.map((item)=>{
    return <News item={item}/>
            })
        }
       </div>
      </div>
    </div>
  )
}

export default MediaPage
