import React from "react";
import Fade from "react-reveal/Fade";
import ProcessAnimation from "../../components/animation/ProcessAnimation"
import ProcessAnimationMobile from "../../components/animation/ProcessAnimationMobile"
import sand1 from "../../assets/images/sands_01.png";
import sand2 from "../../assets/images/sands_02.png";
import sand3 from "../../assets/images/sands_03.png";
import bird from "../../assets/images/bird_4.png";
import footprints from "../../assets/images/footprints.png";
const Process = () => {
  return (
    
        <div className="flex flex-col items-center relative py-20 lg:pt-20 lg:pb-0">
          <div className="absolute w-full h-full">
              <div className="absolute right-0 -top-10 w-96">
                <img
                  className="w-full"
                  src={sand1}
                  alt="background sands"
                />
              </div>
              <div className="absolute right-0 bottom-52 w-96">
                <img
                  className="w-full"
                  src={sand2}
                  alt="background sands"
                />
              </div>
              <div className="absolute left-0 bottom-20 w-96">
                <img
                  className="w-full"
                  src={sand3}
                  alt="background sands"
                />
              </div>
              
          </div>
          <div className="articles w-11/12 max-w-screen-2xl relative flex flex-wrap ">
            <div className="col w-full flex flex-col ">
              <div className="article w-full md:w-1/2 px-3">
              <Fade bottom>
                <h2 className="inline-block py-2 px-4 bg-secondary-light text-primary-medium tracking-wider font-black text-xl rounded-xl">
                還海行動流程
                </h2>
                </Fade>
              </div>
              <div id="process_animation" className="hidden lg:flex items-center justify-center -mt-20 mb-20">
                <ProcessAnimation/>
              </div>
              <div id="process_animation" className="flex lg:hidden items-center justify-center -mt-18 mb-20">
                <ProcessAnimationMobile/>
              </div>
            </div>
          </div>


          <div className="relative">
          <Fade right>
              <div className="absolute left-28 md:left-60 lg:left-80 bottom-0 w-20">
                <img
                  className="w-full"
                  src={bird}
                  alt="background sands"
                />
              </div>
              </Fade>
              <Fade left>
              <div className="absolute bottom-24 right-10 sm:right-20 md:right-52 lg:right-72 xl:right-96 sm:bottom-0 w-40">
                <img
                  className="w-full"
                  src={footprints}
                  alt="background sands"
                />
              </div>
              </Fade>
          </div>
        </div>
        
      
  );
};

export default Process;
