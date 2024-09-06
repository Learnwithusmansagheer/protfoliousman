import React from "react";
import Paragraph from "../paragraphinformation/Paragraph";
import images1 from '../../assets/images/portfolio.jpg'
import images2 from '../../assets/images/web.jpeg'
import images3 from '../../assets/images/phot.jpg'
import HrTag from '../../component/hrtag/HrTag'
import './portfolio.css'
import PortfolioCard from "../portfoliocard/PortfolioCard";
export default function Portfolio() {
    const information=[{
        heading:'Web Design',
        subheading:'Software Design for ABC Corporation',
        images:images1,
        portimages:images1,

    },
    {
        heading:'Web Development',
        subheading:'Website Development for ABC Corporation',
        images:images2,
        portimages:images2,

    },
    {
        heading:'Photography',
        subheading:'Security Analysis for ABC Corporation',
        images:images3,
        portimages:images3,

    },]
  return (
    <>
      <div className="portfoliosetting">
        <div className="portfoliopart1">
          <Paragraph heading='Portfolio' paragraph="My Recent Works" />
        </div>
        <div className="portfoliopart2">
{
    information.map((item,index)=>(
        <PortfolioCard
        key={index}
        heading={item.heading}
        subheading={item.subheading}
        images={item.images}
        portimages={item.portimages}
        />
    ))
    
}
        </div>
      </div>
      <HrTag/>
    </>
  );
}
