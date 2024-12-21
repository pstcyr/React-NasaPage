import React from 'react'

export default function SideBar(props) {
  const {modelOpen} = props;
  console.log(modelOpen);
  if (!modelOpen) return null;
  
  return (

    <div className="Modal">     {console.log("accepted")} I made it through the deepend</div>
  )
}
