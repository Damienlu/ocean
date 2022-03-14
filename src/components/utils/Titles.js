import clsx from "clsx";
import React from "react";
import Fade from "react-reveal/Fade";

const Titles = ({ menuTitles, menuTitlesEng, isDark }) => {
  return (
    <Fade bottom>
      <div className="title flex flex-col items-center">
        <div className="mb-1">
          <svg
            className={clsx("stroke-current fill-current text-primary-light", {"text-white": isDark})}
            xmlns="http://www.w3.org/2000/svg"
            width="41.001"
            height="6"
            viewBox="0 0 41.001 6"
          >
            <g
              id="Group_67"
              data-name="Group 67"
              transform="translate(-2832.929 -2032.016)"
            >
              <g
                id="Group_64"
                data-name="Group 64"
                transform="translate(2833.43 2032.516)"
              >
                <path
                  id="Path_151"
                  data-name="Path 151"
                  d="M2869.8,2034.532a10.015,10.015,0,0,1-5.418-1.653,9.4,9.4,0,0,1-5.317,1.653,9.179,9.179,0,0,0-10.509,0,9.066,9.066,0,0,0-11.4,0c-4.723,0-5.212,2.983,0,2.983a9.037,9.037,0,0,1,11.381,0,9.058,9.058,0,0,1,10.433,0,9.723,9.723,0,0,0,5.418-1.653,10.017,10.017,0,0,0,5.418,1.653C2874.638,2037.516,2874.638,2034.532,2869.8,2034.532Z"
                  transform="translate(-2833.43 -2032.516)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
        <span className={clsx("tracking-widest text-sm mb-1 font-black text-primary-light", {"text-white": isDark} )}>
          {menuTitlesEng}
        </span>
        <h2 className="tracking-widest text-2xl">
          {menuTitles}
        </h2>
      </div>
    </Fade>
  );
};

export default Titles;
