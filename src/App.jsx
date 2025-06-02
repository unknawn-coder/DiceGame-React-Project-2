import React from 'react';
import {useState} from 'react';
import StartGame from './components/StartGame.jsx';
import GamePlay from './components/GamePlay.jsx';
import './App.css';




function App() {
 const [isGameStarted, setIsGameStarted] = useState(false);
 const toggleGameStart = () => {
   setIsGameStarted((prev)=> !prev);
 };

  return (
    <>
    {
      isGameStarted ? <GamePlay/> : <StartGame
      toggle={toggleGameStart}
      />
    }
    
    
  


       
    </>
  )
}

export default App;

