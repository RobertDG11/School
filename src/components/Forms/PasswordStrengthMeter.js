import React from "react";
import zxcvbn from "zxcvbn";
import { Progress } from "semantic-ui-react";

const createPasswordLabel = result => {
  switch (result.score) {
    case 0:
      return "Weak";
    case 1:
      return "Weak";
    case 2:
      return "Fair";
    case 3:
      return "Good";
    case 4:
      return "Strong";
    default:
      return "Weak";
  }
};

const PasswordStrengthMeter = props => {
  const { password } = props;
  const testedResult = zxcvbn(password);
  return (
    <Progress
      total={4}
      value={testedResult.score}
      indicating
      style={{ marginBottom: "3em" }}
    >
      Password status: &nbsp;
      {createPasswordLabel(testedResult)}
    </Progress>
  );
};

export default PasswordStrengthMeter;
