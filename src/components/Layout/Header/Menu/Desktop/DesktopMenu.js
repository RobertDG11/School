import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Input,
  Image
} from "semantic-ui-react";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import Login from "../../../../Modals/Login/Login";
import Homepage from "../../../Layout";
import Professors from "../../../../Cards/SimpleCards";

import { carouselVisible } from "../../../../redux/actions/actions"

import styles from "../Menu.module.scss";
import logo from "../../../../../images/logo2.png";

class ConnectedDesktopMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name }); this.props.carouselVisible(true)};

  handleCarousel = (e, { name }) => {this.setState({ activeItem: name }); this.props.carouselVisible(false)};

  render() {
    const { activeItem } = this.state;
    return (
      <Menu
        className={styles.FixedMenu}
        fixed={this.props.fixed ? "top" : null}
        inverted={!this.props.fixed}
        pointing={!this.props.fixed}
        secondary={!this.props.fixed}
        size="large"
      >
        {!this.props.fixed ? (
          <Image
            src={logo}
            style={{ height: "5em", padding: "0.6em", marginRight: "1em" }}
          />
        ) : null}

        <MenuItem
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          className={styles.CenteredContent}
        >
          Acasa
        </MenuItem>
        <MenuItem
          as={Link}
          to="/profesori"
          name="prof"
          active={activeItem === "prof"}
          onClick={this.handleCarousel}
          className={styles.CenteredContent}
        >
          Profesori
        </MenuItem>
        <MenuItem
          as={Link}
          to="/rezerva-sala"
          name="classroom"
          active={activeItem === "classroom"}
          onClick={this.handleCarousel}
          className={styles.CenteredContent}
        >
          Rezerva o sala
        </MenuItem>
        <MenuItem
          as="a"
          name="careers"
          active={activeItem === "careers"}
          onClick={this.handleItemClick}
          className={styles.CenteredContent}
        >
          Careers
        </MenuItem>

        <MenuItem position="right">
          <Input
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Search..."
          />
          <Container fluid>
            <Login
              trigger={
                <Button
                  as="a"
                  inverted={!this.props.fixed}
                  className={styles.LoginButton}
                >
                  Log in
                </Button>
              }
            />
            <Login
              register
              trigger={
                <Button
                  as="a"
                  inverted={!this.props.fixed}
                  primary={this.props.fixed}
                  className={styles.SignUpButton}
                >
                  Sign Up
                </Button>
              }
            />
          </Container>
        </MenuItem>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
      showCarousel: state.showCarousel,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    carouselVisible: showCarousel => dispatch(carouselVisible(showCarousel))
  };
};

const DesktopMenu = connect(mapStateToProps, mapDispatchToProps)(ConnectedDesktopMenu);

export default DesktopMenu;
