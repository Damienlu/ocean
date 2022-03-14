import Lottie from "lottie-react";
import EsgAnimation from '../../assets/animation/EsgAnimation.json'
const ESGAnimation = () => {

      const interactivity = {
        mode: "scroll",
        container: "#esg_image",
        actions: [
          {
            visibility: [0, 0.1],
            type: "stop",
            frames: [0, 1]
          },
          {
            visibility: [0.1, 0.3],
            type: "seek",
            frames: [1, 149]
          },
          {
            visibility: [0.3, 1],
            type: "loop",
            frames: [150, 300]
          }
        ],
      };

    return (<Lottie
        animationData={EsgAnimation}
        interactivity={interactivity}
      />);
  };
   
  export default ESGAnimation;