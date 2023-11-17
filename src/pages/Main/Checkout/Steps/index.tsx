import React, { FC ,useState } from 'react';
import styled from 'styled-components';

const Stepper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 59.81rem;
  margin: 0 auto;
`;

const Step = styled.div`
  position: relative;
  text-align: center;
  font-weight: 400;
  flex: 1;
`;

const Line = styled.div`
  flex: 3;
  height: 0.25rem;
  border-radius: 20px;
  background-color: #3498db;
  align-items:center;
  margin:0  1rem 1rem 0 ;

`;

const Line1 = styled(Line)`
  flex: 1;
  background-color: #e74c3c;
`;

const StepIcon = styled.div`
  border-radius: 50%;
  background-color: #2ecc71;
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.25rem;
`;

const PassedIcon = styled(StepIcon)`
  background-color: #3498db;
`;

const Dot = styled(StepIcon)`
  background-color: #e74c3c;
  width: 2rem;
  height: 2rem;
`;

const ShoppingSummary = styled(Step)`
  font-weight: 600;
`;

export const Steps: FC = () => {
    const [step ,setStep] =useState(1);

function handlePrevious() {
    setStep(step-1);
}
function handleNext() {
    setStep(step+1);
}
  
    return (
       <>
        <Stepper>
            
            <ShoppingSummary>
                <PassedIcon />
                Shopping Summary
            </ShoppingSummary>
            <Line />
            <Step>
                <Dot />
                Checkout
            </Step>
            <Line1 />
            <Step>
                <Dot />
                Payment
            </Step>
            <Line1 />
            <Step>
                <Dot />
                Shipping
            </Step>
            
        </Stepper>
        <div>
        <div className={step >= 1 ? "active" : ""}></div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <div>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
        </>
        
    );
};

export default Steps;
