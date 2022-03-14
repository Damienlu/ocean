import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/scss/App.scss";

import axios from "./api/axios";
import defaultData from "./components/data/data.json";

import Loading from "./components/utils/Loading"
// import PopUp from "./components/utils/PopUp";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Videos from "./components/Videos";
import News from "./components/News";
import Background from "./components/Background";
import Process from "./components/Process";
// import Events from "./components/Events";
import Partners from "./components/Partners";
import Support from "./components/Support";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import GoTop from "./components/utils/GoTop";


function App() {
  const [data, setData] = useState(defaultData);
  const [renewData, setRenewData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [openPopUp, setOpenPopUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/data/data.json?${new Date().getTime()}`);
        setData(res.data);
      } catch (error) {
        console.log("fetchData error", error);
      }
    };
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {const postData = async () => {
      let formData = new FormData();
      formData.append('action', 'getIndex');
      try {
        const res = await axios.post(`/admin/api/`, formData)
        setRenewData(res.data);
        setTimeout( 
          () => setLoading(false), 1000);
      } catch (error) {
        console.log("postData error", error);
        setTimeout( 
          () => setLoading(false), 1000);
      }
    };

    postData();
    scrollToTop();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Loading loading={loading} />
      {/* <PopUp openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} /> */}
      <Header menuTitles={data.menuTitles} />
      <main className="overflow-hidden">
        <Hero countsData={renewData.counts} />
        <Videos
          menuTitles={data.menuTitles}
          menuTitlesEng={data.menuTitlesEng}
          topics={data.videosData}
        />
        <News
          menuTitles={data.menuTitles}
          menuTitlesEng={data.menuTitlesEng}
          topics={renewData.articles.news}
        />
        <Background
          menuTitles={data.menuTitles}
          menuTitlesEng={data.menuTitlesEng}
        />
        <Process />

        {/* <Events
          menuTitles={data.menuTitles}
          menuTitlesEng={data.menuTitlesEng}
          topicsData={data.topicsData}
        /> */}

        <Partners
          menuTitles={data.menuTitles}
          menuTitlesEng={data.menuTitlesEng}
          partnersData={data.partnersData}
          partnersCompanyData={data.partnersCompanyData}
        />
        <Support
          menuTitles={data.menuTitles}
          menuTitlesEng={data.menuTitlesEng}
          supportData={data.supportData}
        />

        <Articles
          menuTitles={data.menuTitles}
          menuTitlesEng={data.menuTitlesEng}
          topics={renewData.articles.sliders}
        />
      </main>
      <Footer />
      <GoTop setOpenPopUp={setOpenPopUp} />
    </div>
  );
}

export default App;
