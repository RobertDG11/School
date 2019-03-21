import React from "react";
import { Button, Menu, MenuItem, Icon } from "semantic-ui-react";

import styles from "../Menu.module.scss";

const DeviceMenu = props => (
  <Menu inverted pointing secondary size="large" className={styles.FixedMenu}>
    <MenuItem onClick={props.handleToggle}>
      <Icon name="sidebar" />
    </MenuItem>
    <MenuItem position="right">
      <Button as="a" inverted>
        Log in
      </Button>
      <Button as="a" inverted className={styles.SignUpButton}>
        Sign Up
      </Button>
    </MenuItem>
  </Menu>
);

export default DeviceMenu;
