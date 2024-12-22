import React from 'react'  //Type rfc (react function component)
import info from '../assets/info.svg'

export default function Footer(props) {
  const {handleModelOpen, modelOpen, data} = props;

  return (
    <div className="Footer">
      {data.title} 
      { !modelOpen && (
      <img src={info} className="InfoIcon" onClick={()=> handleModelOpen()}></img> 
      )}
    </div>
  )
}




