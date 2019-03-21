import React, { Component } from "react";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import Indicator from "./Indicator";
import Content from "./Content";
import { GridRow, GridColumn, List, Icon } from "semantic-ui-react";
import WindowSize from "../../../../hoc/WindowSize";
import Aux from "../../../../hoc/aux";

import styles from "./Carousel.module.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      classN: styles.Content0
    };
  }

  getClass = className => {
    if (className === "styles.Content0") return styles.Content0;
    else if (className === "styles.Content1") return styles.Content1;
    else if (className === "styles.Content2") return styles.Content2;

    return styles.Content1;
  };
  goToSlide = index => {
    this.setState({
      activeIndex: index,
      classN: this.getClass(`styles.Content${index}`)
    });
  };

  goToPrevSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    index--;

    this.setState({
      activeIndex: index,
      classN: this.getClass(`styles.Content${index}`)
    });
  };

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    index++;

    this.setState({
      activeIndex: index,
      classN: this.getClass(`styles.Content${index}`)
    });
  }
  render() {
    const btnSize = this.props.mobile ? "mini" : "huge";
    const arrowSize = this.props.mobile ? "small" : "big";
    const height =
      this.props.windowWidth > 768 ? this.props.windowHeight - 75 : null;
    const paddingHeader =
      this.props.windowWidth > 768 ? this.props.windowHeight - 250 : null;
    return (
      <Aux>
        <GridRow className={this.state.classN} style={{ height: height }}>
          <LeftArrow
            arrowSize={arrowSize}
            customClick={e => this.goToPrevSlide(e)}
          />
          <RightArrow
            arrowSize={arrowSize}
            customClick={e => this.goToNextSlide(e)}
          />
        </GridRow>
        <GridRow className={styles.PositionContent}>
          <Content
            btnSize={btnSize}
            text="Join us in this journey!"
            style={{ paddingTop: paddingHeader }}
          />
          <GridColumn>
            <List horizontal>
              {this.props.slides.map((__slide, index) => (
                <Indicator
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  isActive={this.state.activeIndex === index}
                  handleClick={e => this.goToSlide(index)}
                />
              ))}
            </List>
          </GridColumn>
          <Icon
            name="angle double down"
            size="huge"
            className={styles.CenterArrowBounce}
          />
        </GridRow>
      </Aux>
    );
  }
}

export default WindowSize(Carousel);
