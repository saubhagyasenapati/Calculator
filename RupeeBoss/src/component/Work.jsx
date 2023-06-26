import React from "react";
import loan from "../assets/loan.png";
import testemonial from "../assets/testimonial.png";
import doc from "../assets/documentation.png";
import Query from "../assets/Query.png";
import Approval from "../assets/Aproval.png";
import WorkCompoent from "../subcomponent/WorkCompoent";
import colon from "../assets/collon.png";
import Quotes from "../assets/Quotes.png";
import Whatget from "../assets/WhatGet.png";
import TestemonialComponent from "../subcomponent/TestemonialComponent";

const Work = () => {
  const work = [
    {
      num: "01",
      alignLeft: true,
      title: "Quick Query",
      description:
        "Streamline your loan application process with our user-friendly online application platform or reach out to us directly for a quick inquiry. Our dedicated team promptly assists you, guiding you through the loan options and requirements.",
      imageUrl: Query,
    },
    {
      alignLeft: false,
      num: "02",
      title: "Multiple Quotes from Various Banks and NBFCs",
      description:
        "We leverage our extensive network of banks and non-banking financial companies (NBFCs) to provide you with multiple loan quotes. Compare and choose the best loan offer that suits your business needs and preferences.",
      imageUrl: Quotes,
    },
    {
      alignLeft: true,
      num: "03",
      title: "Documentation and Verification",
      description:
        "We understand the value of your time, which is why we simplify the documentation process. Our efficient team assists you in gathering the required documents swiftly, ensuring a smooth loan application experience.",
      imageUrl: doc,
    },
    {
      alignLeft: false,
      num: "04",
      title: "Sanction Approved/Rejected",
      description:
        "Once you have submitted the necessary documents, our expert team reviews your application promptly. We strive to provide quick sanction approvals, keeping you informed throughout the process. In case of rejection, we provide transparent feedback and explore alternative options.",
      imageUrl: Approval,
    },
    {
      alignLeft: true,
      num: "05",
      title: "Loan Disbursed",
      description:
        "Upon successful sanction approval, we initiate the loan disbursal process promptly. Our streamlined procedures ensure that the loan amount is disbursed to your business account efficiently, enabling you to address your financial needs without delay. Experience the convenience and efficiency of our loan processes with Rupee Boss, and let us assist you in securing the funds you need to fuel your business growth.",
      imageUrl: loan,
    },
  ];

  return (
    <div className="Work">
      <div className="title">
        <p>How we help you get quick loans</p>
      </div>
      <div className="subtitle">
        <p>This is a process, how you can get loan for your self.</p>
      </div>
      <div className="workDiv">
        {work.map((item) => {
          return <WorkCompoent item={item} />;
        })}
      </div>
        <div className="infographics">
          <div className="infocontent">
            <div >
              <div className="title">
                <p>What you get?</p>
              </div>
              <div className="subtitle1">
                <p>Access a wide range of loan products from over 100 banks and non-banking financial companies (NBFCs).</p>
              </div>
            </div>
          </div>
          <div className="grid">
            <img src={Whatget} alt="img"  />
          </div>
        </div>
<div className="TestimonialDiv">
  <div className="testemonialcontent">
    <div className="title">
      <p>What do they think?</p>
    </div>
    <div className="subtitle2">
      <p >
      Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est n
      </p>
    </div>
    <div className="testemonial">
<TestemonialComponent/>
    </div>
  </div>
  <div className="collon">
    <img src={colon} alt="collon" />
  </div>
</div>
    </div>
  );
};

export default Work;
