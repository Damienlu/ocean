import Lottie from "lottie-react";
import birdAnimation from '../../assets/animation/bird_flying.json'

const BirdAnimation = () => {
    const style = {
        height: 150,
        width:160,
      };
      const interactivity = {
        mode: "scroll",
        actions: [
          {
            visibility: [0, 1.0],
            type: "loop",
            frames: [0, 100],
          },
        ],
      };

    return (<Lottie
        animationData={birdAnimation}
        style={style}
        interactivity={interactivity}
      />);
  };
   
  export default BirdAnimation;