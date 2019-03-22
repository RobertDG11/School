import React, { Component } from "react";
import "./App.scss";

import HomepageLayout from "./components/Layout/Homepage";
import LoginModal from "./components/Modals/Login/Login"

import Carousel from "./components/Layout/Header/Carousel/Carousel";

class App extends Component {
  render() {
    return (
      <div className="Test">
        <HomepageLayout />
        <LoginModal />
      </div>
    );
  }
}

export default App;
