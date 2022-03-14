import React from "react";
import Fade from "react-reveal/Fade";
import Titles from "../utils/Titles";
import Cloud from "../animation/Cloud";
import VideoSliders from "../utils/sliders/VideoSliders";
const Videos = ({ menuTitles, menuTitlesEng, topics }) => {
  const isBlue = false;

  return (
   
      <div id={menuTitles[0]} className="pt-5 xs:pt-28 mb-10 xs:mb-40 overflow-hidden relative">
       <Fade bottom>
        <div className="mb-5 max-w-screen-2xl mx-auto px-3 lg:px-6">
        <div className="flex flex-col items-center">
          <Titles menuTitles={menuTitles[0]} menuTitlesEng={menuTitlesEng[0]} />
          <div className="clouds relative">
          <Cloud />
          </div>
        </div>

        <VideoSliders topics={topics} isBlue={isBlue}/>
        </div>
        </Fade>
      </div>
    
  );
};

export default Videos;
