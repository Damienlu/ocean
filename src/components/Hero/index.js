import React, { useEffect, useLayoutEffect } from "react";
import Fade from "react-reveal/Fade";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BirdAnimation from "../../components/animation/BirdAnimation";
import Counters from "../../components/animation/Counters";
import Typing from "../../components/animation/Typing"

import oceanLogo from "../../assets/images/kv/title.png";
// import oceanLogoMobile from "../../assets/images/ocean_logo_mb.svg";
import oceanWaves from "../../assets/images/ocean_waves.svg";
// import mountains from "../../assets/images/mountains.png";
import fish from "../../assets/images/kv/fish.png";
import stingray from "../../assets/images/kv/stingray.png";
import seagull1 from "../../assets/images/kv/seagull-1.png";
import seagull2 from "../../assets/images/kv/seagull-2.png";
import net from "../../assets/images/kv/net.png";
import ship from "../../assets/images/kv/ship.png";
import trashOutside from "../../assets/images/kv/trash-outside.png";
import trashInside from "../../assets/images/kv/trash-inside.png";
import flipflopLeft from "../../assets/images/flipflop_left.png";
import flipflopRight from "../../assets/images/flipflop_right.png";
import printLeft from "../../assets/images/print_left.png";
import printRight from "../../assets/images/print_right.png";
import bird1 from "../../assets/images/bird_1.png";

let tl1 = gsap.timeline();
let tl2 = gsap.timeline();

const netAnimation = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".fish",
      start: "top center",
      end: "top 5%",
      scrub: true,
    },
    default: {
      opacity: 0,
      scale: 1.2,
    }
  }).from(
    ".net_catch",
    {
      opacity: 0,
      scale: 1.2,
      duration: 1,
      ease: 'expo',
    }
  )
  .to(
    ".net_catch",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    }
  )
  .to(
    ".net_catch",
    {
      scale: 0.2,
      opacity: 1,
      duration: 4,
    }
  )
  .to(
    ".net_catch",
    {
      scale: 0.2,
      opacity: 0,
      duration: 1,
    }
  )
}

const trashAnimation = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".fish",
      start: "top center",
      end: "top 5%",
      scrub: true,
    },
    default: {
      opacity: 1,
      scale: 1,
    }
  }).from(
    ".trash_catch",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    }
  )
  .to(
    ".trash_catch",
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    }
  )
  .to(
    ".trash_catch",
    {
      scale: 0.2,
      opacity: 1,
      duration: 4,
    }
  )
  .to(
    ".trash_catch",
    {
      scale: 0.2,
      opacity: 0,
      duration: 1,
    }
  )
}

const stingrayAnimation = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".fish",
      start: "top center",
      end: "top 5%",
      scrub: true,
    },
    default: {
      opacity: 0,
      rotation: -10,
      xPercent: 50,
      yPercent: 150,
    }
  }).from(
    ".stingray",
    {
      opacity: 0,
      rotation: -10,
      xPercent: 50,
      yPercent: 150,
      duration: 1,
      ease: "power0",
    }
  )
  .to(
    ".stingray",
    {
      opacity: 0,
      rotation: -10,
      xPercent: -50,
      yPercent: -150,
      duration: 1,
      ease: "power0",
    }
  )
}

const scrollAnimation = () => {
  tl1.from(".hero .scroll", {
    duration: 1,
    delay: 4,
    y: -50,
    opacity: 0,
    ease: "bounce",
  }, "-=1")
}

