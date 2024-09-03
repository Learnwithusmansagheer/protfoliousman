import React from 'react'
import './paragraph.css'
export default function Paragraph(props) {
  return (
    <>
    <div className='paragraphsetting'>
        <h1 className='text-white'>{props.heading}</h1>
        <p className=' display-6 text-black mb-0'>{props.paragraph}</p>
    </div>
    </>
  )
}
