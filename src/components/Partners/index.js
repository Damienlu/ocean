import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import clsx from "clsx";

// import Titles from "../utils/Titles";
import Cloud from "../animation/Cloud";
import bird from "../../assets/images/bird_5.png";
const Partners = ({
  menuTitles,
  menuTitlesEng,
  partnersData,
  partnersCompanyData,
}) => {
  const isCloudLeft = true;
  const [isOpen, setIsOpen] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [partner, setPartner] = useState({});
  const [partners, setPartners] = useState(partnersData);

  const toggleCompany = () => {
    setIsCompany(!isCompany);
    if (!isCompany) {
      setPartners(partnersCompanyData);
    } else {
      setPartners(partnersData);
    }
  };

  const toggleIntro = (partner) => {
    if (partner.isReady) {
      setIsOpen(!isOpen);
      setPartner(partner);
    }
  };

  const closeIntro = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="gap_yellow"></div>

      <div
        id={menuTitles[3]}
        className="section partners pt-40 pb-40 overflow-hidden"
      >
        <Fade bottom>
          <div className="relative w-11/12 max-w-screen-2xl mx-auto px-0 lg:px-6 flex flex-col items-center ">
            <div className="clouds relative">
              <Cloud isCloudLeft={isCloudLeft} />
              <Fade right>
                <div className="bird absolute left-20 sm:left-40 -bottom-10 w-52">
                  <img
                    className="w-full"
                    src={bird}
                    alt="Seagull is picking up the flipflops"
                  />
                </div>
              </Fade>
            </div>
            <Fade bottom>
              <div className="title flex flex-col items-center">
                <div className="mb-1">
                  <svg
                    className={clsx(
                      "stroke-current fill-current text-primary-light"
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.001"
                    height="6"
                    viewBox="0 0 41.001 6"
                  >
                    <g
                      id="Group_67"
                      data-name="Group 67"
                      transform="translate(-2832.929 -2032.016)"
                    >
                      <g
                        id="Group_64"
                        data-name="Group 64"
                        transform="translate(2833.43 2032.516)"
                      >
                        <path
                          id="Path_151"
                          data-name="Path 151"
                          d="M2869.8,2034.532a10.015,10.015,0,0,1-5.418-1.653,9.4,9.4,0,0,1-5.317,1.653,9.179,9.179,0,0,0-10.509,0,9.066,9.066,0,0,0-11.4,0c-4.723,0-5.212,2.983,0,2.983a9.037,9.037,0,0,1,11.381,0,9.058,9.058,0,0,1,10.433,0,9.723,9.723,0,0,0,5.418-1.653,10.017,10.017,0,0,0,5.418,1.653C2874.638,2037.516,2874.638,2034.532,2869.8,2034.532Z"
                          transform="translate(-2833.43 -2032.516)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="tracking-widest text-sm mb-2 font-black text-primary-light">
                  {menuTitlesEng[3]}
                </span>
                <div className="title_group flex">
                  <h2
                    className={clsx(
                      !isCompany && "text-primary-dark",
                      "tracking-widest text-2xl"
                    )}
                  >
                    {menuTitles[3]}
                  </h2>
                  <button
                    onClick={toggleCompany}
                    className={clsx(
                      "group transition-all ease-in-out duration-100 shadow-inner  hover:bg-primary-dark relative bg-primary-medium px-6 xs:px-7 py-1 rounded-full mx-1 xs:mx-5 outline-none focus:outline-none"
                    )}
                  >
                    <div
                      className={clsx(
                        !isCompany &&
                          "left-1 right-auto active:px-4 xs:active:px-6",
                        isCompany &&
                          "right-1 left-auto active:px-4 xs:active:px-6",
                        " transition-all ease-in-out duration-100 absolute top-1 py-3 px-3 rounded-full bg-white z-40"
                      )}
                    ></div>
                  </button>
                  <h2
                    className={clsx(
                      isCompany && "text-primary-dark",
                      "tracking-widest text-2xl"
                    )}
                  >
                    社企夥伴
                  </h2>
                </div>
              </div>
            </Fade>

            <div className="partner_logos 2xl:w-5/6 w-full relative mt-20 flex flex-row flex-wrap justify-center items-center">
              {partners &&
                partners.map((partner, i) => {
                  return (
                    <button
                      onClick={() => toggleIntro(partner)}
                      key={i + 1}
                      className="partner_logo group w-1/2 md:w-1/4 p-3 sm:p-5 flex items-center justify-center focus:outline-none outline-none"
                    >
                      <div className="aspect-w-1 aspect-h-1 w-full flex items-center justify-center group-hover:bg-secondary-light bg-white rounded-full shadow-lg transition-colors duration-200">
                        <div className="flex items-center justify-center">
                          <img
                            className="w-2/3"
                            src={partner.logo}
                            alt="partners logo"
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        </Fade>

        <div
          className={clsx(
            isOpen && "opacity-100 z-100",
            !isOpen && "opacity-0 -z-10",
            "transition-all duration-500 flex  fixed top-0 left-0 flex-col items-center justify-center w-full h-full bg-primary-lighter bg-opacity-95"
          )}
        >
          <div className="w-5/6 md:w-11/12 max-w-screen-lg relative">
            <button
              type="button"
              onClick={closeIntro}
              className="group absolute -right-6 -top-6 transition duration-300 ease-in-out border border-primary-lighter hover:border-primary-light bg-white hover:bg-primary-light z-100 p-5 rounded-full shadow-lg outline-none focus:outline-none"
            >
              <svg
                className="stroke-current text-primary-light group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <g
                  id="Group"
                  transform="translate(1487.862 905.207) rotate(180)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x1="14"
                    y1="14"
                    transform="translate(1473.155 890.5)"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    y1="14"
                    x2="14"
                    transform="translate(1473.155 890.5)"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </button>
          </div>

          <div className="border border-primary-lighter bg-white bg-opacity-95 overflow-y-auto max-h-modal w-5/6 md:w-11/12 max-w-screen-lg h-5/6 md:h-auto relative shadow-lg rounded-xl">
            <div className="flex flex-col md:flex-row py-10 px-8 md:py-24 md:px-20 relative">
              <div className="partners_intro w-full md:w-1/2 md:pr-10">
                <div
                  className={clsx(
                    isCompany && "mb-10 md:mb-0",
                    !isCompany && "mb-10",
                    "w-full"
                  )}
                >
                  <img
                    className="w-full h-full object-cover"
                    style={{maxHeight:'330px'}}
                    src={partner.image}
                    alt="partners CSR"
                  />
                </div>
                <div
                  className={clsx(
                    isCompany && "hidden",
                    "introduction mb-10 md:mb-0"
                  )}
                >
                  <h4
                    className={clsx(
                      "rounded-xl text-sm font-bold bg-primary-lighter inline-block px-4 py-1 mb-2 md:mb-4"
                    )}
                  >
                    {partner.title}
                  </h4>
                  {partner.intro &&
                    partner.intro.map((content, i) => {
                      return (
                        <p
                          key={`content${i}`}
                          className="text-sm font-medium mb-3"
                        >
                          {content}
                        </p>
                      );
                    })}
                </div>
              </div>
              <div className="declaration w-full md:w-1/2 flex flex-col justify-between pl-0 md:pl-10 border-none md:border-l border-primary-light">
                <div
                  className={clsx(isCompany && "mb-10", "declaration_text mb-10")}
                >
                  <h3
                    className={clsx(
                      isCompany && "hidden",
                      "text-primary-medium font-black text-xl mb-4"
                    )}
                  >
                    夥伴永續宣言
                  </h3>

                  <h4
                    className={clsx(
                      !isCompany && "hidden",
                      "rounded-xl text-sm font-bold bg-primary-lighter inline-block px-4 py-1 mb-2 md:mb-4"
                    )}
                  >
                    {partner.title}
                  </h4>

                  {partner.declaration &&
                    partner.declaration.map((content, i) => {
                      return (
                        <p
                          key={`content${i}`}
                          className="text-base font-medium mb-3"
                        >
                          {content}
                        </p>
                      );
                    })}
                </div>
            </div>

              {/* <a
                className={clsx(isCompany && "hidden", "border-primary-lighter self-end group  transition-all duration-500 pl-5 pr-1 py-1 hover:pl-5 hover:pr-4 border-6 bg-primary-medium cursor-pointer font-bold text-white hover:bg-primary-dark tracking-widest rounded-2xl")}
                href={partner.link}
                target="_blank"
                rel="noreferrer"
                onClick={toggleIntro}
              >
                前往夥伴還海日記
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {" "}
                  {">"}{" "}
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
