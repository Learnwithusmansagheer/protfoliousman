import React from 'react'
import SidebarCall from '../../component/constant/SidebarCall'
import Herosection from '../../component/herosection/Herosection'
import Aboutme from '../../component/aboutme/Aboutme'
import Education from '../../component/education/Education'
import Experience from '../../component/experience/Experience'
import Skill from '../../component/skill/Skill'
import Services from '../../component/services/Services'
import Portfolio from '../../component/portfolio/Portfolio'

export default function Home() {
  return (
   <>
   <div className="homepage">
 
    <Herosection/>
    <Aboutme/>
    <Education/>
    <Experience/>
    <Skill/>
    <Services/>
    <Portfolio/>
   </div>

   </>
  )
}
