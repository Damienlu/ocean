import React from "react";
import Typewriter from "typewriter-effect";

const Typing = ({ isCloudLeft }) => {
  return (
    <>
      <div className="font-medium">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString(
                "我們想號召一個幫海洋大掃除的「還海行動」<br/>1095天讓海洋廢棄物，變身為「新國民藍白拖」<br/>還給台灣一片乾淨的海　全民淨灘，2021率先啟動!"
              )
              .start();
          }}
        />
      </div>
    </>
  );
};

export default Typing;
