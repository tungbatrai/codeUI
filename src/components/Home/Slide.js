/** @format */
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

export default function Slide() {
  const dataUrl = [
    {
      url: "https://technext.github.io/anime/videos/anime-watch.jpg",
      title: "Fate / Stay Night",
      titleContent: "Unlimited Blade Works",
      content: "After 30 days of travel across the world...",
    },
    {
      url: "https://technext.github.io/anime/img/hero/hero-1.jpg",
      title: "Fate / Stay Night",
      titleContent: "The last knight",
      content: "24 hours countdown...",
    },
    {
      url: "https://technext.github.io/anime/img/blog/details/bd-item-1.jpg",
      title: "Kimetsu no Yaiba",
      titleContent: "Tobio-Nishinoya showdown",
      content: "Tobi solo with yasuo...",
    },
    {
      url: "https://technext.github.io/anime/img/blog/details/bd-item-2.jpg",
      title: "Nanatsu no Taizai",
      titleContent: "Kamigami No Gekirin",
      content: "7 sinners and the journey to save the kingdom",
    },
  ];
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
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
              <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={`${item.url}`}
                  className="d-block w-100 h-500p"
                  alt="..."
                />
                <div className="carousel-caption  d-md-block">
                  <div className="type-anime">Adventure</div>
                  <h5 className="slide-title">
                    {item.title} : <br /> {item.titleContent}
                  </h5>
                  <p className="slide-content">{item.content}</p>
                  <div className="slide-button">WATCH NOW</div>
                  <HiChevronRight className="slide-icon-button"/>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="button-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          {/* <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span> */}

          <HiChevronLeft className="ct-icon-prev" />
        </button>
        <button
          // className="carousel-control-next"
          className="button-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          {/* <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span> */}
          {/* <span className="carousel-control-next-icon"></span> */}

          <HiChevronRight className="ct-icon-next" />
        </button>
      </div>
    </>
  );
}
