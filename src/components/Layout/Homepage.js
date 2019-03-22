import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Input
} from "semantic-ui-react";
import Carousel from "./Header/Carousel/Carousel";
import styles from "../TextComponents/Text.module.scss";
import "../../App.scss";
import logo from "../../images/logo2.png";
import ResponsiveContainer from "./Container/ResponsiveContainer";
import Istoric from "../TextComponents/Istoric";
import Prof from "../TextComponents/Profesori";
import DeCe from "../TextComponents/DeCe";
import Testimonial from "../Testimonial/Testimonial";

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Istoric />
      <Divider className={styles.AddMargin} />
      <Prof />
      <Divider className={styles.AddMargin} />
      <DeCe />
      <Testimonial />
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
