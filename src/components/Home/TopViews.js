/** @format */
import React, { useState, useEffect } from "react";
import { DataTopView } from "./DataTopView";
export default function TopViews() {
  const [time, setTime] = useState(0);
  console.log(DataTopView);
  return (
    <div className="top-views">
      <div className="top-views-header">
        <span className="top-views-box-title"></span>
        <span className="top-views-title">TopViews</span>
        <span className="top-views-time">
          <span
            className={`${
              time == 0 ? "mx-2 cursor" : "top-views-time-content mx-2 cursor"
            }`}
            onClick={() => setTime(0)}
          >
            Day
          </span>
          <span
            className={`${
              time == 1 ? "mx-2 cursor" : "top-views-time-content mx-2 cursor"
            }`}
            onClick={() => setTime(1)}
          >
            Week
          </span>
          <span
            className={`${
              time == 2 ? "mx-2 cursor" : "top-views-time-content mx-2 cursor"
            }`}
            onClick={() => setTime(2)}
          >
            Month
          </span>
          <span
            className={`${
              time == 3 ? "mx-2 cursor" : "top-views-time-content mx-2 cursor"
            }`}
            onClick={() => setTime(3)}
          >
            Years
          </span>
        </span>
      </div>
      <div className="top-views-conent">
        {DataTopView.map((item, index) => {
          return (
            <div className="top-views-content-item">
              <img src={item.url} className="image" />

              <h5 className="name">
                  {item.name} : {item.title}
              </h5>
              <div className="ep">
                {item.episodes}/{item.current_episodes}
              </div>
              <div className="view">
                  {item.view}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
