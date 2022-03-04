import React from "react";
import web from ".//images/bg.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/Service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
