import React from "react";
import {
  Button,
  Grid,
  GridRow,
  GridColumn,
  Header,
  Image
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { carouselVisible, modifyActiveItem } from "../redux/actions/actions";

import prof from "../../images/profesors.jpg";

const ConnectedProfessors = props => (
  <Grid container stackable verticalAlign="middle">
    <GridRow>
      <GridColumn width={8}>
        <Header as="h3" style={{ fontSize: "2em" }}>
          {props.literals.students.title}
        </Header>
        <p style={{ fontSize: "1.33em" }}>{props.literals.students.content}</p>
        <Header as="h3" style={{ fontSize: "2em" }}>
          {props.literals.professors.title}
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          {props.literals.professors.content}
        </p>
      </GridColumn>
      <GridColumn floated="right" width={6}>
        <Image bordered rounded size="large" src={prof} centered />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn textAlign="center">
        <Button
          as={Link}
          to="/profesori"
          size="huge"
          onClick={() => {
            props.carouselVisible(false);
            props.modifyActiveItem("prof");
          }}
        >
          {props.literals.professors.meet}
        </Button>
      </GridColumn>
    </GridRow>
  </Grid>
);

const mapStateToProps = state => {
  return {
    showCarousel: state.showCarousel.showCarousel,
    activeItem: state.showCarousel.activeItem,
    literals: state.literals
  };
};

function mapDispatchToProps(dispatch) {
  return {
    carouselVisible: showCarousel => dispatch(carouselVisible(showCarousel)),
    modifyActiveItem: activeItem => dispatch(modifyActiveItem(activeItem))
  };
}

const Professors = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedProfessors);

export default Professors;
