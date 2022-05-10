/** @format */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
export default function Header() {
  let navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(0);
  const [navActive, setNavActive] = useState(true);
  const [mobie, setMobie] = useState(false);
  useEffect(() => {
    var width = window.innerWidth;
    if (width >= 768) {
      setMobie(true);
    }
  }, []);
  function handleGoCategory(e) {
    setMenuActive(e);
    switch (e) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/category/name");
        break;
      case 2:
        break;
      case 3:
        navigate("/contact");
        break;
      // 2
      default:
        break;
    }
  }
  return (
    <div className="header">
      <div className={`container-header ${mobie ? "container h-100" : ""}`}>
        <div className="row h-100">
          <div className="col-sm-3 col-4 h-100">
            <div className="d-flex justify-content-center align-items-center h-100">
              <Link to="/">
                <img
                  src="https://technext.github.io/anime/img/logo.png"
                  className=""
                />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-3 col-1">
            <div className="d-flex p-0 m-0 h-100">
              <div
                className={`d-flex align-items-center w-118p  justify-content-center ${
                  menuActive === 0 ? "active" : "menu"
                }`}
                onClick={() => handleGoCategory(0)}
              >
                HomePage
              </div>
              <div
                className={`d-flex align-items-center w-138p  justify-content-center ${
                  menuActive === 1 ? "active" : "menu"
                }`}
                onClick={() => handleGoCategory(1)}
              >
                Categorys
              </div>
              <div
                className={`d-flex align-items-center w-138p  justify-content-center ${
                  menuActive === 2 ? "active" : "menu"
                }`}
                onClick={() => handleGoCategory(2)}
              >
                Our Blog
              </div>
              <div
                className={`d-flex align-items-center w-138p  justify-content-center ${
                  menuActive === 3 ? "active" : "menu"
                }`}
                onClick={() => handleGoCategory(3)}
              >
                Contacts
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-3">
            <div className="d-flex align-items-center h-100 justify-content-end header-icon">
              <div className="d-flex align-items-center justify-content-center  me-4">
                <VscSearch />
              </div>
              <div className="d-flex align-items-center  justify-content-center me-2">
                <FaUserAlt />
              </div>
            </div>
          </div>
          <div
            className={`col-sm-3 col-4 min-width120p ps-0 pe-4 ${
              mobie ? "displaynone" : ""
            }`}
          >
            <div className="nav " onClick={() => setNavActive(!navActive)}>
              <div className="nav-text">Menu</div>{" "}
              <div className={navActive ? "line" : "line-x"}></div>
            </div>
          </div>
          <div className={navActive ? "displaynone" : "p-0 col-12 buttonshow"}>
            <div className="nav-menu container px-0  w-100">
              <div className="row d-flex align-items-center justify-content-center nav-menu-item">
                Home
              </div>
              <div className="row d-flex align-items-center justify-content-center nav-menu-item">
                Categorys
              </div>
              <div className="row d-flex align-items-center justify-content-center nav-menu-item">
                Our Blog
              </div>
              <div className="row d-flex align-items-center justify-content-center nav-menu-item">
                Contacts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
