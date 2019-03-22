import React from "react";
import { Segment, Image, Header } from "semantic-ui-react";
import img from "../../images/avatar.png";

const slide = props => {
  return (
    <Segment vertical>
      <Image src={props.image} size="medium" circular centered />
      <Header
        as="h2"
        content={props.name}
        subheader={props.description}
        textAlign="center"
      />
    </Segment>
  );
};

export default slide;
