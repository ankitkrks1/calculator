import{React, useRef} from 'react'

const Screen = ({val}) => {
  const inputRef = useRef()

  const focus = ()=>{
   inputRef.current.focus()
  }
  return (
    <div>
      <input className='screen' ref={inputRef} value={val} autoFocus onBlur={focus}/>
    </div>
  )
}

export default Screen
