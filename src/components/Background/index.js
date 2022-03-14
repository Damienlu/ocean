import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Titles from "../utils/Titles";
import DonutChart from "../utils/DonutChart";
import ESGAnimation from "../animation/ESGAnimation";

import trashImage from "../../assets/images/trash.png";
import bottles from "../../assets/images/bottles.png";

const trashAnimation = () => {
  gsap.fromTo(
    ".trashes",
    {
      opacity: 0,
      y: "-2500px",
    },
    {
      opacity: 1,
      y: "-400px",
      duration: 10,
      ease: "back",

      scrollTrigger: {
        trigger: ".background",
        start: "top center",
        end: "10%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".trashes_mobile",
    {
      opacity: 0,
      y: "-2500px",
    },
    {
      opacity: 1,
      y: "-100px",
      duration: 10,
      ease: "back",

      scrollTrigger: {
        trigger: ".background",
        start: "top center",
        end: "10%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".bottles",
    {
      opacity: 0,
      scale: 0,
      ease: "power4",
    },
    {
      opacity: 1,
      scale: 1.5,
      ease: "power4",

      scrollTrigger: {
        trigger: ".background",
        start: "top center",
        end: "10%",
        scrub: true,
      },
    }
  );
};
const Background = ({ menuTitles, menuTitlesEng }) => {
  gsap.registerPlugin(ScrollTrigger);
  const isDark = true;

  useEffect(() => {
    trashAnimation();
  });

  return (
    <>
      <Fade bottom>
        <div
          id={menuTitles[2]}
          className="gap section background pt-20 lg:pt-52"
        >
          <div
            id="esg_image"
            className="relative w-11/12 max-w-screen-2xl mx-auto flex flex-col items-center"
          >
            <Fade bottom>
              <Titles
                menuTitles={menuTitles[2]}
                menuTitlesEng={menuTitlesEng[2]}
                isDark={isDark}
              />
            </Fade>

            <div className="hidden lg:block trashes lg:absolute top-0 left-20">
              <img className="w-full" src={trashImage} alt="trash" />
              <img
                className="bottles w-full absolute top-80 left-0"
                src={bottles}
                alt="bottles"
              />
            </div>

            <div className="trashes_mobile block lg:hidden">
              <img className="w-full" src={trashImage} alt="trash" />
              <img
                className="bottles w-full absolute top-80 left-0"
                src={bottles}
                alt="bottles"
              />
            </div>

            <Fade bottom>
              <div className="articles relative flex flex-wrap w-full pt-0 lg:pt-20">
                <div className="col w-full lg:w-1/2 flex flex-col items-center justify-end mb-20 lg:mb-40">
                  <div className="article px-3">
                    <h2 className="inline-block py-2 px-4 bg-secondary-light text-primary-medium tracking-wider font-black text-xl rounded-xl mb-3">
                      打造海廢循環經濟
                    </h2>
                    <p className="font-medium text-lg tracking-wide">
                      寶特瓶一直佔台灣廢棄物的大宗，其中有不少來自境外，為了更妥善再利用這些海廢寶特瓶，今周刊《ESG永續台灣》發動《還海行動1095》，號召企業、ＮＧＯ組織及Ｂ型企業，進行淨灘，收集海洋廢棄物，並與環保鞋專家「馳綠22製夢所」合作，落實循環經濟，為海廢創造新價值。
                    </p>
                  </div>
                </div>

                <div className="col w-full lg:w-1/2 flex flex-col justify-between mb-20 lg:mb-40 order-first lg:order-none">
                  <div className="article px-3 mb-20">
                    <h2 className="inline-block py-2 px-4 bg-secondary-light text-primary-medium tracking-wider font-black text-xl rounded-xl mb-3">
                      台灣的海 永續全新課題
                    </h2>
                    <p className="font-medium text-lg tracking-wide">
                      台灣的海，需要大掃除。根據海保署統計，2017至2020的四年中，全國一共清出167萬件海洋廢棄物。其中，寶特瓶比例最高，佔了18.7%、漁業廢棄物11.8%、塑膠瓶蓋10.9%、菸蒂7.5%、吸管7.1%。
                    </p>
                  </div>

                  <div className="chart">
                    <DonutChart />
                  </div>
                </div>

                <div className="col w-full flex flex-col items-center">
                  <div className="article w-full lg:w-1/2 px-3 mb-20">
                    <h2 className="inline-block py-2 px-4 bg-secondary-light text-primary-medium tracking-wider font-black text-xl rounded-xl mb-3">
                      找回經濟社會與環境新平衡
                    </h2>
                    <p className="font-medium text-lg tracking-wide">
                    《還海行動1095》更希望擴大企業參與，讓ESG精神，能真正透過海廢回收再利用，落實在大家的生活上，進而減少經濟活動對環境、社會及氣候的衝擊；同時，強化台灣社會對於垃圾減量的重視，讓一片湛藍，重回環抱台灣的大海。
                    </p>
                  </div>

                  <div className="self-end transform scale-150 -translate-x-9 translate-y-0 sm:translate-x-0 sm:translate-y-0 sm:scale-100">
                    <ESGAnimation />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
      <div className="gap_blue pt-10 sm:pt-0"></div>
    </>
  );
};

export default Background;
