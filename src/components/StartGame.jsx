import styled from 'styled-components';
import { Button } from '../styled/Button';
const StartGame=({toggle})=>{
    return (
        <>
        <Container>
            
            <div>
            <img src="../public/images/dices.png"/>
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
    }
`;
