import React, { Component } from "react";
import "./App.scss";

import store from "./components/redux/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Layout/Homepage";
import Professors from "./components/Cards/SimpleCards";
import Scheduler from "./components/Scheduler/Scheduler";
import Aux from "./hoc/aux";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="Test">
            <Layout>
              <Route exact path="/" component={Homepage} />
              <Route path="/profesori" component={Professors} />
              <Route
                path="/rezerva-sala"
                render={props => <Scheduler {...props} minuteStep={15} />}
              />
            </Layout>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
