import Slider from "react-slick";
import React, { useState } from "react";
import clsx from "clsx";

function SamplePrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="prev group absolute z-40 right-0 sm:right-6 top-1/2 -translate-y-1/2 transform transition-all duration-500 outline-none focus:outline-none"
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
      className="prev group absolute z-40 left-0 sm:left-6 top-1/2 transform -translate-y-1/2 transition-all duration-500 outline-none focus:outline-none"
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

const VideoSliders = ({ topics, isBlue }) => {
  const [pages, setPages] = useState({ currentSlide: 0 });

  let settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    initialSlide: 0,
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
    <div>
        <Slider {...settings}>
          {topics &&
            topics.map((item, i) => {
              return (
                <div
                  key={`id_${i}`}
                  className="relative px-3 sm:px-6 focus:outline-none pt-7"
                >
                 <div className={clsx("shadow-lg block aspect-w-16 aspect-h-9 overflow-hidden cursor-pointer rounded-2xl")}>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.videoID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              );
            })}
        </Slider>
    </div>
  );
};

export default VideoSliders;
