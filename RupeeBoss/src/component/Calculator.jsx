import React, { useState } from 'react';
import PersonalLoan from '../subcomponent/PersonalLoan';
import BussinessLoan from '../subcomponent/BussinessLoan';
import HomeLoan from '../subcomponent/HomeLoan';

const Calculator = () => {
  const [activeComponent, setActiveComponent] = useState('component1');
  const [isClicked,setisClicked]=useState(1)
  const handleButtonClick = (componentName,number) => {
    setActiveComponent(componentName);
    setisClicked(number)
  };

  return (
    <div className='CalculatorBox'>
          <p className='titleCal'>Loan Calculator</p>
          <div className="calculator">
      <div className="button-container">
        <div  className={isClicked==1 ? 'button-clicked' : 'button-notclicked'} onClick={() => handleButtonClick('component1',1)}>
        <p >Personal Loan Calculator</p>
        </div>
       <div className={isClicked==2 ? 'button-clicked' : 'button-notclicked'} onClick={() => handleButtonClick('component2',2)}>
       <p >Bussiness Loan Calculator</p>
       </div>
        <div className={isClicked==3 ? 'button-clicked' : 'button-notclicked'}onClick={() => handleButtonClick('component3',3)}>
        <p >Home Loan Calculator</p>
        </div>
       
      </div>
<hr />
      <div className="component-container">
        {activeComponent === 'component1' && <PersonalLoan/>}
        {activeComponent === 'component2' && <BussinessLoan />}
        {activeComponent === 'component3' && <HomeLoan />}
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
