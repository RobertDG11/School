import React from "react";
import Aux from "../../../../hoc/aux";
import { Button, Header, Icon, GridColumn } from "semantic-ui-react";

import styles from "./Carousel.module.scss";

const Content = props => {
  return (
    <Aux>
      <GridColumn className={styles.TextHeader} style={props.style}>
        <Header
          as="h1"
          content={props.text}
          inverted
          textAlign="center"
          className={styles.TextSize}
        />
      </GridColumn>
      <Button primary size={props.btnSize} className={styles.Btn}>
        Get Started <Icon name="right arrow" />
      </Button>
    </Aux>
  );
};

export default Content;
