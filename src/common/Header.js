/** @format */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
export default function Header() {
  const [menuActive, setMenuActive] = useState(0);
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="header">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-3 h-100">
            <div className="d-flex justify-content-center align-items-center h-100">
              <Link to="/">
                <img
                  src="https://technext.github.io/anime/img/logo.png"
                  className=""
                />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-3">
            <div className="d-flex p-0 m-0 h-100">
              <div
                className={`d-flex align-items-center w-118p  justify-content-center ${
                  menuActive === 0 ? "active" : "menu"
                }`}
                onClick={() => setMenuActive(0)}
              >
                HomePage
              </div>
              <div
                className={`d-flex align-items-center w-138p  justify-content-center ${
                  menuActive === 1 ? "active" : "menu"
                }`}
                onClick={() => setMenuActive(1)}
              >
                Categorys
              </div>
              <div
                className={`d-flex align-items-center w-138p  justify-content-center ${
                  menuActive === 2 ? "active" : "menu"
                }`}
                onClick={() => setMenuActive(2)}
              >
                Our Blog
              </div>
              <div
                className={`d-flex align-items-center w-138p  justify-content-center ${
                  menuActive === 3 ? "active" : "menu"
                }`}
                onClick={() => setMenuActive(3)}
              >
                Contacts
              </div>
            </div>
          </div>
          <div className="col-md-3 col-1">
            <div className="d-flex align-items-center h-100 justify-content-end header-icon">
              <div className="d-flex align-items-center justify-content-center  me-5">
                <VscSearch />
              </div>
              <div className="d-flex align-items-center  justify-content-center me-2">
                <FaUserAlt />
              </div>
            </div>
          </div>
          <div className="col-3   ">
            <div className="nav" onClick={() => setNavActive(!navActive)}>
              <div className="nav-text">Menu</div>{" "}
              <div className={navActive ? "line" : "line-x"}></div>
            </div>
          </div>
          <div className={navActive ? "displaynone" : "col-12"}>
            <div className="nav-menu container w-75">
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
