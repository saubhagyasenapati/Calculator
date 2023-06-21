import React from "react";
import loan from "../assets/loan.png";
import credit from "../assets/credit.png";
import doc from "../assets/documentation.png";
import Application from "../assets/Application.png";
import WorkCompoent from "../subcomponent/WorkCompoent";
import colon from "../assets/collon.png"
const Work = () => {
  const work = [
    {
      num: "01",
      alignLeft: true,
      title: "Application",
      description:
        "The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan.",
      imageUrl: Application,
    },
    {
      alignLeft: false,
      num: "02",
      title: "Documentation and Verification",
      description:
        "The bank requests supporting documents from the borrower, such as identification proof, income statements, bank statements, and collateral details (if applicable). The bank verifies the information provided to assess the borrower's creditworthiness and eligibility for the loan.",
      imageUrl: doc,
    },
    {
      alignLeft: true,
      num: "03",
      title: "Credit Assessment",
      description:
        "The bank conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, income stability, debt-to-income ratio, and other factors.",
      imageUrl: credit,
    },
    {
      alignLeft: false,
      num: "04",
      title: "Loan Approval",
      description:
        "If the borrower meets the bank's lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees.",
      imageUrl: loan,
    },
  ];

  return (
    <div className="Work">
      <div className="title">
        <p>How we Work?</p>
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
        <div>
          <img src="../src/assets/loangraph.png" alt="" />
        </div>
        <div className="infoContent">
          <div>
            <p className="title">What do you get?</p>
          </div>
          <div>
            <p className="subtitle1">
              Instant payment.electronic payments are much faster than the
              traditional methods of payments.
            </p>
          </div>
          <div>
            <p className="subtitle2">
              Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
              viverra libero est nLorem ipsum dolor sit amet consectetur.
              Aliquet ut ante ut eu. Id viverra libero est n
            </p>
          </div>
        </div>
      </div>
      <div className="infographics">
        <div className="infoContent">
          <div>
            <p className="title">What do they think?</p>
          </div>
          <div>
            <p className="subtitle2">
              Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
              viverra libero est nLorem ipsum dolor sit amet consectetur.
              Aliquet ut ante ut eu. Id viverra libero est n
            </p>
          </div>
          <div>
            <p className="subtitle2">
              “simply the best.better than all the rest.recommend this product
              to beginner and advanced user”
            </p>
          </div>
          <div className="Testimonial">
            <div>
              <img src="../src/assets/testimonial.png" alt="" />
            </div>
            <div className="content">
              <div className="title">
                <p>Theresa Webb</p>
              </div>
              <div className="subtitle">
                <p>Director of technology .creativegig</p>
              </div>
            </div>
          </div>
        </div>
        <div className="collon">
          <img src={colon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
