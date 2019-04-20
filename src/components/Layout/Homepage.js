import React from "react";
import Aux from "../../hoc/aux";
import Istoric from "../TextComponents/Istoric";
import Prof from "../TextComponents/Profesori";
import DeCe from "../TextComponents/DeCe";
import { Divider } from "semantic-ui-react";

import styles from "../TextComponents/Text.module.scss";

const Homepage = () => {
  return (
    <Aux>
      <Istoric />
      <Divider className={styles.AddMargin} />
      <Prof />
      <Divider className={styles.AddMargin} />
      <DeCe />
    </Aux>
  );
};

export default Homepage;
