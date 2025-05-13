import React from 'react';
import TotalScore from './TotalScore.jsx';
import NumberSelector from './NumberSelector.jsx';
import styled from 'styled-components';
import RoleDice from './RoleDice.jsx';
import {useState} from 'react';
import {OutlineButton,Button} from '../styled/Button.js';
import Rules from './Rules.jsx';
const GamePlay = ()=>{
    const [score, setScore] = useState(0);
    const [SelectedNumber, setSelectedNumber] = useState();
     const [currentDice, setCurrentDice] =useState(1);
     const [error , setError] = useState("");
     const [showRules, setShowRules] = useState(false);
       const generateRandomNumber = (min, max)=> {
     return Math.floor(Math.random() * (max - min) + min);
    
      };
      const roleDice = ()=>{
         if(!SelectedNumber) {
            setError("Please select a number");
            return;
         };
         
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev)=> randomNumber);
       
        if(SelectedNumber === randomNumber){
            setScore((prev)=> prev + randomNumber);
        }
        else{
            setScore((prev)=> prev - 2);
        }
        setSelectedNumber(undefined);
        
      };
      const resetScore = ()=>{
        setScore(0);
        
      };
    

    return (
        <MainContainer>
            <div className="top_section">
          <TotalScore score={score}/>
          <NumberSelector error={error} setError={setError} SelectedNumber={SelectedNumber}
          setSelectedNumber = {setSelectedNumber}/>
          </div>
          <RoleDice currentDice={currentDice} roleDice={roleDice}/>
          <div className="btns">
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button onClick={()=> setShowRules(prev=> !prev)}>{ showRules ? "Hide " : "Show "}Rules</Button>
          </div>
          {showRules && <Rules />}
        </MainContainer>
    )
}
export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;

.top_section{
    display:flex;
    justify-content :space-between;
    align-items: end;
    }
    .btns{
        margin-top: 40px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        padding-top: 20px;
        
    }
`;
