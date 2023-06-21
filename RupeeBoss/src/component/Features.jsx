import React from 'react'
import Feature from '../subcomponent/Feature';
import clock from "../assets/clock.png"
import lock from "../assets/lock.png"
import headphone from "../assets/headphone.png"
const Features = () => {
    const feature = [
        {   
          title: "Easy Approval",
          description: "We understand that time is of the essence when it comes to securing funding for your small business. That's why we've designed our loan application process to be quick, simple, and hassle-free, ensuring easy approval and access to the funds you need",
          imageUrl: clock
        },
        {
          title: "Quick Disbursal",
          description: "We know that delays can hinder your progress and limit your ability to seize opportunities. That's why we prioritize quick disbursal, ensuring that you can access the capital you need in a timely manner.",
          imageUrl: lock
        },
        {
          title: "100+ Banks and NBFCs",
          description: "We are proud to offer an extensive range of banking and financial institutions, providing you with a diverse selection of options to cater to your specific financial requirements. As a national distributor, we represent over 100 private, PSU banks, MNC banks, and NBFCs in the country, offering a comprehensive range of retail and MSME loan products.",
          imageUrl: headphone
        }
      ];
  return (
    <div>
      <div className='featurebox'>
      <Feature item={feature[0]}/>
      <div class="vl"></div>
      <Feature item={feature[1]}/>
      <div class="vl"></div>
      <Feature item={feature[2]}/>
      </div>
    </div>
  )
}

export default Features
