import React from "react";
import Fade from "react-reveal/Fade";
import Titles from "../utils/Titles";
import Sliders from "../utils/sliders/Sliders";
import Cloud from "../animation/Cloud";
const Articles = ({ menuTitles, menuTitlesEng, topics}) => {
  const isBlue = true;
  const isCloudLeft = true;
  return (
    
      <>
      <div id={menuTitles[5]} className="section articles pt-32 py-20 overflow-hidden">
      <Fade bottom>
        <div className="mb-5 max-w-screen-2xl mx-auto px-3 lg:px-6 flex flex-col items-center">
          <Titles menuTitles={menuTitles[5]} menuTitlesEng={menuTitlesEng[5]} />
          <div className="clouds relative">
          <Cloud isCloudLeft={isCloudLeft}/>
          </div>
        </div>
        <Sliders topics={topics} isBlue={isBlue}/>
        </Fade>
      </div>
      
      <div className="gap_blue"></div>
    </>
  );
};

export default Articles;
