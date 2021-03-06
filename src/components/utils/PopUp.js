
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';
import clsx from "clsx";
// import PopUpSliders from "./sliders/PopUpSliders";

const PopUp = ({openPopUp, setOpenPopUp}) => {

  const toggleAlert = () => {
    setOpenPopUp(!openPopUp);
  };

  useEffect(() => {
    setTimeout(setOpenPopUp(!openPopUp), 3000);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fade big>
      <div
        className={clsx(
          openPopUp && 'opacity-100 z-100',
          !openPopUp && 'hidden -z-10',
          'transition-all duration-500 fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-primary-lighter bg-opacity-95',
        )}
      >
        <Bounce>
          <div className="flex flex-col items-center justify-center">
            <div className="w-5/6 md:w-11/12 max-w-screen-lg relative">
              <button
                type="button"
                onClick={toggleAlert}
                className="group absolute z-100 -right-6 -top-6 transition duration-300 ease-in-out border border-primary-lighter hover:border-primary-light bg-white hover:bg-primary-light p-5 rounded-full shadow-lg outline-none focus:outline-none"
              >
                <svg
                  className="stroke-current text-primary-light group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g
                    id="Group"
                    transform="translate(1487.862 905.207) rotate(180)"
                  >
                    <line
                      id="Line_1"
                      data-name="Line 1"
                      x1="14"
                      y1="14"
                      transform="translate(1473.155 890.5)"
                      fill="none"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <line
                      id="Line_2"
                      data-name="Line 2"
                      y1="14"
                      x2="14"
                      transform="translate(1473.155 890.5)"
                      fill="none"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="relative border border-primary-lighter font-bold bg-white bg-opacity-95 overflow-y-scroll md:overflow-visible  w-5/6 md:w-11/12 max-w-screen-lg h-auto shadow-lg rounded-xl">
             {/* <PopUpSliders /> */}
              <div className="flex flex-col py-10 px-8 md:py-24 md:px-20">
                <p className="mb-5">
                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </p>
                <p className="mb-10">
                  ??????????????????????????????????????????9???26???????????????ESG????????????
                  ????????????
                  ???????????????????????????????????????????????????????????????????????????????????????????????????
                </p>
                <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbOUZ872nOkpltcF2CtnHBkDdmnrwfFladWJ6FMKmOi3MUpA/viewform"
              target="_blank"
              rel="noreferrer"
                  className="border-primary-lighter self-center group transition-all duration-500 pl-5 pr-4 py-1 border-6 bg-primary-medium cursor-pointer font-bold text-white hover:bg-primary-dark tracking-widest rounded-2xl outline-none focus:outline-none"
                >
                  <p>????????????</p>
                  <p>????????????</p>
                </a>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </Fade>
  );
};

export default PopUp;
