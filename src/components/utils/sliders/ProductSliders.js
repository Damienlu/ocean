import Slider from "react-slick";
import React, { useState } from "react";


const ProductSliders = ({supportData}) => {
  const [pages, setPages] = useState({ currentSlide: 0 });


  let settings = {
    dots: true,
    arrows:false,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ],

    beforeChange: (prev, next) => {
      setPages({ currentSlide: next });
    },
    customPaging: (i) => {
      return (
           <div className="relative w-full h-full">
             <img className="block w-full h-full object-cover rounded-xl shadow-lg" src={`/topic/projectblue1095/images/abstract0${i+1}.jpg`} alt="123" />
             <div className={`${i === pages.currentSlide ? "opacity-0" : "opacity-50"} transition-all w-full h-full bg-black absolute top-0 left-0 rounded-xl`}></div>
           </div>
           
      );
    },
  };

  return (
    <>
      <div className="">
        <Slider {...settings} className="">
        {supportData && supportData.map((item, i)=>{
        return (
        
        <div key={`id_${i}`} className="item h-72 rounded-xl px-1">
        {item.ismedia ? <div className="block w-full h-full overflow-hidden rounded-xl outline-none focus:outline-none">
           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8eYV2-xlmSk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          : <a className="block w-full h-full overflow-hidden rounded-xl outline-none focus:outline-none" href={item.link}>
            <img className="block w-full h-full object-cover rounded-xl transform transition-all duration-1000 scale-100 hover:scale-110" src={`/topic/projectblue1095/images/abstract0${i+1}.jpg`} alt={item.title} />
          </a>}
        </div>)
        })}
        </Slider>
      </div>
    </>
  );
};

export default ProductSliders;
