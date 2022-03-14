import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import {gsap} from "gsap";

const Counters = ({countsData}) => {

  const [companyNum, setCompanyNum] = useState({ value: 0 });
  

  useEffect(() => {
    const target = {
      value: companyNum.value
    };
    gsap.to(target, {
      duration: 2,
      value: countsData.company,
      roundProps: "value",
      ease: "none",
      onUpdate() {
        setCompanyNum({ value: target.value });
      }
    });
  }, [countsData.company]); // eslint-disable-line react-hooks/exhaustive-deps

  const [cleanBeachNum, setCleanBeachNum] = useState({ value: 0 });

  useEffect(() => {
    const target = {
      value: cleanBeachNum.value
    };
    gsap.to(target, {
      duration: 2,
      value: countsData.cleanBeach,
      roundProps: "value",
      ease: "none",
      onUpdate() {
        setCleanBeachNum({ value: target.value });
      }
    });
  }, [countsData.cleanBeach]); // eslint-disable-line react-hooks/exhaustive-deps

  const [kgNum, setKgNum] = useState({ value: 0 });

  useEffect(() => {
    const target = {
      value: kgNum.value
    };
    gsap.to(target, {
      duration: 2,
      value: countsData.kg,
      roundProps: "value",
      ease: "none",
      onUpdate() {
        setKgNum({ value: target.value });
      }
    });
  }, [countsData.kg]); // eslint-disable-line react-hooks/exhaustive-deps

  const [bottlesNum, setBottlesNum] = useState({ value: 0 });

  useEffect(() => {
    const target = {
      value: bottlesNum.value
    };
    gsap.to(target, {
      duration: 2,
      value: countsData.bottles,
      roundProps: "value",
      ease: "none",
      onUpdate() {
        setBottlesNum({ value: target.value });
      }
    });
  }, [countsData.bottles]); // eslint-disable-line react-hooks/exhaustive-deps

  
  const [percentNum, setPercentNum] = useState({ value: 0 });

  useEffect(() => {
    const target = {
      value: percentNum.value
    };
    gsap.to(target, {
      duration: 2,
      value: countsData.percent,
      roundProps: "value",
      ease: "none",
      onUpdate() {
        setPercentNum({ value: target.value });
      }
    });
  }, [countsData.percent]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <Fade bottom>
    { cleanBeachNum.value > 0 &&
            <div className="counters w-full max-w-5xl flex justify-between flex-wrap">
              <div className="counter sm:w-1/3 md:w-1/5 w-1/2 flex flex-col items-center mb-5">
                <div className="counter-title font-medium text-center">
                  <h2>響應企業數</h2>
                </div>
                <div className="counter-numbers text-center">
                  <span className="number font-light text-7xl text-primary-light">
                    {companyNum.value}
                  </span>
                  <span className="unit text-sm"> 家</span>
                </div>
              </div>
              <div className="counter sm:w-1/3 md:w-1/5 w-1/2 flex flex-col items-center mb-5">
                <div className="counter-title font-medium text-center">
                  <h2>淨灘場數</h2>
                </div>
                <div className="counter-numbers text-center">
                  <span className="number font-light text-7xl text-primary-light">
                    {cleanBeachNum.value}
                  </span>
                  <span className="unit text-sm"> 場</span>
                </div>
              </div>
              <div className="counter sm:w-1/3 md:w-1/5 w-1/2 flex flex-col items-center mb-5">
                <div className="counter-title font-medium text-center">
                  <h2>海廢清除公斤數</h2>
                </div>
                <div className="counter-numbers text-center">
                  <span className="number font-light text-7xl text-primary-light">
                    {kgNum.value}
                  </span>
                  <span className="unit text-sm"> KG</span>
                </div>
              </div>
              <div className="counter w-1/2 sm:w-1/2 md:w-1/5  flex flex-col items-center mb-5">
                <div className="counter-title font-medium text-center">
                  <h2 className="whitespace-nowrap">寶特瓶數(海廢+回收)</h2>
                </div>
                <div className="counter-numbers text-center">
                  <span className="number font-light text-7xl text-primary-light">
                    {bottlesNum.value}
                  </span>
                  <span className="unit text-sm"> 個</span>
                </div>
              </div>
              <div className="counter sm:w-1/2 md:w-1/5 w-full flex flex-col items-center mb-5">
                <div className="counter-title font-medium text-center">
                  <h2>永續拖鞋</h2>
                </div>
                <div className="counter-numbers text-center">
                  <span className="number font-light text-7xl text-primary-light">
                  {percentNum.value}
                  </span>
                  <span className="unit text-sm"> 雙</span>
                </div>
              </div>
            </div>
            }
            </Fade>
  );
};

export default Counters;
