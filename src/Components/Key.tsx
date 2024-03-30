import React from 'react'

interface prop {
  num:number|string,
  handleVal:(e:string|number)=>void
}

const Key : React.FC<prop> = ({num ,handleVal}) => {
  return (
   
      <button className="key" onClick={()=>handleVal(num)}>{num}</button>
   
  )
}

export default Key
