/** @format */

import React, { useState, useEffect } from "react";
import { DataHome } from "./DataHome";
import { HiArrowRight } from "react-icons/hi";
import { ImEye } from "react-icons/im";
import { FaRegComments } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
export default function ProductContent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(DataHome);
  }, []);
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <div className="product-content">
              <div className="row">
                <div className="col-md-8">
                  <div className="product-content-title ">
                    <span className="ct-box-title"></span>
                    {item.name}
                  </div>
                </div>
                <div className="col-md-4 text-end view-all">
                  <span className="view-all-content">VIEW ALL</span>{" "}
                  <HiArrowRight className="icon-view-all mt-e5p" />
                </div>
              </div>
              <div className="row pt-4">
                {item?.data.map((content, id) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                      <div className="image">
                        <div className="ep">
                          <div className="h-100 pt-1p">
                            {content.current_episodes}/ {content.episodes}
                          </div>
                        </div>
                        <div className="image-custom">
                          <img src={`${content.url}`} className="" />

                          <div className="comment">
                            <FaRegComments style={{ marginTop: "-4px" }} />
                            <div className="comment-content">
                              {content.comment}
                            </div>
                          </div>
                          <div className="view">
                            <ImEye style={{ marginTop: "-4px" }} />
                            <div className="view-content">{content.view}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="image-content pt-2 pb-3">
                        <div className="image-type">
                          {content.type.map((type, id) => {
                            return (
                              <span key={id} className="image-type-content">
                                {type.name}
                              </span>
                            );
                          })}
                        </div>
                        <h5 className="m-width190p">{content.name}</h5>
                      </div>
                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
