import React, { Component } from "react";
import "./App.scss";

import HomepageLayout from "./components/Layout/Homepage";
import Login from "./components/Modals/Login/Login";
import store from "./components/redux/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="Test">
          <HomepageLayout />
          <Login />
        </div>
      </Provider>
    );
  }
}

export default App;
