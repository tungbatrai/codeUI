/** @format */

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import "./custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const axios = require("axios");

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
