import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Fade from "react-reveal/Fade";

const Header = ({ menuTitles }) => {
  const [menuState, setMenuState] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 130 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <Fade top>
      <header className={"sticky top-0 left-0 z-50 "}>
        <div className="absolute left-0 right-0 mx-auto">
          <div className="max-w-screen-2xl mx-auto">
            <div
              className={clsx(
                "flex justify-between items-center space-x-5 bg-primary-medium transition duration-300 ease-in-out bg-opacity-0 rounded-br-3xl rounded-bl-3xl",
                !top && "bg-opacity-100 lg:shadow-md"
              )}
            >
              <div className="logos z-50 flex justify-between items-center space-x-2 sm:space-x-5 py-5 px-3 lg:px-6 rounded-br-3xl rounded-bl-3xl shadow-lg bg-white">
                <a
                  href="https://www.businesstoday.com.tw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">今周刊 Logo</span>
                  <svg
                    className="fill-current text-primary-medium transform hover:scale-110 transition-all duration-300"
                    id="bt_logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="35"
                    viewBox="0 0 80 35"
                  >
                    <g
                      id="Group_20"
                      data-name="Group 20"
                      transform="translate(62.035 16.075)"
                    >
                      <g
                        id="Group_19"
                        data-name="Group 19"
                        transform="translate(0 0.327)"
                      >
                        <path
                          id="Path_58"
                          data-name="Path 58"
                          d="M570.748,157.175c.409-.166.614-.329.614-.5s-.211-.29-.633-.335l-2.473-.25.081,12.018,2.412.094Z"
                          transform="translate(-558.207 -154.266)"
                        />
                        <path
                          id="Path_59"
                          data-name="Path 59"
                          d="M553.6,159.97v-.006l-1.782-1.928-1.291,1.449-.015-5.291,2.81-.023v-.013c.317.009.828.089-.036-.811v-.009l-1.673-1.625-1.177,1.261h-5.959l.234,1.22h2.554l.014,5.471h-3.108l.222,1.1h2.872l.008,8.438,3.153-.58.086-7.858H553.6C553.889,160.738,554.473,160.891,553.6,159.97Z"
                          transform="translate(-544.168 -151.713)"
                        />
                      </g>
                      <path
                        id="Path_60"
                        data-name="Path 60"
                        d="M579.55,168.839a1.971,1.971,0,0,0,.694-1.616V152.294c.49-.256.735-.492.735-.705,0-.183-.22-.3-.658-.363l-3.233-.3v15.314s.169,2.254-.582,3.164Z"
                        transform="translate(-563.014 -150.929)"
                      />
                    </g>
                    <g
                      id="Group_21"
                      data-name="Group 21"
                      transform="translate(41.223 15.819)"
                    >
                      <path
                        id="Path_61"
                        data-name="Path 61"
                        d="M518.351,179.76V176.3c.408-.164.614-.322.614-.47,0-.106-.1-.24-.3-.4l-2.1-1.415-1.186,1.032h-1.644l-2.651-.718v7.031l2.771-.406v-1.575H515.4v.79Zm-4.495-1.313v-2.424H515.4v2.424Z"
                        transform="translate(-504.21 -164.126)"
                      />
                      <path
                        id="Path_62"
                        data-name="Path 62"
                        d="M513.75,151.978l-2.71-1.663-1.224,1.476h-9.481l-3.055-.512v8.563c-.074,1.442-.479,6.191-2.675,8.851,0,0,5.37-.8,5.754-8.851h.008v-.21c0-.086.008-.17.011-.261l-.011-.751.166.637h8.934c.206.046.7-.078.156-.643l.028.028-.134-.147a1.594,1.594,0,0,0-.137-.139L508.1,157l-1,1.252-.7-.024v-1.861h2.794l.043,0c.221,0,.912.1.02-.846v-.006l-1.292-1.3-1.01,1.123h-.555v-.844c.37-.15.555-.305.555-.473,0-.193-.209-.315-.632-.359l-2.852-.2v1.878h-2.553l.238,1.03h2.315v1.861h-3.1v-5.343h9.621v13.1s.167,2.253-.583,3.163l3.045-.568a1.972,1.972,0,0,0,.7-1.616l0-13.894.132-.063c.513-.254.771-.463.771-.63C514.047,152.262,513.949,152.128,513.75,151.978Z"
                        transform="translate(-494.605 -150.315)"
                      />
                    </g>
                    <path
                      id="Path_63"
                      data-name="Path 63"
                      d="M419.344,117.883c.367-.5.729-1.007,1.083-1.536,0,0,1.008.1,1.146-.718,0,0,.067-.545-.848-.837l-5.883-1.955s-5.826,13-18.354,20.428a41.015,41.015,0,0,0,21.1-13.172,48.377,48.377,0,0,0,4.032,4.308,30.8,30.8,0,0,0,12.74,8.371c.576-1.224,5.905-6.555,5.905-6.555A37.457,37.457,0,0,1,419.344,117.883Z"
                      transform="translate(-396.487 -112.838)"
                    />
                    <path
                      id="Path_64"
                      data-name="Path 64"
                      d="M441.617,148.791l-3.367-3.006a.653.653,0,0,0-1.042.121l-1.723,2.565-10.405-.041.32,1.444h15.7S442.539,150.034,441.617,148.791Z"
                      transform="translate(-413.151 -131.83)"
                    />
                    <path
                      id="Path_65"
                      data-name="Path 65"
                      d="M440.214,163.7l-4.2-1.952-2.042,1.356H414.429l.334,1.477,18.528-.05-5.92,8.58c-1.263,1.544-1.029,1.255-1.736,1.8l5.642.862c1.362.118,2.488-1.48,2.488-1.48l5.869-8.444a2.367,2.367,0,0,0,1.051-.657C441.444,164.425,440.214,163.7,440.214,163.7Z"
                      transform="translate(-406.944 -141.162)"
                    />
                  </svg>
                </a>

                <a
                  href="https://esg.businesstoday.com.tw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">ESG 永續台灣 Logo</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform hover:scale-110 transition-all duration-300"
                    width="120"
                    height="40"
                    viewBox="0 0 76.239 29.999"
                  >
                    <g
                      id="Group_5060"
                      data-name="Group 5060"
                      transform="translate(-36.194 -32.333)"
                    >
                      <g
                        id="Group_5054"
                        data-name="Group 5054"
                        transform="translate(36.194 40.079)"
                      >
                        <path
                          id="Path_19181"
                          data-name="Path 19181"
                          d="M38,104.046h6.934a3.07,3.07,0,0,0,2.707-1.417s.982-1.979,1.187-2.327H41.89a2.911,2.911,0,0,0-2.517,1.71A6.846,6.846,0,0,1,38,104.046Z"
                          transform="translate(-37.55 -91.26)"
                          fill="#4f8700"
                        />
                        <path
                          id="Path_19182"
                          data-name="Path 19182"
                          d="M103.785,67.109,100.8,69.745q-1.573-2.191-3.2-2.19a1.947,1.947,0,0,0-1.3.425,1.236,1.236,0,0,0-.5.957,1.642,1.642,0,0,0,.361,1.008,27.352,27.352,0,0,0,2.958,2.722q2.307,1.93,2.8,2.434a8.457,8.457,0,0,1,1.739,2.37,5.929,5.929,0,0,1,.512,2.47,5.663,5.663,0,0,1-1.8,4.307,6.57,6.57,0,0,1-4.7,1.7,6.986,6.986,0,0,1-3.944-1.11,8.754,8.754,0,0,1-2.876-3.485l3.39-2.045q1.529,2.808,3.52,2.808a2.588,2.588,0,0,0,1.745-.605,1.8,1.8,0,0,0,.707-1.4,2.418,2.418,0,0,0-.533-1.44,15.441,15.441,0,0,0-2.352-2.2,23.652,23.652,0,0,1-4.473-4.357,5.534,5.534,0,0,1-1.011-3.06,5,5,0,0,1,1.681-3.781,5.823,5.823,0,0,1,4.145-1.577,6.54,6.54,0,0,1,3.021.735A10.994,10.994,0,0,1,103.785,67.109Z"
                          transform="translate(-77.34 -63.695)"
                          fill="#ffa300"
                        />
                        <path
                          id="Path_19183"
                          data-name="Path 19183"
                          d="M169.454,75.243l.886-1.857-5.826.05-2.39,5.022H168.2a6.185,6.185,0,0,1-2.314,2.752,6.637,6.637,0,0,1-3.526.878,7.452,7.452,0,0,1-5.407-2.132,6.978,6.978,0,0,1-2.192-5.2,6.8,6.8,0,0,1,2.112-5.041,7.186,7.186,0,0,1,5.241-2.075,8.4,8.4,0,0,1,6.286,2.852l.015-.015,1.805-3.8a10.684,10.684,0,0,0-2.956-1.958,13.071,13.071,0,0,0-5.172-1.023,10.962,10.962,0,0,0-8.584,3.7,10.629,10.629,0,0,0-2.779,7.318,11.392,11.392,0,0,0,1.5,5.718,10.476,10.476,0,0,0,4.091,4.083,11.921,11.921,0,0,0,5.884,1.434,10.627,10.627,0,0,0,5.372-1.311,10.063,10.063,0,0,0,3.731-3.8,10.377,10.377,0,0,0,1.44-5.272l-.009-.283Z"
                          transform="translate(-122.441 -63.695)"
                          fill="#0094a8"
                        />
                        <g
                          id="Group_5053"
                          data-name="Group 5053"
                          transform="translate(0 0.533)"
                        >
                          <path
                            id="Path_19184"
                            data-name="Path 19184"
                            d="M40.2,73.46V69.8h7.562V65.854H36.194V73.46Z"
                            transform="translate(-36.194 -65.854)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19185"
                            data-name="Path 19185"
                            d="M40.2,121.518h-4v7.438H47.759V125H40.2Z"
                            transform="translate(-36.194 -107.769)"
                            fill="#9aaf00"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_5057"
                        data-name="Group 5057"
                        transform="translate(86.235 42.997)"
                      >
                        <g
                          id="Group_5055"
                          data-name="Group 5055"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_19186"
                            data-name="Path 19186"
                            d="M331.924,98.844l-.787-.08.026,3.825.768.03V99.108c.13-.053.2-.1.2-.158S332.059,98.858,331.924,98.844Z"
                            transform="translate(-308.329 -93.02)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19187"
                            data-name="Path 19187"
                            d="M321.189,99.035l-.567-.614-.411.461,0-1.684.894-.008v0c.1,0,.264.028-.011-.258v0l-.533-.517-.374.4h-1.9l.074.389h.813l0,1.741h-.989l.071.35h.914l0,2.686,1-.185.027-2.5h.983c.093-.009.279.04,0-.253Z"
                            transform="translate(-298.578 -91.247)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19188"
                            data-name="Path 19188"
                            d="M336.786,96.081l-1.029-.094v4.874a1.841,1.841,0,0,1-.185,1.007l.969-.181a.628.628,0,0,0,.221-.514V96.421c.156-.082.234-.157.234-.225S336.926,96.1,336.786,96.081Z"
                            transform="translate(-311.668 -90.929)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19189"
                            data-name="Path 19189"
                            d="M302.815,108.847l-.668-.45-.377.328h-.523l-.844-.228v2.238l.882-.129v-.5h.491v.251l.939-.129v-1.1c.13-.052.2-.1.2-.15S302.878,108.9,302.815,108.847Zm-1.04.961h-.491v-.771h.491Z"
                            transform="translate(-285.185 -100.274)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19190"
                            data-name="Path 19190"
                            d="M297.636,96.187l-.862-.529-.39.47h-3.018l-.972-.163V98.69a5.4,5.4,0,0,1-.851,2.817s1.709-.254,1.831-2.817h0v-.067c0-.027,0-.054,0-.083l0-.239.053.2h2.844c.065.015.223-.025.049-.2l.009.009-.042-.047a.477.477,0,0,0-.043-.044l-.409-.43-.318.4-.224-.007v-.592h.9c.07,0,.29.032.006-.269v0l-.411-.413-.322.357h-.177v-.268c.118-.048.177-.1.177-.15s-.067-.1-.2-.114l-.908-.065v.6h-.812l.076.328h.737v.592h-.986v-1.7h3.062v4.17a1.845,1.845,0,0,1-.185,1.007l.969-.181a.627.627,0,0,0,.221-.514V96.536l.042-.02c.163-.081.246-.147.246-.2C297.731,96.278,297.7,96.235,297.636,96.187Z"
                            transform="translate(-278.514 -90.681)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19191"
                            data-name="Path 19191"
                            d="M246.069,77.115c.117-.159.232-.321.345-.489,0,0,.321.033.365-.228,0,0,.021-.174-.27-.267l-1.872-.622a16.063,16.063,0,0,1-5.842,6.5,13.053,13.053,0,0,0,6.717-4.193,15.444,15.444,0,0,0,1.283,1.371,9.8,9.8,0,0,0,4.055,2.664,20.9,20.9,0,0,1,1.88-2.086A11.922,11.922,0,0,1,246.069,77.115Z"
                            transform="translate(-238.794 -75.509)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19192"
                            data-name="Path 19192"
                            d="M259.428,94.131l-1.071-.957a.208.208,0,0,0-.332.038l-.549.817-3.312-.013.1.46h5S259.722,94.527,259.428,94.131Z"
                            transform="translate(-250.368 -88.759)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19193"
                            data-name="Path 19193"
                            d="M256.646,102.427l-1.335-.621-.65.432h-6.222l.106.47,5.9-.016-1.884,2.731c-.4.492-.328.4-.553.573l1.8.274c.433.038.792-.471.792-.471l1.868-2.688a.754.754,0,0,0,.334-.209C257.037,102.657,256.646,102.427,256.646,102.427Z"
                            transform="translate(-246.057 -95.311)"
                            fill="#9aaf00"
                          />
                        </g>
                        <g
                          id="Group_5056"
                          data-name="Group 5056"
                          transform="translate(1.205 11.92)"
                        >
                          <path
                            id="Path_19194"
                            data-name="Path 19194"
                            d="M253.156,123.767h-9.1l-.384.538h9.482Z"
                            transform="translate(-243.674 -123.767)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19195"
                            data-name="Path 19195"
                            d="M292.383,123.767l-.767.538h12.767l.384-.538Z"
                            transform="translate(-279.774 -123.767)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19196"
                            data-name="Path 19196"
                            d="M279.666,126.887v-3.119h.592v2.182l3.121-2.178h.866Z"
                            transform="translate(-270.776 -123.767)"
                            fill="#9aaf00"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_5059"
                        data-name="Group 5059"
                        transform="translate(37.088 32.333)"
                      >
                        <path
                          id="Path_19198"
                          data-name="Path 19198"
                          d="M81.215,37.275h-.452a5.649,5.649,0,0,0,.193-1.543h.414A8.421,8.421,0,0,1,81.215,37.275Zm1-1.731c-.033-.077-.071-.2-.1-.292l-.149.287h-.876a.3.3,0,0,1-.265-.149.3.3,0,0,1,.039-.32l.7-1.014h-.551a.246.246,0,0,1-.2-.121.235.235,0,0,1,.006-.253l.76-1.213H82.1l-.778,1.224h.491l.226-.342H82.6l-1.262,1.825H82.1c-.033-.144-.1-.463-.127-.634h.43a7.658,7.658,0,0,0,.259,1Zm-.573,1.731a10.687,10.687,0,0,1-.127-1.543h.413a9.406,9.406,0,0,0,.149,1.543Zm.606-.237c-.072-.425-.116-.866-.149-1.307h.4a6.346,6.346,0,0,0,.176,1.307Zm2.028-3.958v.2H85.4V33.6H82.731v-.325H83.8v-.2H82.538v-.336H83.8v-.276h.474v.276h1.285v.336Zm-.942,4.195h-.783a2.742,2.742,0,0,0,.733-.5h.695A2.755,2.755,0,0,1,83.332,37.275Zm2.056-2.629a.4.4,0,0,1-.281.094H82.93a.316.316,0,0,1-.21-.088.39.39,0,0,1-.116-.265v-.259a.36.36,0,0,1,.122-.254.349.349,0,0,1,.22-.082H85.1a.426.426,0,0,1,.27.082.371.371,0,0,1,.121.287v.21A.356.356,0,0,1,85.388,34.646Zm-.171,1.885a.417.417,0,0,1-.292.121H83.139a.341.341,0,0,1-.253-.132.391.391,0,0,1-.094-.242v-1A.343.343,0,0,1,82.93,35a.434.434,0,0,1,.27-.094h1.736a.362.362,0,0,1,.276.127.464.464,0,0,1,.11.3v.937A.364.364,0,0,1,85.217,36.531Zm-1.775-2.415h-.264a.105.105,0,0,0-.088.088v.1a.094.094,0,0,0,.083.088h.27Zm1.4,1.191a.1.1,0,0,0-.089-.088H83.376a.106.106,0,0,0-.1.093V35.4h1.56Zm0,.375h-1.56v.171h1.56Zm0,.463h-1.56v.077a.106.106,0,0,0,.088.1h1.379a.093.093,0,0,0,.094-.094Zm-.618-2.029h-.347V34.4h.347Zm.634,3.159a3.171,3.171,0,0,1-.557-.5h.667a3.737,3.737,0,0,0,.706.5Zm.16-3.065a.114.114,0,0,0-.11-.094h-.248V34.4H84.9a.109.109,0,0,0,.11-.094Z"
                          transform="translate(-70.648 -32.435)"
                          fill="#9aaf00"
                        />
                        <path
                          id="Path_19199"
                          data-name="Path 19199"
                          d="M125.968,34.431a3.294,3.294,0,0,1-.22-.287l-.193.292H122.1a.221.221,0,0,1-.21-.127.249.249,0,0,1,.044-.27l1.362-1.615h.662L122.6,34.04h3.082a10.953,10.953,0,0,1-.6-1.119h.568a6.23,6.23,0,0,0,.987,1.51Zm.243,2.63a.454.454,0,0,1-.337.149h-3.291a.489.489,0,0,1-.342-.133.5.5,0,0,1-.154-.369V35.468a.48.48,0,0,1,.138-.347.509.509,0,0,1,.369-.144h3.264a.486.486,0,0,1,.364.16.525.525,0,0,1,.121.353V36.7A.518.518,0,0,1,126.211,37.061Zm-.375-1.522a.16.16,0,0,0-.16-.16h-2.911a.166.166,0,0,0-.159.154v1.136a.131.131,0,0,0,.127.138H125.7a.152.152,0,0,0,.132-.138Z"
                          transform="translate(-101.604 -32.402)"
                          fill="#9aaf00"
                        />
                        <path
                          id="Path_19200"
                          data-name="Path 19200"
                          d="M160.731,37.168H160.2a9.58,9.58,0,0,0,.5-1.979h.474A16.877,16.877,0,0,1,160.731,37.168Zm-.044-3.666a10.022,10.022,0,0,1-.48-1.158h.507a5.7,5.7,0,0,0,.507,1.158Zm-.016,1.406a7.243,7.243,0,0,1-.458-1.213h.5a5.766,5.766,0,0,0,.507,1.213Zm.871-.143h-.308a4.1,4.1,0,0,0,.132-.8h.276A4.408,4.408,0,0,1,161.541,34.764Zm2.7-1.218h.392c-.022-.077-.055-.215-.066-.276h.3a2.68,2.68,0,0,0,.165.562h-.314c-.022-.055-.055-.165-.077-.226l-.133.226h-.529a.187.187,0,0,1-.193-.115.228.228,0,0,1,.072-.226c.11-.116.281-.3.342-.381h-.182a.237.237,0,0,1-.132-.033.214.214,0,0,1-.083-.121H162.5V32.83c-.166.171-.541.557-.728.738h.386a2.2,2.2,0,0,1-.049-.27h.3a2.435,2.435,0,0,0,.143.546h-.314c-.016-.044-.05-.138-.066-.193l-.127.193h-.612a.158.158,0,0,1-.143-.1.145.145,0,0,1,.027-.171c.133-.127.32-.325.43-.447h-.264a.181.181,0,0,1-.138-.3c.11-.11.342-.353.452-.474h.469c-.127.138-.375.4-.5.524H162c.039-.039.116-.116.144-.149h.353v-.088h.43a2.768,2.768,0,0,1-.077-.292h.446a1.509,1.509,0,0,0,.072.292h.48v.149c.11-.116.3-.337.391-.453h.419c-.1.133-.32.4-.441.529h.226a2.329,2.329,0,0,0,.2-.226h.419C164.854,32.874,164.507,33.265,164.242,33.546Zm.563,3.484a.412.412,0,0,1-.3.138H163l-.209-.348h1.516a.118.118,0,0,0,.093-.11V36.59c0-.05-.044-.116-.093-.116h-2.448a.375.375,0,0,1-.275-.1.339.339,0,0,1-.094-.254v-.187a.358.358,0,0,1,.138-.309.491.491,0,0,1,.287-.077h2.315a.117.117,0,0,0,.1-.1v-.061a.1.1,0,0,0-.094-.094h-2.806v-.32h3.027a.433.433,0,0,1,.292.094.323.323,0,0,1,.083.226v.248a.325.325,0,0,1-.1.248.419.419,0,0,1-.27.088H162.07a.1.1,0,0,0-.088.094v.094a.1.1,0,0,0,.094.094h2.459a.339.339,0,0,1,.353.353v.3A.35.35,0,0,1,164.8,37.03Zm-2.993-2.266a7.517,7.517,0,0,1-.067-.8H162a4.906,4.906,0,0,0,.072.8Zm.4,0a6.049,6.049,0,0,1-.088-.8h.249a5.154,5.154,0,0,0,.1.8Zm1.439-.072a.271.271,0,0,1-.2.077h-.639a.263.263,0,0,1-.2-.072.275.275,0,0,1-.077-.2v-.237a.3.3,0,0,1,.1-.243.313.313,0,0,1,.2-.055h.618a.271.271,0,0,1,.215.094.3.3,0,0,1,.061.193V34.5A.287.287,0,0,1,163.647,34.693Zm-1.059-1.306v-.276H163.7v.276Zm0,.424V33.53h1.119v.281Zm.75.507a.083.083,0,0,0-.072-.083h-.281a.089.089,0,0,0-.083.083v.088a.085.085,0,0,0,.083.083h.287a.074.074,0,0,0,.066-.077Zm.7.441h-.3a3.58,3.58,0,0,0,.138-.8h.275A3.655,3.655,0,0,1,164.038,34.759Zm.276,0a5.267,5.267,0,0,1-.055-.8h.248a7.056,7.056,0,0,0,.082.8Zm.43,0c-.038-.193-.082-.6-.1-.8h.265c.016.2.066.606.1.8Z"
                          transform="translate(-130.462 -32.333)"
                          fill="#9aaf00"
                        />
                        <g
                          id="Group_5058"
                          data-name="Group 5058"
                          transform="translate(0 0.061)"
                        >
                          <path
                            id="Path_19201"
                            data-name="Path 19201"
                            d="M40.519,40h-.706a5.848,5.848,0,0,0,1.5-2.073.073.073,0,0,0-.061-.088h-1.2v-.375h1.328a.449.449,0,0,1,.386.187.482.482,0,0,1,.022.447A5.65,5.65,0,0,1,40.519,40Zm3.407,0A8.336,8.336,0,0,1,42.5,38.158v1.681a.555.555,0,0,1-.154.414.525.525,0,0,1-.364.127h-.7L41.086,40h.755A.158.158,0,0,0,42,39.851V37.11a.13.13,0,0,0-.132-.132H40.728V36.6h1.29a.512.512,0,0,1,.353.143.481.481,0,0,1,.126.347v.182c.122.226.259.458.381.64a3.286,3.286,0,0,0,.937-1.136h.573a4.2,4.2,0,0,1-1.246,1.538A7.772,7.772,0,0,0,44.719,40Z"
                            transform="translate(-39.813 -35.606)"
                            fill="#9aaf00"
                          />
                          <path
                            id="Path_19202"
                            data-name="Path 19202"
                            d="M47.327,33.447h-.89l-.962-.866h.89Z"
                            transform="translate(-44.077 -32.581)"
                            fill="#9aaf00"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="close-btn lg:hidden z-50 pr-5">
                <button
                  className={clsx(
                    "hover:bg-primary-dark transform transition-all duration-300 ease-in-out text-white w-10 h-10 relative focus:outline-none border border-white rounded-xl"
                  )}
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open menu</span>
                  <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",
                        !menuState && "-translate-y-2",
                        menuState && "rotate-45 translate-y-0"
                      )}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",
                        menuState && "opacity-0"
                      )}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out",
                        !menuState && "translate-y-2",
                        menuState && "-rotate-45 translate-y-0"
                      )}
                    ></span>
                  </div>
                </button>
              </div>
              <nav className={clsx("menus hidden lg:flex font-sans text-base font-medium tracking-widest divide-x", !top && "text-white", top && "text-black")}>
                <div className="relative px-4">
                  <a
                    href="https://esg.businesstoday.com.tw/topic/projectblue1095"
                    className="transition hover:text-gray-800 duration-300 outline-none focus:outline-none"
                  >
                    首頁
                  </a>
                </div>
                {menuTitles.map((title, i) => {
                  return (
                    <div className={clsx("relative px-4", !top && "border-white", top && "border-black")} key={`menu_item${i}`}>
                      <a
                        href={`#${title}`}
                        className="text-center inline-flex transition-all hover:text-gray-800 duration-300 outline-none focus:outline-none"
                      >
                        {title}
                      </a>
                    </div>
                  );
                })}
              </nav>

              <div className="icons hidden lg:flex items-center justify-end pr-3 lg:pr-6">
                <a
                  href="https://www.facebook.com/share.php?u=https://esg.businesstoday.com.tw/topic/projectblue1095"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Facebook icon</span>
                  <svg
                    className="fill-current text-transparent hover:text-blue-600 transition-colors duration-300"
                    id="icon_fb"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 30 30"
                  >
                    <g id="icon_fb" transform="translate(-1508 -22)">
                      <g
                        id="Path_4132"
                        data-name="Path 4132"
                        transform="translate(1508 22)"
                      >
                        <path
                          d="M10,0H20A10,10,0,0,1,30,10V20A10,10,0,0,1,20,30H10A10,10,0,0,1,0,20V10A10,10,0,0,1,10,0Z"
                          stroke="none"
                        />
                        <path
                          d="M 10 1 C 5.037380218505859 1 1 5.037380218505859 1 10 L 1 20 C 1 24.96261978149414 5.037380218505859 29 10 29 L 20 29 C 24.96261978149414 29 29 24.96261978149414 29 20 L 29 10 C 29 5.037380218505859 24.96261978149414 1 20 1 L 10 1 M 10 0 L 20 0 C 25.52285003662109 0 30 4.477149963378906 30 10 L 30 20 C 30 25.52285003662109 25.52285003662109 30 20 30 L 10 30 C 4.477149963378906 30 0 25.52285003662109 0 20 L 0 10 C 0 4.477149963378906 4.477149963378906 0 10 0 Z"
                          stroke="none"
                          fill="#fff"
                        />
                      </g>
                      <path
                        id="Icon_social-facebook"
                        data-name="Icon social-facebook"
                        d="M13.257,8.21V5.291h2.355V3.822a3.842,3.842,0,0,1,1.032-2.706A3.282,3.282,0,0,1,19.143,0h2.339V2.92H19.143a.515.515,0,0,0-.412.252,1.024,1.024,0,0,0-.183.619v1.5h2.935V8.21H18.547v7.079H15.612V8.21Z"
                        transform="translate(1505.63 29.355)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://social-plugins.line.me/lineit/share?url=https://esg.businesstoday.com.tw/topic/projectblue1095"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4"
                >
                  <span className="sr-only">Line icon</span>
                  <svg
                    className="fill-current text-transparent hover:text-green-500 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 30 30"
                  >
                    <g id="icon_line" transform="translate(-1550 -22)">
                      <g
                        id="Path_4133"
                        data-name="Path 4133"
                        transform="translate(1550 22)"
                      >
                        <path
                          d="M10,0H20A10,10,0,0,1,30,10V20A10,10,0,0,1,20,30H10A10,10,0,0,1,0,20V10A10,10,0,0,1,10,0Z"
                          stroke="none"
                        />
                        <path
                          d="M 10 1 C 5.037380218505859 1 1 5.037380218505859 1 10 L 1 20 C 1 24.96261978149414 5.037380218505859 29 10 29 L 20 29 C 24.96261978149414 29 29 24.96261978149414 29 20 L 29 10 C 29 5.037380218505859 24.96261978149414 1 20 1 L 10 1 M 10 0 L 20 0 C 25.52285003662109 0 30 4.477149963378906 30 10 L 30 20 C 30 25.52285003662109 25.52285003662109 30 20 30 L 10 30 C 4.477149963378906 30 0 25.52285003662109 0 20 L 0 10 C 0 4.477149963378906 4.477149963378906 0 10 0 Z"
                          stroke="none"
                          fill="#fff"
                        />
                      </g>

                      <path
                        id="Icon_simple-line"
                        data-name="Icon simple-line"
                        d="M14.122,7.633a.46.46,0,0,1,0,.92h-1.28v.82h1.28a.459.459,0,1,1,0,.918h-1.74a.46.46,0,0,1-.457-.459V6.354a.461.461,0,0,1,.459-.459h1.74a.459.459,0,0,1,0,.919h-1.28v.82h1.28Zm-2.811,2.2a.459.459,0,0,1-.315.435.471.471,0,0,1-.145.023.451.451,0,0,1-.372-.182L8.7,7.689V9.833a.458.458,0,1,1-.917,0V6.354a.457.457,0,0,1,.314-.434A.424.424,0,0,1,8.235,5.9a.472.472,0,0,1,.361.185l1.8,2.428V6.354a.459.459,0,1,1,.919,0V9.833Zm-4.187,0a.459.459,0,1,1-.917,0V6.354a.459.459,0,1,1,.917,0Zm-1.8.459H3.586a.462.462,0,0,1-.459-.459V6.354a.459.459,0,0,1,.919,0v3.02H5.326a.459.459,0,0,1,0,.918M17.5,7.962c0-3.917-3.927-7.1-8.751-7.1S0,4.046,0,7.962c0,3.508,3.114,6.448,7.318,7.007.285.06.673.188.772.43a1.781,1.781,0,0,1,.028.788L8,16.931c-.033.22-.175.865.765.47a28.21,28.21,0,0,0,6.881-5.087A6.288,6.288,0,0,0,17.5,7.962"
                        transform="translate(1556.249 27.808)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              { "scale-y-100": menuState },
              "lg:hidden scale-y-0 absolute top-0 z-40 inset-x-0 transition ease-in-out transform origin-top"
            )}
          >
            <div className="h-screen bg-primary-medium">
              <div className="pt-28">
                <div>
                  <nav className="flex flex-col justify-center items-center text-lg text-white">
                    <a
                      href="https://esg.businesstoday.com.tw/topic/projectblue1095"
                      onClick={toggleMenu}
                      className="relative group mb-7 xs:mb-10 font-medium transform transition duration-500 focus:outline-none hover:text-gray-800"
                    >
                      首頁
                    </a>
                    {menuTitles.map((title, i) => {
                      return (
                        <a
                          href={`#${title}`}
                          key={`toggle_item${i}`}
                          onClick={toggleMenu}
                          className="relative group mb-7 xs:mb-10 font-medium transform transition duration-500 focus:outline-none hover:text-gray-800"
                        >
                          {title}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </div>
              <div className="px-5">
                <div className="flex items-center justify-center">
                  <a
                    href="https://www.facebook.com/share.php?u=https://esg.businesstoday.com.tw/topic/projectblue1095"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Facebook icon</span>
                    <svg
                      className="fill-current text-transparent hover:text-blue-600 transition-colors duration-300"
                      id="icon_fb"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 30 30"
                    >
                      <g id="icon_fb" transform="translate(-1508 -22)">
                        <g
                          id="Path_4132"
                          data-name="Path 4132"
                          transform="translate(1508 22)"
                        >
                          <path
                            d="M10,0H20A10,10,0,0,1,30,10V20A10,10,0,0,1,20,30H10A10,10,0,0,1,0,20V10A10,10,0,0,1,10,0Z"
                            stroke="none"
                          />
                          <path
                            d="M 10 1 C 5.037380218505859 1 1 5.037380218505859 1 10 L 1 20 C 1 24.96261978149414 5.037380218505859 29 10 29 L 20 29 C 24.96261978149414 29 29 24.96261978149414 29 20 L 29 10 C 29 5.037380218505859 24.96261978149414 1 20 1 L 10 1 M 10 0 L 20 0 C 25.52285003662109 0 30 4.477149963378906 30 10 L 30 20 C 30 25.52285003662109 25.52285003662109 30 20 30 L 10 30 C 4.477149963378906 30 0 25.52285003662109 0 20 L 0 10 C 0 4.477149963378906 4.477149963378906 0 10 0 Z"
                            stroke="none"
                            fill="#fff"
                          />
                        </g>
                        <path
                          id="Icon_social-facebook"
                          data-name="Icon social-facebook"
                          d="M13.257,8.21V5.291h2.355V3.822a3.842,3.842,0,0,1,1.032-2.706A3.282,3.282,0,0,1,19.143,0h2.339V2.92H19.143a.515.515,0,0,0-.412.252,1.024,1.024,0,0,0-.183.619v1.5h2.935V8.21H18.547v7.079H15.612V8.21Z"
                          transform="translate(1505.63 29.355)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </a>
                  <a
                    href="https://social-plugins.line.me/lineit/share?url=https://esg.businesstoday.com.tw/topic/projectblue1095"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4"
                  >
                    <span className="sr-only">Line icon</span>
                    <svg
                      className="fill-current text-transparent hover:text-green-500 transition-colors duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 30 30"
                    >
                      <g id="icon_line" transform="translate(-1550 -22)">
                        <g
                          id="Path_4133"
                          data-name="Path 4133"
                          transform="translate(1550 22)"
                        >
                          <path
                            d="M10,0H20A10,10,0,0,1,30,10V20A10,10,0,0,1,20,30H10A10,10,0,0,1,0,20V10A10,10,0,0,1,10,0Z"
                            stroke="none"
                          />
                          <path
                            d="M 10 1 C 5.037380218505859 1 1 5.037380218505859 1 10 L 1 20 C 1 24.96261978149414 5.037380218505859 29 10 29 L 20 29 C 24.96261978149414 29 29 24.96261978149414 29 20 L 29 10 C 29 5.037380218505859 24.96261978149414 1 20 1 L 10 1 M 10 0 L 20 0 C 25.52285003662109 0 30 4.477149963378906 30 10 L 30 20 C 30 25.52285003662109 25.52285003662109 30 20 30 L 10 30 C 4.477149963378906 30 0 25.52285003662109 0 20 L 0 10 C 0 4.477149963378906 4.477149963378906 0 10 0 Z"
                            stroke="none"
                            fill="#fff"
                          />
                        </g>

                        <path
                          id="Icon_simple-line"
                          data-name="Icon simple-line"
                          d="M14.122,7.633a.46.46,0,0,1,0,.92h-1.28v.82h1.28a.459.459,0,1,1,0,.918h-1.74a.46.46,0,0,1-.457-.459V6.354a.461.461,0,0,1,.459-.459h1.74a.459.459,0,0,1,0,.919h-1.28v.82h1.28Zm-2.811,2.2a.459.459,0,0,1-.315.435.471.471,0,0,1-.145.023.451.451,0,0,1-.372-.182L8.7,7.689V9.833a.458.458,0,1,1-.917,0V6.354a.457.457,0,0,1,.314-.434A.424.424,0,0,1,8.235,5.9a.472.472,0,0,1,.361.185l1.8,2.428V6.354a.459.459,0,1,1,.919,0V9.833Zm-4.187,0a.459.459,0,1,1-.917,0V6.354a.459.459,0,1,1,.917,0Zm-1.8.459H3.586a.462.462,0,0,1-.459-.459V6.354a.459.459,0,0,1,.919,0v3.02H5.326a.459.459,0,0,1,0,.918M17.5,7.962c0-3.917-3.927-7.1-8.751-7.1S0,4.046,0,7.962c0,3.508,3.114,6.448,7.318,7.007.285.06.673.188.772.43a1.781,1.781,0,0,1,.028.788L8,16.931c-.033.22-.175.865.765.47a28.21,28.21,0,0,0,6.881-5.087A6.288,6.288,0,0,0,17.5,7.962"
                          transform="translate(1556.249 27.808)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
