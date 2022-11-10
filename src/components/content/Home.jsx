import React from "react";
import ContentHome from "../layouts/contentHome";
import SlideHome from "../layouts/slideHome";

const Home = () => {
  return (
    <div className="main">
      <div className="allcontainer">
        <SlideHome />
        <ContentHome />
      </div>
    </div>
  );
};

export default Home;
