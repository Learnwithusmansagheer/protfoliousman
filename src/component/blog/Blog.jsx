import React from "react";
import Paragraph from "../paragraphinformation/Paragraph";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import "./blog.css";
import Bloglocation from "../bloglocation/Bloglocation";
import BlogForm from "../blogform/BlogForm";
import Googlemap from "../googlemap/Googlemap";
export default function Blog() {
  const information = [
    {
      location: <FaLocationDot />,
      heading: "Adress",
      paragraph: "Ameen town Faisalabad",
    },
    {
        location:<MdEmail />,
        heading: "Email",
        paragraph: "apnausmansagheer@gmail.com",
      },
      {
        location: <BsTelephone />,
        heading: "Telephone",
        paragraph: "+92 3049469130",
      },
      {
        location: <CiLinkedin />,
        heading: "Linkdin",
        paragraph: "usman-sagheer",
      },
  ];
  return (
    <>
      <div className="blogsetting">
        <div className="blogfirst">
          <Paragraph
            heading="Contact Me"
            paragraph="Let’s Start A New Project"
          />
        </div>
        <div className="blogsecond">
          <div className="blogss">
            <div className="blogInformation">
              <div className="paragraphblog">
                <p>
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.
                  Download Now.
                </p>
              </div>
              <div className="sss">
                {information.map((item, index) => (
                  <Bloglocation
                    key={index}
                    location={item.location}
                    heading={item.heading}
                    paragraph={item.paragraph}
                  />
                ))}
              </div>
            </div>
            <div className="blogform">
              <BlogForm />
            </div>
          </div>
          <div className="map">
            <Googlemap />
          </div>
        </div>
      </div>
    </>
  );
}
