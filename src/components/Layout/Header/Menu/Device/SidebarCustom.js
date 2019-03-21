import React, { Component } from "react";
import { Sidebar, MenuItem, Menu, Input, Image } from "semantic-ui-react";

import logo from "../../../../../images/logo2.png";

class SidebarCustom extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        color="blue"
        onHide={this.props.handleSidebarHide}
        vertical
        visible={this.props.sidebarOpened}
      >
        <Image
          src={logo}
          size="small"
          centered
          style={{ paddingTop: "1.5em" }}
        />
        <MenuItem>
          <Input
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Search..."
          />
        </MenuItem>
        <MenuItem
          as="a"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </MenuItem>
        <MenuItem
          as="a"
          name="work"
          active={activeItem === "work"}
          onClick={this.handleItemClick}
        >
          Work
        </MenuItem>
        <MenuItem
          as="a"
          name="company"
          active={activeItem === "company"}
          onClick={this.handleItemClick}
        >
          Company
        </MenuItem>
        <MenuItem
          as="a"
          name="careers"
          active={activeItem === "careers"}
          onClick={this.handleItemClick}
        >
          Careers
        </MenuItem>
      </Sidebar>
    );
  }
}

export default SidebarCustom;
