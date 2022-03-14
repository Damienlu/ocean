import Lottie from "lottie-react";
import processAnimation from '../../assets/animation/processAnimationMobile.json'
const ProcessAnimationMobile = () => {

      const interactivity = {
        mode: "scroll",
        container: "#process_animation",
        actions: [
          {
            visibility: [0,0.2],
            type: "stop",
            frames: [0, 0]
          },
          {
            visibility: [0.2, 0.7],
            type: "seek",
            frames: [0, 300]
          }
        ],
      };

    return (<Lottie
        animationData={processAnimation}
        interactivity={interactivity}
      />);
  };
   
  export default ProcessAnimationMobile;