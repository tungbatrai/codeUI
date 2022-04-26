/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slide from "./Home/Slide";
import ProductContent from "./Home/ProductContent";
import TopViews from "./Home/TopViews";

export default function Body() {
  return (
    <div className="container ">
      <Slide />
      <div className="product">
        <div className="row">
          <div className="col-md-8">
            <ProductContent />
          </div>
          <div className="col-md-4">
            <TopViews />
          </div>
        </div>
      </div>
    </div>
  );
}
