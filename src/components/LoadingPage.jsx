import React from "react";
import Loader from "./Loader";
import "../assets/css/components/PageLoading.css";
import "../assets/css/components/Loader.css";
const LoadingPage = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <Loader />
      </div>
    </div>
  );
};

export default LoadingPage;
