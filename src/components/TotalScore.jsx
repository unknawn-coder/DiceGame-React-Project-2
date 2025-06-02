import React from 'react';
import styled from 'styled-components';
const TotalScore = ({score})=>{
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
      

        </ScoreContainer>
                
          
    )
}
export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;

    @media (min-width: 300px) and (max-width: 600px){
     margin: 0 auto;
     display: flex;
        flex-direction: column;
        gap: none;
     
    
    
    
    
    }
h1{
  @media (min-width: 300px) and (max-width: 600px){
   font-size: 60px;
   

   }
    font-size : 100px;
    line-height: 100px;
    
    }
p{
 @media (min-width: 300px) and (max-width: 600px){
   font-size: 15px;
   
   

   }



    font-size: 24px;
    font-weight: 500px;
    margin-left: 5px;
    }



`;