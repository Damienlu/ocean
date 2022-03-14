import React, { useRef } from "react";
import gsap from "gsap";
import Fade from "react-reveal/Fade";
import clsx from "clsx";
import clouds from "../../assets/images/cloud_lg.svg";



const Cloud = ({isCloudLeft}) => {
  let cloud = useRef(null);
  let cloud2 = useRef(null);

  function move(item, x, y) {
    gsap.to(item, {
        scale: 1.1,
        x: -x/15,
        y: y/20,
    });
  }

  function move2(item, x, y) {
    gsap.to(item, {
        scale: 1.1,
        x: x/20,
        y: y/20,
    });
  }

  function back(item) {
    gsap.to(item, {
      scale: 1.2,
      x:-50,
    });
  }

  function back2(item) {
    gsap.to(item, {
      scale: 1.2,
    });
  }


  return (
    <>
      <div className="w-96 h-60 absolute -top-40 -left-48"
        onMouseMove={({ clientX: x, clientY: y }) => {move(cloud, x, y); move2(cloud2, x,y)}}
        onMouseLeave={() => {back(cloud); back2(cloud2)}}
      >
        <Fade right>
        <div className={clsx("cloud absolute top-0 w-20", !isCloudLeft && "right-0", isCloudLeft && "left-10")}> 
          <img className="w-full" ref={(el) => (cloud = el)} src={clouds} alt="Clouds" />
        </div>
        </Fade>
        <Fade left>
        <div className={clsx("cloud absolute top-20 w-32", !isCloudLeft && "-right-10", isCloudLeft && "-left-32")}> 
          <img className="w-full" ref={(el) => (cloud2 = el)} src={clouds} alt="Clouds" />
        </div>
        </Fade>
      </div>
    </>
  );
};

export default Cloud;
