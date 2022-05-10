/** @format */

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import "./custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "../src/common/Header";
import PageNotFound from "../src/common/PageNotFound";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Detail from "./components/Detail";
import Particles from "./components/Particeles";
import Category from "./components/Category/Category";
import Contact from "./components/contacts/Contact";

const axios = require("axios");

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Header /> */}
      {/* <BrowserRouter>
        <Routes>
       
          
          <Route path="/home" element={<Home />}>
               <Route index element={<Home />} />
          </Route>
           <Route path="*" element={<PageNotFound replace to="/404" />} /> 
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Body />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="category/:name" element={<Category />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="particeles" element={<Particles />} />
          <Route path="*" element={<PageNotFound replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
