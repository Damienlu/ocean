import clsx from "clsx";
import React, { useState, useEffect } from "react";

const GoTop = ({ setOpenPopUp }) => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 200 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const scrollToSupport = () => {
  //   window.location.hash = "";
  //   window.location.hash = "#認購專區";
  // };

  return (
    <>
      {/* <button
        onClick={scrollToSupport}
        className={clsx(top && "hidden opacity-0"
         ,"group fixed z-40 right-0 bottom-52 py-6 hover:pr-6 px-5 flex flex-col items-center border-2 border-r-0 border-white shadow-lg transition-all duration-300 ease-in-out bg-primary-light hover:bg-primary-medium rounded-tl-3xl rounded-bl-3xl outline-none focus:outline-none")}
      >
        <div className="btn_text font-black text-white text-sm tracking-wider mb-3">
          <p>
            我要<br/>認購
          </p>
        </div>

        <div className="btn_icon ">
          <svg
            className="stroke-current text-white transform duration-500 w-10 h-10 rotate-0 group-hover:-rotate-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.687 37"
          >
            <path
              id="Icon_awesome-hand-pointer"
              data-name="Icon awesome-hand-pointer"
              d="M31.5,16.875v6.75a2.811,2.811,0,0,1-.075.644l-2.25,9.563A2.813,2.813,0,0,1,26.438,36H11.813a2.813,2.813,0,0,1-2.275-1.158l-9-12.375a2.812,2.812,0,1,1,4.549-3.308l2.225,3.06V2.813a2.813,2.813,0,0,1,5.625,0V16.875H13.5V14.063a2.813,2.813,0,0,1,5.625,0v2.813h.563V15.188a2.813,2.813,0,0,1,5.625,0v1.688h.563a2.813,2.813,0,0,1,5.625,0ZM13.5,22.5h-.562v6.75H13.5Zm6.188,0h-.562v6.75h.563Zm6.188,0h-.562v6.75h.563Z"
              transform="translate(0.687 0.5)"
              fill="none"
              stroke="#fcfcfc"
              strokeWidth="1"
            />
          </svg>
        </div>
      </button> */}

      {/* <a
        href="https://crowd-funding.typeform.com/to/dFT1tIY4?utm_source=esg&utm_medium=website&utm_campaign=main_website"
        target="_blank"
        rel="noreferrer"
        className={clsx(
          top && "hidden opacity-0",
          "group fixed z-40 right-0 bottom-68 pt-5 pb-3 w-16 hover:w-18 flex flex-col items-center border-2 border-r-0 border-white shadow-lg transition-all duration-300 ease-in-out bg-opacity-75 bg-primary-medium hover:bg-primary-dark rounded-tl-3xl rounded-bl-3xl outline-none focus:outline-none"
        )}
      >
        <div className="btn_text font-black text-white text-sm mb-1 flex flex-col items-center">
          <p className="join">還海行動調查</p>
        </div> */}

      {/* <div className="btn_icon ">
          <svg
            className="fill-current text-white transform duration-500 w-4 h-4 rotate-0 group-hover:-rotate-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35.998 35.999"
          >
            <path
              id="Icon_awesome-pencil-alt"
              data-name="Icon awesome-pencil-alt"
              d="M35.009,9.991l-3.241,3.241a.845.845,0,0,1-1.2,0l-7.8-7.8a.845.845,0,0,1,0-1.2L26.009.991a3.382,3.382,0,0,1,4.774,0l4.226,4.226A3.37,3.37,0,0,1,35.009,9.991ZM19.983,7.017,1.519,25.481.028,34.024a1.69,1.69,0,0,0,1.955,1.955l8.543-1.5L28.99,16.017a.845.845,0,0,0,0-1.2l-7.8-7.8a.853.853,0,0,0-1.2,0ZM8.726,23.9a.98.98,0,0,1,0-1.392L19.554,11.679a.984.984,0,0,1,1.392,1.392L10.118,23.9a.98.98,0,0,1-1.392,0ZM6.188,29.813H9.563v2.552l-4.535.795L2.841,30.973l.795-4.535H6.188Z"
              transform="translate(-0.002 -0.005)"
            />
          </svg>
        </div> */}
      {/* </a> */}

      {/* <button
        type="button"
        onClick={() => setOpenPopUp(true)}
        className={clsx(
          top && 'hidden opacity-0',
          'group fixed z-40 right-0 bottom-28 pt-5 pb-3 w-16 hover:w-18 flex flex-col items-center border-2 border-r-0 border-white shadow-lg transition-all duration-300 ease-in-out bg-opacity-75 bg-primary-medium hover:bg-primary-dark rounded-tl-3xl rounded-bl-3xl outline-none focus:outline-none',
        )}
      >
        <div className="btn_text font-black text-white text-sm mb-1 flex flex-col items-center">
          <p className="text-base">9</p>
          <p className="text-xs transform rotate-12 scale-150">/</p>
          <p className="text-base mb-1">26</p>
          <p className="join">搶先報名</p>
        </div>

        <div className="btn_icon ">
          <svg
                    className="transform duration-500 w-10 h-10 rotate-0 group-hover:-rotate-12"
            id="icon_fb"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <g id="icon_fb" transform="translate(-1508 -22)">
                      <path
                        id="Icon_social-facebook"
                        data-name="Icon social-facebook"
                        d="M13.257,8.21V5.291h2.355V3.822a3.842,3.842,0,0,1,1.032-2.706A3.282,3.282,0,0,1,19.143,0h2.339V2.92H19.143a.515.515,0,0,0-.412.252,1.024,1.024,0,0,0-.183.619v1.5h2.935V8.21H18.547v7.079H15.612V8.21Z"
                        transform="translate(1505.63 29.355)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
        </div>
      </button> */}

      <a
        href="https://www.facebook.com/ProjectBlue1095"
        target="_blank"
        rel="noreferrer"
        className={clsx(
          top && 'hidden opacity-0',
          'group fixed z-40 right-0 bottom-28 pt-5 pb-3 w-16 hover:w-18 flex flex-col items-center border-2 border-r-0 border-white shadow-lg transition-all duration-300 ease-in-out bg-opacity-75 bg-primary-medium hover:bg-primary-dark rounded-tl-3xl rounded-bl-3xl outline-none focus:outline-none',
        )}
      >
        <div className="btn_text font-black text-white text-sm mb-1 flex flex-col items-center">
          
          <p className="join">追蹤粉絲團</p>
        </div>

        <div className="btn_icon ">
          <svg
                    className="transform duration-500 w-10 h-10 rotate-0 group-hover:-rotate-12"
            id="icon_fb"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <g id="icon_fb" transform="translate(-1508 -22)">
                      <path
                        id="Icon_social-facebook"
                        data-name="Icon social-facebook"
                        d="M13.257,8.21V5.291h2.355V3.822a3.842,3.842,0,0,1,1.032-2.706A3.282,3.282,0,0,1,19.143,0h2.339V2.92H19.143a.515.515,0,0,0-.412.252,1.024,1.024,0,0,0-.183.619v1.5h2.935V8.21H18.547v7.079H15.612V8.21Z"
                        transform="translate(1505.63 29.355)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
        </div>
      </a>

      <button
        onClick={scrollToTop}
        type="button"
        className={`${
          top && 'hidden opacity-0'
        } group fixed z-40 right-0 bottom-6 py-6 w-16 hover:w-18 flex flex-col items-center bg-white shadow-lg transition-all duration-500 ease-in-out bg-opacity-25 hover:bg-primary-light border-r-0 border-2 border-primary-light hover:border-white  rounded-bl-3xl rounded-tl-3xl outline-none focus:outline-none`}
      >
        <div className="btn_icon">
          <svg
            className="stroke-current text-primary-light group-hover:text-white transform  rotate-90 duration-500 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.213 25.213"
          >
            <g
              id="Icon_feather-arrow-down-right"
              data-name="Icon feather-arrow-down-right"
              transform="translate(38.063 12.607) rotate(135)"
            >
              <path
                id="Path_69"
                data-name="Path 69"
                d="M10.5,10.5l15,15"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                id="Path_70"
                data-name="Path 70"
                d="M25.5,10.5v15h-15"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </button>
    </>
  );
};

export default GoTop;
