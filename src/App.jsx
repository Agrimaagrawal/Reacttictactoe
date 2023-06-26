import './App.css'
import { useState } from 'react';
import Board from './components/Board';
import {Winner} from './components/Winner'
import { Statusmessage } from './components/Statusmessage';

function App() {
  const [square,setSquare]=useState(Array(9).fill(null));
    const [isX,setIsX]=useState(true);
    const player=isX?'X':'O';
    const winner=Winner(square);
   
    
    
    const handleclick=clickedPosition=>{
      if(square[clickedPosition]||winner){
        return;
      }
        setSquare(setfigure=>{
             return setfigure.map((value,position)=>{
                if(clickedPosition===position&&isX){
                   return 'X';
                   
                }
                else if(clickedPosition===position&&!isX){
                  return 'o'
                }
                return value;
            })
           
          
        })
        setIsX(player=>!player);
    }
    
    
 

  return (
    <>
    <h2 className='text-7xl pb-6 font-bold text-yellow-400'>Tic-Tac-Toe ....</h2>
    <Statusmessage player={player} winner={winner} square={square} isNext={isX}/>
      <Board square={square} handleclick={handleclick}/>
    
      
    </>
  )
}

export default App
