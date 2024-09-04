import React from 'react'
import SidebarCall from '../../component/constant/SidebarCall'
import Herosection from '../../component/herosection/Herosection'
import Aboutme from '../../component/aboutme/Aboutme'

export default function Home() {
  return (
   <>
   <div className="homepage">
 
    <Herosection/>
    <Aboutme/>
   </div>

   </>
  )
}
