import React from "react";

const Footer = () => {
  const footer = [
    {
      title: "1.5M",
      description:
        "Wich is appraximately 56% of the consumer population of the us",
    },
    {
      title: "41%",
      description: "The lagest adopter due to beingcomfortable with technology",
    },
    {
      title: "3964+",
      description:
        "The online payment system offer electronic alternatives yo traditional",
    },
  ];
  return (
    <div className="footer">
      <div>
        <p className="title">Join million MSMEs in their success</p>
      </div>
      <div>
        <div className="footerdetails">
          {footer.map((item) => {
            return (
              <div className="card">
                <p className="title">{item.title}</p>
                <p className="subtitle">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