const flipflopAnimation = () => {
  tl2.to(".elements .print_left_4", {
    duration: 1,
    opacity: 1,
    delay: 2,
    ease: "power4",
  })
  .to(".elements .print_right_4", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .to(".elements .print_left_3", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .to(".elements .print_right_3", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .to(".elements .print_left_2", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .to(".elements .print_right_2", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .to(".elements .print_left_1", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .to(".elements .print_right_1", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .to(".elements .flipflop_left", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .to(".elements .flipflop_right", {
    duration: 1,
    opacity: 1,
    ease: "power4",
  })
  .from(".elements .bird_1", {
    duration: 1,
    x:500,
    opacity: 0,
    ease: "back",
  }, "-=1")
};

const Hero = ({countsData}) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    flipflopAnimation();
    scrollAnimation();
    netAnimation();
    trashAnimation();
    stingrayAnimation();
  }, []);
  
  return (
    <div className="hero w-full h-auto flex flex-col items-center mb-48">
          <div className="sky relative w-full flex flex-col items-center pt-32 overflow-hidden">
            <Fade bottom>
            <div className="title w-5/6 max-w-lg mb-10">
              <h1 className="hidden">
                還海行動1095 還海一片湛藍之海廢再生計畫
              </h1>
              <img
                src={oceanLogo}
                className="sm:block hidden w-full h-full"
                alt="還海行動1095 還海一片湛藍之海廢再生計畫 logo"
              />
              <img
                src={oceanLogo}
                className="sm:hidden block w-full h-full"
                alt="還海行動1095 還海一片湛藍之海廢再生計畫 logo"
              />
            </div>
            </Fade>
            {/* <div className="bird_flying absolute">
              <BirdAnimation />
            </div> */}
            <Counters countsData={countsData}/>
            <div className="fish relative mb-20 md:mb-80">
              <img className="fish_around" src={fish} alt="fish" />
              {/* <div className="ship absolute"> */}
              <div className="ship ship_waves absolute">
                <img src={ship} alt="ship" />
                <img className="net_catch absolute w-full inset-0" src={net} alt="net" />
                <img className="trash_catch absolute w-full inset-0" src={trashInside} alt="trashInside" />
                <img className="absolute w-full inset-0" src={trashOutside} alt="trashOutside" />
              </div>
            </div>
            <img className="stingray absolute hidden md:block" src={stingray} alt="stingray" />
            <img className="seagull1 absolute" src={seagull1} alt="seagull1" />
            <img className="seagull2 absolute hidden md:block" src={seagull2} alt="seagull2" />
            {/* 
              <div className="mountain absolute bottom-0 w-full flex items-end">
                <img
                  className="w-full object-cover"
                  src={mountains}
                  alt="Mountains"
                />
              </div>
            */}
            <a
              href="#計畫背景"
              className="animate-bounce group scroll transition ease-in-out duration-300 font-black hover:text-primary-medium text-sm flex items-center justify-center w-11/12 max-w-xs absolute bottom-40 left-0 right-0 mx-auto"
            >
              <p className="tracking-wider">SCROLL</p>
              <div className="relative border-2 border-black transition ease-in-out duration-300 group-hover:border-primary-medium px-3 py-5 rounded-full bg-white bg-opacity-75 mx-3">
                <span className="mouse absolute top-1 left-1/2 transform px-1 py-2 rounded-full transition ease-in-out duration-300 group-hover:bg-primary-medium bg-black"></span>
              </div>
              <p className="tracking-wider">DOWN</p>
            </a>
          </div>

          <div className="ocean relative w-full h-2/5 overflow-hidden">
            <div className="ocean_waves w-full h-full">
              <img
                className="h-full sm:w-full object-cover"
                src={oceanWaves}
                alt="ocean waves"
              />
            </div>

            <Fade bottom>
            <div className="board absolute left-0 right-0 mx-auto text-center mb-20">
            <Typing/>
            </div>
            </Fade>
          </div>

          <div className="elements relative">
            <div className="flipflop_left opacity-0">
              <img
                className="w-full h-full object-fit"
                src={flipflopLeft}
                alt="print left"
              />
            </div>
            <div className="flipflop_right opacity-0">
              <img
                className="w-full h-full object-fit"
                src={flipflopRight}
                alt="print right"
              />
            </div>
            <div className="print_left_1 opacity-0">
              <img
                className="w-full h-full object-fit"
                src={printLeft}
                alt="print left"
              />
            </div>
            <div className="print_right_1 opacity-0">
              <img
                className="w-full h-full object-fit"
                src={printRight}
                alt="print right"
              />
            </div>
            <div className="print_left_2 opacity-0">
              <img
                className="w-full h-full object-fit"
                src={printLeft}
                alt="print left"
              />
            </div>
            <div className="print_right_2 opacity-0">
              <img
                className="w-full h-full object-fit"
                src={printRight}
                alt="print right"
              />
            </div>
            <div className="print_left_3 opacity-0">
              <img
                className="w-full h-full object-fit"
                src={printLeft}
                alt="print left"
              />
            </div>
            <div className="print_right_3 opacity-0">
              <img
                className="w-full h-full object-fit"
                src={printRight}
                alt="print right"
              />
            </div>
            <div className="print_left_4 opacity-0">
              <img
                className="w-full h-full object-fit"
                src={printLeft}
                alt="print left"
              />
            </div>
            <div className="print_right_4 opacity-0">
              <img
                className="w-full h-full object-fit"
                src={printRight}
                alt="print right"
              />
            </div>
            
            <div className="bird_1">
              <img
                className="w-full h-full object-fit"
                src={bird1}
                alt="print right"
              />
            </div>
            
          </div>
        </div>
  );
};

export default Hero;
