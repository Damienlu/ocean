import Slider from "react-slick";
import React, { useState } from "react";
import clsx from "clsx";

function SamplePrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev group absolute z-40 right-0 sm:right-6 top-36 md:top-32 lg:top-32 xl:top-36 2xl:top-40 -translate-y-1/2 transform transition-all duration-500 outline-none focus:outline-none"
    >
      <svg
        className="fill-current text-primary-medium group-hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="40"
        viewBox="0 0 13.503 23.619"
      >
        <path
          id="Icon_ionic-ios-arrow-back"
          data-name="Icon ionic-ios-arrow-back"
          d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
          transform="translate(-11.25 -6.194)"
          stroke="#0097AB"
        />
      </svg>
    </button>
  );
}
function SampleNextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev group absolute z-40 left-0 sm:left-6 top-36 md:top-32 lg:top-32 xl:top-36 2xl:top-40 -translate-y-1/2 transform transition-all duration-500 outline-none focus:outline-none"
    >
      <svg
        className="fill-current text-primary-medium group-hover:text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="40"
        viewBox="0 0 13.503 23.619"
      >
        <path
          id="Icon_ionic-ios-arrow-back"
          data-name="Icon ionic-ios-arrow-back"
          d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
          transform="translate(-11.25 -6.194)"
          stroke="#0097AB"
        />
      </svg>
    </button>
  );
}

const Sliders = ({ topics, isBlue }) => {
  const [pages, setPages] = useState({ currentSlide: 0 });

  let settings = {
    className: "center",
    centerMode: true,
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: false,
        },
      },
    ],
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,

    beforeChange: (prev, next) => {
      setPages({ currentSlide: next });
    },
    customPaging: (i) => {
      return (
        <div
          className={`${
            i === pages.currentSlide
              ? "bg-primary-dark w-8"
              : "bg-primary-light"
          } h-2 mx-auto rounded-full transition-all duration-300 origin-center transform w-2 hover:bg-primary-dark`}
        ></div>
      );
    },
  };

  return (
    <>
      <div
        className={clsx(
          "py-10  bg-opacity-100 border-t-2 border-b-2 shadow-lg",
          !isBlue && "bg-secondary-light border-secondary-medium",
          isBlue && "bg-primary-bg border-primary-lighter"
        )}
      >
        <Slider {...settings}>
          {topics &&
            topics.map((item, i) => {
              return (
                <div
                  key={`id_${i}`}
                  className="px-3 sm:px-6 focus:outline-none"
                >
                 { item.ismedia === "1" ? 
                 <div className={clsx("block w-full h-72 md:h-60 lg:h-60 xl:h-72 2xl:h-80 overflow-hidden mb-3 cursor-pointer rounded-2xl")}>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${item.image}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div> : <a
                    className={clsx("block w-full h-72 md:h-60 lg:h-60 xl:h-72 2xl:h-80 overflow-hidden mb-3 cursor-pointer rounded-2xl")}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="rounded-2xl w-full h-full object-cover transform transition duration-1000 hover:scale-110 opacity-100 hover:opacity-90 cursor-pointer"
                      src={item.image}
                      alt={item.title}
                    /> 
                  </a>
                 }

                  
                  <div className="slider_text flex flex-col p-3">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <h2 className="text-xl font-black tracking-wide transition-colors duration-300 text-primary-medium mb-1 hover:text-primary-dark">
                        {item.title}
                      </h2>
                    </a>

                    {/* {item.contents &&
                      item.contents.map((content, i) => {
                        return (
                          <p
                            key={`content${i}`}
                            className="text-base tracking-wide font-medium"
                          >
                            {content}
                          </p>
                        );
                      })} */}

                    <p className="text-base tracking-wide font-medium">
                      {item.contents}
                    </p>
                    <a
                      className={clsx(
                        !isBlue && "border-secondary-medium",
                        isBlue && "border-primary-lighter",
                        "group self-end transition-all duration-500 pl-5 pr-1 py-1 hover:pl-5 hover:pr-4 border-6 bg-primary-medium cursor-pointer font-bold text-white hover:bg-primary-dark tracking-widest rounded-2xl my-5"
                      )}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      詳全文
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                        {" "}
                        {">"}{" "}
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default Sliders;
