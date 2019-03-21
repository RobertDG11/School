import React from "react";
import {
  Container,
  Grid,
  GridRow,
  GridColumn,
  Header,
  List,
  ListItem,
  Segment
} from "semantic-ui-react";

const Footer = props => (
  <Segment inverted vertical style={{ padding: "5em 0em" }} color="blue">
    <Container>
      <Grid divided inverted stackable>
        <GridRow>
          <GridColumn width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <ListItem as="a">Sitemap</ListItem>
              <ListItem as="a">Contact Us</ListItem>
              <ListItem as="a">Religious Ceremonies</ListItem>
              <ListItem as="a">Gazebo Plans</ListItem>
            </List>
          </GridColumn>
          <GridColumn width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <ListItem as="a">Banana Pre-Order</ListItem>
              <ListItem as="a">DNA FAQ</ListItem>
              <ListItem as="a">How To Access</ListItem>
              <ListItem as="a">Favorite X-Men</ListItem>
            </List>
          </GridColumn>
          <GridColumn width={7}>
            <Header as="h4" inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
