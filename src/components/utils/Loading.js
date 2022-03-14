import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Loading = ({loading}) => {
     
  return (
      <Loader
        className="z-100 fixed bg-primary-medium w-screen h-screen flex justify-center items-center"
        visible={loading}
        type="ThreeDots"
        color="#FFFFFF"
        height={100}
        width={100}
      />
  );
};

export default Loading;
