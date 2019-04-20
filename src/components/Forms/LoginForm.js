import React from "react";
import { Button, Icon, Form, Segment, Header } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";

const renderEmail = props => {
  return (
    <Form.Input
      required
      icon="at"
      iconPosition="left"
      label="Email"
      labelPosition="right corner"
      placeholder="email"
      type="email"
    />
  );
};

const renderPassword = props => {
  return (
    <Form.Input
      required
      icon="lock"
      iconPosition="left"
      label="Password"
      placeholder="Password"
      type="password"
    />
  );
};

const LoginForm = props => {
  return (
    <Form>
      <Field name="email" component={renderEmail} />
      <Field name="password" component={renderPassword} />

      <Button animated attached="bottom">
        <Button.Content visible>Login</Button.Content>
        <Button.Content hidden>
          <Icon name="sign-in" />
        </Button.Content>
      </Button>

      <Segment
        style={{
          backgroundColor: "transparent",
          border: "0px",
          boxShadow: "0 0 0 0"
        }}
      >
        <Button
          basic
          style={{
            backgroundColor: "transparent",
            border: "0px",
            boxShadow: "0 0 0 0",
            padding: "0px"
          }}
        >
          <a href="">
            <Header
              style={{ paddingTop: "1px" }}
              as="h5"
              icon="question circle outline"
              content="Forgot your password?"
              textAlign="center"
            />
          </a>
        </Button>
      </Segment>
    </Form>
  );
};

const formConfiguration = {
  form: "login-form"
};

export default reduxForm(formConfiguration)(LoginForm);
