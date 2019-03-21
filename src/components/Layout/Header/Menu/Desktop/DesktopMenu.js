import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Input,
  Image
} from "semantic-ui-react";

import styles from "../Menu.module.scss";
import logo from "../../../../../images/logo2.png";

class DesktopMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
          as="a"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          className={styles.CenteredContent}
        >
          Home
        </MenuItem>
        <MenuItem
          as="a"
          name="work"
          active={activeItem === "work"}
          onClick={this.handleItemClick}
          className={styles.CenteredContent}
        >
          Work
        </MenuItem>
        <MenuItem
          as="a"
          name="company"
          active={activeItem === "company"}
          onClick={this.handleItemClick}
          className={styles.CenteredContent}
        >
          Company
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
            <Button
              as="a"
              inverted={!this.props.fixed}
              className={styles.LoginButton}
            >
              Log in
            </Button>
            <Button
              as="a"
              inverted={!this.props.fixed}
              primary={this.props.fixed}
              className={styles.SignUpButton}
            >
              Sign Up
            </Button>
          </Container>
        </MenuItem>
      </Menu>
    );
  }
}

export default DesktopMenu;
