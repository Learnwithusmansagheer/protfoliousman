import React from 'react'
import './contentbutton.css'
export default function ContantButton({icon,styles}) {
  return (
   <>
   <div className="contentButton"style={styles}>
{icon}
   </div>
   </>
  )
}
