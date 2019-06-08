import React from "react";
import { Container, Header } from "semantic-ui-react";
import { connect } from "react-redux";

import image from "../../images/school.png";

const ConnectedIstoric = props => (
  <Container textAlign="justified">
    <Header
      as="h2"
      image={image}
      content={props.literals.istoricTitle}
      textAlign="center"
    />
    <p style={{ lineHeight: "1.5em", fontSize: "1.33em" }}>
      {props.literals.istoric}
    </p>
  </Container>
);

const mapStateToProps = state => {
  return {
    literals: state.literals
  };
};

const Istoric = connect(mapStateToProps)(ConnectedIstoric);

export default Istoric;
