/** @format */
import React from "react";
import Header from "../common/Header";
import PageNotFound from "../common/PageNotFound";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";
import Body from "./Body";
import Detail from "./Detail";
import Footer from "../common/Footer";
import Category from "./Category/Category";
import Contact from "./contacts/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Body />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
