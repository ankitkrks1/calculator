import React from 'react'
import{ useRef} from 'react'
import '../App.css';

interface prop {
  val:string
}
const Screen: React.FC<prop> = ({val}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = ()=>{
    if(inputRef.current){

      inputRef.current.focus()
    }
  }
  return (
    <div>
      <input className='screen' ref={inputRef} value={val} autoFocus onBlur={focus}/>
      {/* <input/> */}
    </div>
  )
}

export default Screen
