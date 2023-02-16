import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Screen from "./Components/Screen";
import Keyboard from './Components/Keyboard';
function App() {
  const [val, setVal] = useState('')

  const handleVal = (e)=>{
    if(e==='C'){
      setVal(0)
    }
    else if(e==='X'){
      setVal(val=>val.slice(0,val.length-1))
    }
    else{
      setVal(val=>val+e)}

  }
  const handleCal = (e)=>{
    setVal(JSON.stringify(eval(val)))
  }
  const handleC = (val)=>{
    setVal(0)
  }
  return (
    <div className="App">
     <h1>Calculator</h1>
     
     <Screen val={val}/>
     <Keyboard handleVal={handleVal}/>
     <button onClick={handleCal}>=</button>

    </div>
  )
}

export default App
