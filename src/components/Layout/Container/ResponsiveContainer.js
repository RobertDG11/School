import React from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer showCarousel>{children}</DesktopContainer>
    <MobileContainer showCarousel>{children}</MobileContainer>
  </div>
);

export default ResponsiveContainer;
