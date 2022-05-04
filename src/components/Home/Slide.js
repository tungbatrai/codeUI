/** @format */
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Slide() {
  const dataUrl = [
    {
      url: "https://technext.github.io/anime/videos/anime-watch.jpg",
      title: "Fate / Stay Night",
      titleContent: "Unlimited Blade Works",
      content: "After 30 days of travel across the world...",
      type: "Adventure",
    },
    {
      url: "https://technext.github.io/anime/img/hero/hero-1.jpg",
      title: "Fate / Stay Night",
      titleContent: "The last knight",
      content: "24 hours countdown...",
      type: "Supper Idol",
    },
    {
      url: "https://technext.github.io/anime/img/blog/details/bd-item-1.jpg",
      title: "Kimetsu no Yaiba",
      titleContent: "Tobio-Nishinoya showdown",
      content: "Tobi solo with yasuo...",
      type: "Action",
    },
    {
      url: "https://technext.github.io/anime/img/blog/details/bd-item-2.jpg",
      title: "Nanatsu no Taizai",
      titleContent: "Kamigami No Gekirin",
      content: "7 sinners and the journey to save the kingdom",
      type: "Romate",
    },
  ];
  const [mobie, setMobie] = useState(false);
  const [location, setLocation] = useState(0);

  useEffect(() => {
    var width = window.innerWidth;
    if (width < 768) {
      setMobie(true);
     
    }
  }, []);
  function handelMoseDown(e) {
    setLocation(e.clientX);
  }
  function MouseUp(e) {
    if (location - e.clientX > 0) {
      if (0.9 * location - e.clientX > 0) {
        document.getElementById("bt-next").click();
      }
    } else {
      if (0.9 * e.clientX - location > 0) {
        document.getElementById("bt-prev").click();
      }
    }
  }

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
        onmousedown="mouseDown()"
        onmouseup="mouseUp()"
      >
        <div className="carousel-indicators ">
          {dataUrl?.map((item, index) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active dot-page" : "dot-page"}
                aria-current="true"
                // aria-label="Slide 1"
                key={index}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {dataUrl?.map((item, index) => {
            return (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                onMouseDown={(e) => handelMoseDown(e)}
                onMouseUp={(e) => MouseUp(e)}
              >
                <div className="screen-img"></div>
                <img
                  src={`${item.url}`}
                  className="d-block w-100 h-500p"
                  alt="..."
                />
                <div className="carousel-caption d-md-block">
                  <div className="type-anime">{item.type}</div>
                  <h5 className="slide-title">
                    {item.title} : <br /> {item.titleContent}
                  </h5>
                  <p className="slide-content">{item.content}</p>
                  <Link to={`detail/1`}>
                    <div className="slide-button">WATCH NOW</div>
                    <HiChevronRight className="slide-icon-button" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className={`button-prev`}
          type="button"
          id="bt-prev"
          hidden={mobie}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <HiChevronLeft className="ct-icon-prev" />
        </button>
        <button
          // className="carousel-control-next"
          className={`button-next`}
          type="button"
          id="bt-next"
          hidden={mobie}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <HiChevronRight className="ct-icon-next" />
        </button>
      </div>
    </>
  );
}
