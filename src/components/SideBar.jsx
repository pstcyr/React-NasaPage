import React from 'react'
import backArrow from '../assets/backArrow.svg'

export default function SideBar(props) {
  const {modelOpen, handleModelOpen, data} = props;

  
  if (!modelOpen) return null;
  
  return (
    <div className="Modal">    
      <div className="texts">
        <h6>{data.title}</h6>
        <p className="date">{data.date}</p>
        <p className="description">{data.explanation}</p>
      </div>
      <div className = "backArrowWrapper">
        <img className="backArrow" src = {backArrow} onClick={()=> handleModelOpen()}></img>
      </div>
    </div>
  )
}
