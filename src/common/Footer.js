/** @format */
import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { FaAngleUp,FaHeart } from "react-icons/fa";
export default function Footer() {
  function handleGoToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="footer">
      <div className="w-100 mt-e85p d-flex justify-content-center">
        <div className="go-top text-center" onClick={() => handleGoToTop()}>
          <FaAngleUp className="icon-gotop" />
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-3">
            <Link to="/">
              <img
                src="https://technext.github.io/anime/img/logo.png"
                className=""
              />
            </Link>
          </div>
          <div className="col-lg-6 col-12 px-0 mt-3">
            <div className="row px-0 text-name">
              <div className="col-6 col-sm-3 col-lg-3 px-0">Home page</div>
              <div className="col-6 col-sm-3 col-lg-3 px-0">Categories</div>
              <div className="col-6 col-sm-3 col-lg-3 px-0">Our Blog</div>
              <div className="col-6 col-sm-3 col-lg-3 px-0">Contacts</div>
            </div>
          </div>
          
        </div>
        <div>
        <div className=" text-coppyright mt-3">
            Copyright ©2022 All rights reserved | This template is made with <FaHeart/> by
            <spapn style={{ color: "DeepSkyBlue" }}>Colorlib</spapn>
          </div>
        </div>
      </div>
    </div>
  );
}
