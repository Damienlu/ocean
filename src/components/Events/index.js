import React from "react";
import Fade from "react-reveal/Fade";
import Titles from "../utils/Titles";
import Sliders from "../utils/sliders/Sliders";
import Cloud from "../animation/Cloud"
const Events = ({ menuTitles, menuTitlesEng, topicsData}) => {
  const isBlue = true;
  
  return (
    <Fade bottom>
      
      <div  className="events pb-20 overflow-hidden">
        <div id={menuTitles[2]}  className="gap_yellow mb-20"></div>
        <div className="mb-5 max-w-screen-2xl mx-auto px-3 lg:px-6 flex flex-col items-center">
          <Titles menuTitles={menuTitles[2]} menuTitlesEng={menuTitlesEng[2]} />
          <div className="clouds relative">
          <Cloud/>
          </div>
        </div>
        <Sliders topics={topicsData[0].topics} isBlue={isBlue}/>
      </div>
    </Fade>
  );
};

export default Events;
