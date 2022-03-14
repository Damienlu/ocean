import React, { useState } from "react";
import clsx from "clsx";
import Fade from "react-reveal/Fade";
import Titles from "../utils/Titles";
import ProductSliders from "../utils/sliders/ProductSliders";
import Cloud from "../animation/Cloud";
import bird from "../../assets/images/bird_6.png";
import flipflopLeft from "../../assets/images/flipflop_eyes_left.png";
import flipflopRight from "../../assets/images/flipflop_eyes_right.png";
const Support = ({ menuTitles, menuTitlesEng, supportData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAlert = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id={menuTitles[4]}
      className="section support pt-40 pb-40 overflow-hidden"
    >
      <Fade bottom>
        <div className="w-11/12 max-w-screen-2xl mx-auto px-3 lg:px-6 flex flex-col items-center ">
          <Titles menuTitles={menuTitles[4]} menuTitlesEng={menuTitlesEng[4]} />

          <div className="clouds relative">
            <Cloud />
            <Fade right>
              <div className="bird absolute right-10 md:right-52 -bottom-10 w-52">
                <img
                  className="w-full"
                  src={bird}
                  alt="Seagull is picking up the flipflops"
                />
              </div>
            </Fade>
          </div>
        </div>

        <div className="mx-auto 2xl:w-2/3 max-w-screen-lg w-5/6 mt-20 flex flex-row flex-wrap">
          <div className="support_sliders w-full h-full md:w-1/2 mb-3 md:mb-0">
            <ProductSliders supportData={supportData} />
          </div>
          <div className="support_description relative flex-1 flex flex-col md:ml-3 p-5 bg-white shadow-lg rounded-xl ">
            <div className="content mb-10">
              <h3 className="text-xl font-black tracking-wide text-primary-medium mb-2">
                GreenPlax® 台灣新國民拖鞋｜翻轉藍白拖 x 最酷環保鞋
              </h3>

              <p className="text-base tracking-wide font-medium">
                還海計畫獨家生產，2021年翻轉藍白拖、台灣最酷環保拖鞋，讓你穿出滿滿永續價值!
                銷售所得x%，將捐助所合作NGO組織並持續投入還海行動中。
              </p>
            </div>

            <a
              href="https://wild-taiwan.com/?utm_source=team&utm_medium=businesstoday&utm_campaign=01_website"
              target="_blank"
              rel="noreferrer"
              className="border-primary-lighter self-end group transition-all duration-500 pl-5 pr-1 py-1 hover:pl-5 hover:pr-4 border-6 bg-primary-medium cursor-pointer font-bold text-white hover:bg-primary-dark tracking-widest rounded-2xl outline-none focus:outline-none"
            >
              前往認購
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                {" "}
                {">"}{" "}
              </span>
            </a>

            <div className="support_flipflops absolute right-0 bottom-0">
              <div className="flipflop_left absolute right-28 -bottom-38 sm:-bottom-20 w-28">
                <img className="w-full" src={flipflopLeft} alt="flipflop" />
              </div>
              <div className="flipflop_right absolute right-2 -bottom-32 sm:-bottom-16 w-36">
                <img className="w-full" src={flipflopRight} alt="flipflop" />
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div
        className={clsx(
          isOpen && "opacity-100 z-100",
          !isOpen && "opacity-0 -z-10",
          "transition-all duration-500 flex fixed top-0 left-0 flex-col items-center justify-center w-full h-full bg-primary-lighter bg-opacity-95"
        )}
      >
        <div className="w-5/6 md:w-11/12 max-w-screen-lg relative">
          <button
            type="button"
            onClick={toggleAlert}
            className="group absolute -right-6 -top-6 transition duration-300 ease-in-out border border-primary-lighter hover:border-primary-light bg-white hover:bg-primary-light z-100 p-5 rounded-full shadow-lg outline-none focus:outline-none"
          >
            <svg
              className="stroke-current text-primary-light group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g id="Group" transform="translate(1487.862 905.207) rotate(180)">
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

        <div className="border border-primary-lighter font-bold bg-white bg-opacity-95 overflow-y-scroll md:overflow-visible flex flex-col md:flex-row w-5/6 md:w-11/12 max-w-screen-lg h-auto py-10 px-8 md:py-24 md:px-20 relative shadow-lg rounded-xl">
          尚未開放認購，有興趣的朋友，請於右方點擊加入粉絲團，以獲得最新資訊!
        </div>
      </div>
    </div>
  );
};

export default Support;
