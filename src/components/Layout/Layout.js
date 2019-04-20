import React from "react";
import { connect } from 'react-redux';
import { Segment } from "semantic-ui-react";
import "../../App.scss";
import ResponsiveContainer from "./Container/ResponsiveContainer";
import Istoric from "../TextComponents/Istoric";
import Prof from "../TextComponents/Profesori";
import DeCe from "../TextComponents/DeCe";
import Card from "../Cards/SimpleCards";
import Scheduler from "../Scheduler/Scheduler";

const ConnectedLayout = props => (
  <ResponsiveContainer showCarousel={props.showCarousel}>
    <Segment style={{ padding: "8em 0em" }} vertical>
      {props.children}
    </Segment>
  </ResponsiveContainer>
);

const mapStateToProps = state => {
  return {
      showCarousel: state.showCarousel.showCarousel,
  }
}

const Layout =  connect(mapStateToProps)(ConnectedLayout);
  
export default Layout;
