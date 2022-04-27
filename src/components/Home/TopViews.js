/** @format */
import React, { useState, useEffect } from "react";
import { DataTopView } from "./DataTopView";
import { ImEye } from "react-icons/im";
export default function TopViews() {
  const [time, setTime] = useState(0);
  const [data, setData] = useState([]);
  const [show,setShow] = useState(false)
  useEffect(() => {
    console.log(DataTopView.sort(compareValues("views_day")));
    setData(DataTopView.sort(compareValues("views_day")));
  }, []);
  function compareValues(key, order = "asc") {
    return function (a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA < varB) {
        comparison = 1;
      } else if (varA > varB) {
        comparison = -1;
      }
      return order == "asc" ? comparison * -1 : comparison;
    };
  }
  // console.log(DataTopView);
  function handleSelectTime(e) {
    if (e != time) {
      setTime(e);
      switch (e) {
        case 1:
          setData(DataTopView.sort(compareValues("views_week")));
          setShow(!show)
          break;
        case 2:
          setData(DataTopView.sort(compareValues("views_month")));
          setShow(!show)
          break;
        case 3:
          setData(DataTopView.sort(compareValues("view_years")));
          setShow(!show)
          break;

        default:
          setData(DataTopView.sort(compareValues("views_day")));
          setShow(!show)
          break;
      }
    }
  }
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
            onClick={() => handleSelectTime(0)}
          >
            Day
          </span>
          <span
            className={`${
              time == 1 ? "mx-2 cursor" : "top-views-time-content mx-2 cursor"
            }`}
            onClick={() => handleSelectTime(1)}
          >
            Week
          </span>
          <span
            className={`${
              time == 2 ? "mx-2 cursor" : "top-views-time-content mx-2 cursor"
            }`}
            onClick={() => handleSelectTime(2)}
          >
            Month
          </span>
          <span
            className={`${
              time == 3 ? "mx-2 cursor" : "top-views-time-content mx-2 cursor"
            }`}
            onClick={() => handleSelectTime(3)}
          >
            Years
          </span>
        </span>
      </div>
      <div className="top-views-conent">
        {data?.map((item, index) => {
          return (
            <div className={`top-views-content-item ${show ? 'animation':'animation-active'}`}>
              <img src={item.url} className="image" />

              <h5 className="name">
                {item.name} : {item.title}
              </h5>
              <div className="ep">
                {item.episodes}/{item.current_episodes}
              </div>
              <div className="view">
                <ImEye style={{ marginTop: "-4px" }} className="icon" />{" "}
                <div> {item.view}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
