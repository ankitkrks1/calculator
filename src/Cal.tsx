import React from 'react';
import { useState } from 'react'
import './App.css'
import Screen from "./Components/Screen";
import Keyboard from './Components/Keyboard';

const Cal :React.FC = () => {
    const [val, setVal] = useState<string>('')
  
    const handleVal = (e:string|number)=>{

      if(e==='C'){
        setVal('')
      }
      else if(e==='X'){
        setVal(val=>val.slice(0,val.length-1))
      }
      else{
        setVal(val=>val+e)}
  
    }
    const handleCal = ()=>{
      setVal(eval(val).toString())
    }
   
    return (
      <div className="Cal">
       <h1>Calculator</h1>
       
       <Screen val={val}/>
       <Keyboard handleVal={handleVal}/>
       <button className='key' onClick={handleCal}>=</button>
  
      </div>
    )
  }

export default Cal
