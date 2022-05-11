/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slide from "./Home/Slide";
import ProductContent from "./Home/ProductContent";
import TopViews from "./Home/TopViews";
import React, { useState, useEffect } from "react";

export default function Body() {
  const [textRun, setTextRun] = useState(false);
  const [hiddenTextRunt, setHiddenTextRunt] = useState(false);
  useEffect(() => {
   
    setTimeout(() => {
      setTextRun(true);
    }, 5000);
  });
  useEffect(() => {
    var width = window.innerWidth;
    if (width < 768) {
      setHiddenTextRunt(true);
    }
  }, [window.innerWidth]);
  // useEffect(()=> {
  //   var height = window.scrollY
  //   console.log(height)
  // },[window.scrollY])
  return (
    <div className="container  mt-108p ">
      <div className={`${hiddenTextRunt ? "displaynone" : ""} `}>
        <div className={`${textRun ? "text-run-2" : "displaynone"}`}>
          Welcome to summoner's rift
        </div>
        <div className="text-run mb-5">Welcome to Web Anime</div>
      </div>

      <div className="mb-5"><Slide /></div>
      <div className="product pb-250p ">
        <div className="row">
          <div className="col-lg-8">
            <ProductContent />
          </div>
          <div className="col-lg-4">
            <TopViews />
          </div>
        </div>
      </div>
    </div>
  );
}
