/** @format */
import React from "react";
import Header from "../common/Header";
import PageNotFound from "../common/PageNotFound";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";

export default function Home() {
  return (
    <>
      {/* <PageNotFound /> */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Body />} />
          {/* <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
