import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
const TestemonialComponent = () => {
  return (
    <>
        <div id="carouselExampleInterval" className="carousel slide carousel-dark " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
    <div className="Testimonial">
        <div className="review">
            <p >“It's been a good experience to get service from rupeeboss .Special thanks to Ms Mahima Madam .She had complete knowledge and guided me very well.We have take personal loan .She is very friendly nature. Thank you so much .”</p>
        </div>
        <div className="details">
        <div className="person" >
          <img src={person1} alt="" />
        </div>
        <div className="content">
         
            <p className="title">Abhijeet Mandavkar</p>
            <p className="subtitle">Rupeeboss Customer</p>
         
        </div>
        </div>
   
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
    <div className="Testimonial">
        <div className="review">
            <p >“Thanks a lot Mahima Sable, Deepti Nair and the whole rupee boss team, I got loan within time so I could continue with my business, thanks for your efforts and quick services.”</p>
        </div>
        <div className="details">
        <div className="person" >
          <img src={person2} alt="" />
        </div>
        <div className="content">
         
            <p className="title">Snehal Raut</p>
            <p className="subtitle">Rupeeboss Customer</p>
         
        </div>
        </div>
   
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
    <div className="Testimonial">
        <div className="review">
            <p >“I am thankful for communicating Guidelines for acquiring funds and helping me to proceed further for loan.
Ms.Pallavi Shelar(Rupee Boss Financial Services) i thank you for ur support, Wishing you all the best”</p>
        </div>
        <div className="details">
        <div className="person" >
          <img src={person3} alt="" />
        </div>
        <div className="content">
         
            <p className="title">Devendra bhavsar</p>
            <p className="subtitle">Rupeeboss Customer</p>
         
        </div>
        </div>
   
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  );
};

export default TestemonialComponent;
