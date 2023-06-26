import React, { useState } from 'react';
import PersonalLoan from '../subcomponent/PersonalLoan';
import BussinessLoan from '../subcomponent/BussinessLoan';
import HomeLoan from '../subcomponent/HomeLoan';
import close from '../assets/close.svg'
import WorkingCapital from '../subcomponent/WorkingCapital';
import LoanEMI from '../subcomponent/LoanEMI';
const Calculator = ({calculator,setCalculator}) => {
  const [activeComponent, setActiveComponent] = useState('component1');
  const [isClicked,setisClicked]=useState(1)
  const handleButtonClick = (componentName,number) => {
    setActiveComponent(componentName);
    setisClicked(number)
  };

  return (
    <div className='CalculatorBox'>
      <div className='LoanCalbox'>
    
      <p className='titleCal'>Loan Calculator</p>
      </div>
         
          <div className="calculator">
      <div className="button-container">
      <div className={isClicked==1 ? 'button-clicked' : 'button-notclicked'} onClick={() => handleButtonClick('component1',1)}>
       <p >Business Loan Calculator</p>
       </div>
        <div  className={isClicked==2? 'button-clicked' : 'button-notclicked'} onClick={() => handleButtonClick('component2',2)}>
        <p >Personal Loan Calculator</p>
        </div>
        <div className={isClicked==3 ? 'button-clicked' : 'button-notclicked'}onClick={() => handleButtonClick('component3',3)}>
        <p >Home Loan Calculator</p>
        </div>
        <div className={isClicked==4 ? 'button-clicked' : 'button-notclicked'}onClick={() => handleButtonClick('component4',4)}>
        <p >Working Capital Calculator</p>
        </div>
        <div className={isClicked==5 ? 'button-clicked' : 'button-notclicked'}onClick={() => handleButtonClick('component5',5)}>
        <p >EMI Calculator</p>
        </div>
       
      </div>
<hr />
      <div className="component-container">
        {activeComponent === 'component1' && <BussinessLoan/>}
        {activeComponent === 'component2' && <PersonalLoan />}
        {activeComponent === 'component3' && <HomeLoan />}
        {activeComponent === 'component4' && <WorkingCapital />}
        {activeComponent === 'component5' && <LoanEMI />}
      </div>
    </div>
    </div>
    
  );
};

const Component1 = () => {
  return <div className="component component1">Component 1</div>;
};

const Component2 = () => {
  return <div className="component component2">Component 2</div>;
};

const Component3 = () => {
  return <div className="component component3">Component 3</div>;
};

export default Calculator;
