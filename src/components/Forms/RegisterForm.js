import React from "react";
import { Button, Icon, Form, Popup } from "semantic-ui-react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { reduxForm, Field } from "redux-form";
import { Required, Email, PasswordStrength, Confirm } from "./Validation";

const FormField = ({
  input,
  meta: { touched, error, visited, active },
  as: As = Form.Input,
  ...props
}) => {
  function handleChange(e, { value }) {
    return input.onChange(value);
  }

  const showError = () => {
    if (touched && error) {
      return true;
    }
    return false;
  };

  return (
    <Form.Field>
      <Popup
        trigger={
          <As
            {...input}
            value={input.value}
            {...props}
            onChange={handleChange}
            error={showError()}
          />
        }
        content="Please enter the id on your legitimation. If you don't have one then probably you are not allowed to create an account"
        on="focus"
        disabled={input.name !== "legitimationNumber"}
        hideOnScroll
      />

      {showError() ? (
        <span style={{ color: "red" }}>
          <Icon name="times circle outline" />
          {touched && error}
        </span>
      ) : null}
      {input.name === "password" && active ? (
        <PasswordStrengthMeter password={input.value} />
      ) : null}
    </Form.Field>
  );
};

const RegisterForm = props => {
  const { invalid } = props;
  return (
    <Form>
      <Field
        component={FormField}
        name="firstName"
        placeholder="First name..."
        required
        icon="user"
        iconPosition="left"
        label="First name"
        validate={[Required]}
      />
      <Field
        name="lastName"
        component={FormField}
        required
        icon="user"
        iconPosition="left"
        label="First name"
        placeholder="First name"
        validate={[Required]}
      />
      <Field
        name="email"
        component={FormField}
        required
        icon="at"
        iconPosition="left"
        label="Email"
        labelPosition="right corner"
        placeholder="email"
        type="email"
        validate={[Required, Email]}
      />
      <Field
        name="password"
        component={FormField}
        required
        icon="lock"
        iconPosition="left"
        label="Password"
        placeholder="Password"
        type="password"
        validate={[Required, PasswordStrength]}
      />
      <Field
        name="confirmPassword"
        component={FormField}
        required
        icon="lock"
        iconPosition="left"
        label="Confirm password"
        placeholder="Confirm password"
        type="password"
        validate={[Required]}
      />
      <Field
        name="legitimationNumber"
        component={FormField}
        required
        icon="id card"
        iconPosition="left"
        label="Legitimation number"
        placeholder="Legitimation number"
        validate={[Required]}
      />

      <Button animated attached="bottom" disabled={invalid}>
        <Button.Content visible>Register</Button.Content>
        <Button.Content hidden>
          <Icon name="signup" />
        </Button.Content>
      </Button>
    </Form>
  );
};

const formConfiguration = {
  form: "register-form",
  validate: Confirm
};

export default reduxForm(formConfiguration)(RegisterForm);
