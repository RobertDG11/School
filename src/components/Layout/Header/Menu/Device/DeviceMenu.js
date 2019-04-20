import React from "react";
import { Button, Menu, MenuItem, Icon } from "semantic-ui-react";
import Login from "../../../../Modals/Login/Login";

import styles from "../Menu.module.scss";

const DeviceMenu = props => (
  <Menu inverted pointing secondary size="large" className={styles.FixedMenu}>
    <MenuItem onClick={props.handleToggle}>
      <Icon name="sidebar" />
    </MenuItem>
    <MenuItem position="right">
      <Login
        register={false}
        trigger={
          <Button as="a" inverted style={{ zIndex: "100" }}>
            Log in
          </Button>
        }
      />
      <Login
        register
        trigger={
          <Button as="a" inverted className={styles.SignUpButton}>
            Sign Up
          </Button>
        }
      />
    </MenuItem>
  </Menu>
);

export default DeviceMenu;
