import React from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

const ResponsiveContainer = (showCarousel, { children }) => (
  <div>
    <DesktopContainer showCarousel={showCarousel}>{children}</DesktopContainer>
    <MobileContainer showCarousel={showCarousel}>{children}</MobileContainer>
  </div>
);

export default ResponsiveContainer;
