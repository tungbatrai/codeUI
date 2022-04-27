/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slide from "./Home/Slide";
import ProductContent from "./Home/ProductContent";
import TopViews from "./Home/TopViews";
import React, { useState, useEffect } from "react";

export default function Body() {
  const [textRun,setTextRun] = useState(false)
  useEffect(()=> {
    setTimeout(() => {
      setTextRun(true)
    }, 5000);
  })
  return (
    <div className="container ">
      <div className={`${textRun ? 'text-run-2' : 'displaynone'}`}>Welcome to summoner's rift </div>
      <div className="text-run mb-5">Welcome to Web Anime</div>

      <div className="mb-5"></div>
      <Slide />

      <div className="product ">
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
