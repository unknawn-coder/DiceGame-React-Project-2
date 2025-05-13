import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className= "text">
                <p>1. Select a number between 1 and 6.</p>
                <p>2. Click on the dice to roll it.</p>
                <p>3. If the number on the dice matches your selected number, you win points equal to that number.</p>
                <p>4. If the number does not match, you lose 2 points.</p>
                <p>5. The game ends when you choose to reset your score.</p>
            </div>



        </RulesContainer>
      
    
  )
}

export default Rules;
const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding:  20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    h2{
       font-size: 24px;
       
    
    }
       .text{
       margin-top: 24px;
         font-size: 18px;
       }
    
`;
/*const RulesContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    z-index: 1000;
`;*/
