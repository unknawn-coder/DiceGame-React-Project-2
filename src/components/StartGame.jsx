import styled from 'styled-components';
import { Button } from '../styled/Button';
const StartGame=({toggle})=>{
    return (
        <>
        <Container>
            
            <div>
            <img src="/images/dices.png"/>
            </div>
            <div className= "content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>



        </Container>
       

        </>
    )
}
export default StartGame;
const Container = styled.div`
max-width: 1180px;
display: flex;
margin : 0 auto;
height: 100vh;
align-items: center;
@media (min-width: 300px) and (max-width: 600px){
  flex-direction: column;
   align-items: center;
   padding-top: 110px;
  
  
  
    height: 844px;
    width: 390px;
    img{
    margin-top: 30px;
     margin-right: 85px;
      width: 230px;
      height: 180px;
    }

    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px;
      }

      .content h1{
      padding: 10px;
        
      text-align: center;
        
        
        
      }
  
}


border: 2px solid none;
border-radius: 20px;
border-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

background: linear-gradient(to right,rgb(0, 121, 70),rgb(177, 246, 158));


.content{
 
    
  h1{
     font-size: 96px;
     white-space: nowrap;
     
    }

    @media (min-width: 300px) and (max-width: 600px){
      h1{
        font-size: 30px;
        text-align: center;
      }



    }
`;
