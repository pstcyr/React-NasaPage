import React from 'react'  //Type rfc (react function component)
import info from '../assets/info.svg'

export default function Footer(props) {
  const {handleModelOpen} = props;

  return (
    <div className="Footer">
      Swirling Magnetic Field around Our Galaxy's Central Black Hole 
      <img src={info} className="InfoIcon" onClick={()=> handleModelOpen()}></img> 
    </div>
  )
}




