import React from "react";
import HeaderDesktop from "../Header/HeaderDesktop";
import Footer from "../Footer/Footer";
import { Responsive } from "semantic-ui-react";

const DesktopContainer = props => {
  const getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyComputer.minWidth : window.innerWidth;
  };
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyComputer.minWidth}>
      <HeaderDesktop showCarousel={props.showCarousel} />
      {props.children}
      <Footer />
    </Responsive>
  );
};

export default DesktopContainer;
