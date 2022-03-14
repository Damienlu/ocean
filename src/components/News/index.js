import React from "react";
import Fade from "react-reveal/Fade";
import Titles from "../utils/Titles";
import Sliders from "../utils/sliders/Sliders";
import Cloud from "../animation/Cloud";
const News = ({ menuTitles, menuTitlesEng, topics}) => {
  const isBlue = false;

  return (
    <Fade bottom>
      <div id={menuTitles[1]} className="pt-28 mb-40 overflow-hidden relative">
      
        <div className="mb-5 max-w-screen-2xl mx-auto px-3 lg:px-6 flex flex-col items-center">
          <Titles menuTitles={menuTitles[1]} menuTitlesEng={menuTitlesEng[1]} />
          
          <div className="clouds relative">
          <Cloud/>
          </div>
        </div>
        <Sliders topics={topics} isBlue={isBlue}/>
      </div>
    </Fade>
  );
};

export default News;
