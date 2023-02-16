import React from 'react'

const Key = ({num ,handleVal}) => {
  return (
   
      <button onClick={()=>handleVal(num)}>{num}</button>
   
  )
}

export default Key
