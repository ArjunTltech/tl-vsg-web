import { welcomeTwo } from "@/data/welcomeSection";
import useActive from "@/hooks/useActive";
import React from "react";
import Image from "next/image";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";

const { image, tagline, title, text } = welcomeTwo;

const WelcomeTwo = ({ id = "" }) => {
  const ref = useActive(id);

  return (
    <section
      ref={ref}
      id={id}
      style={{
        width: "100%",
        padding: "60px 20px",
        boxSizing: "border-box",
         backgroundColor: "#fff",
      
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1300px",
          margin: "0 auto",
          
        }}
      >
        {/* Left Column */}
        <div
          style={{
            flex: "1 1 40%",
            minWidth: "300px",
            position: "relative",
            // marginLeft: "5%",
            padding: "10px",
            animation: "slideInLeft 1s ease-in-out",
            

          }}
        >
          <div>
            <Image src={image.src} alt="Welcome Image" width={600} height={400} style={{ width: "100%", height: "auto" }} />
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            flex: "1 1 55%",
            minWidth: "300px",
            padding: "10px 20px",
          }}
        >
          <Title title={title} tagline={tagline} className="text-left" />
          <p className="purpose-text">{text}</p>
        </div>
      </div>

    
     
    </section>
  );
};

export default WelcomeTwo;