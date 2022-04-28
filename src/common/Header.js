/** @format */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
export default function Header() {
  const [menuActive, setMenuActive] = useState(0);
  return (
    <div className="header">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-3">
            <div className="d-flex justify-content-center align-items-center h-100">
              <Link to="/">
                <img
                  src="https://technext.github.io/anime/img/logo.png"
                  className=""
                />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
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
          <div className="col-md-3">
            <div className="d-flex align-items-center h-100 justify-content-end header-icon">
              <div className="d-flex align-items-center justify-content-center  me-5">
                <VscSearch />
              </div>
              <div className="d-flex align-items-center  justify-content-center me-2">
                <FaUserAlt />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
