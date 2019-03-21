import React, { Component } from "react";
import DesktopMenu from "./Menu/Desktop/DesktopMenu";
import { Segment, Visibility } from "semantic-ui-react";
import Carousel from "./Carousel/Carousel";
import WindowSize from "../../../hoc/WindowSize";
import Aux from "../../../hoc/aux";

import styles from "./Header.module.scss";

class HeaderDesktop extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;
    const height = this.props.showCarousel ? this.props.windowHeight : null;

    return (
      <Visibility
        once={false}
        onOffScreen={this.showFixedMenu}
        onOnScreen={this.hideFixedMenu}
      >
        <Segment
          style={{ height: height }}
          inverted
          color="blue"
          textAlign="center"
          className={styles.SegmentProp}
          vertical
        >
          {this.props.showCarousel ? (
            <Aux>
              <DesktopMenu fixed={fixed} />
              <Carousel slides={[1, 2, 3]} />
            </Aux>
          ) : (
            <DesktopMenu />
          )}
        </Segment>
      </Visibility>
    );
  }
}

export default WindowSize(HeaderDesktop);
