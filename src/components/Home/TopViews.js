/** @format */
import React ,{useState ,useEffect} from "react";
export default function TopViews() {
  return (
    <div className="top-views">
      <div className="top-views-header">
        <span className="top-views-box-title"></span>
        <span className="top-views-title">TopViews</span>
        <span className="top-views-time">
          <span className="mx-1 cursor">Day</span>
          <span className="mx-1 cursor">Week</span>
          <span className="mx-1 cursor">Month</span>
          <span className="mx-1 cursor">Years</span>
        </span>
      </div>
    </div>
  );
}
