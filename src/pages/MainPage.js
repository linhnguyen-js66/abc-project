import React from "react";
import LeftPage from "@pages/LeftPage";
import CenterPage from "@pages/CenterPage";
import '@styles/style-root.css'
const MainPages = () => {
  return (
    <>
      <div className="root">
        <div>
          <LeftPage />
        </div>
        <div className="center line">
          <CenterPage />
        </div>
        <div className="right line">
          <LeftPage />
        </div>
      </div>
    </>
  );
};
export default MainPages;
