import React from "react";
import web from ".//images/about.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnname="Conact Now"
      />
    </>
  );
};

export default About;
