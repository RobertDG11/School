import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Icon,
  Segment,
  Divider,
  Grid,
  Form
} from "semantic-ui-react";
import styles from "./Login.module.scss";

const RegisterForm = () => (
  <Form>
    <Form.Input
      required
      icon="user"
      iconPosition="left"
      label="First name"
      placeholder="First name"
    />
    <Form.Input
      required
      icon="user"
      iconPosition="left"
      label="Last name"
      placeholder="Last name"
    />
    <Form.Input
      required
      icon="lock"
      iconPosition="left"
      label="Password"
      placeholder="Password"
      type="password"
    />
    <Form.Input
      required
      icon="lock"
      iconPosition="left"
      label="Confirm password"
      placeholder="Confirm password"
      type="password"
    />
    <Form.Input
      required
      icon="at"
      iconPosition="left"
      label="Email"
      labelPosition="right corner"
      placeholder="email"
      type="email"
    />
    <Form.Input
      required
      icon="id card"
      iconPosition="left"
      label="Legitimation number"
      placeholder="Legitimation number"
    />

    <Button animated attached="bottom">
      <Button.Content visible>Register</Button.Content>
      <Button.Content hidden>
        <Icon name="signup" />
      </Button.Content>
    </Button>
  </Form>
);

const LoginForm = () => (
  <Form>
    <Form.Input
      required
      icon="at"
      iconPosition="left"
      label="Email"
      labelPosition="right corner"
      placeholder="email"
      type="email"
    />
    <Form.Input
      required
      icon="lock"
      iconPosition="left"
      label="Password"
      placeholder="Password"
      type="password"
    />

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
        <a href="" textAlign="center">
          <Header
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

const Login = props => (
  <Modal open={true} className={styles.loginModal}>
    <Modal.Content>
      <Modal.Description>
        {/* <Header>Default Profile Image</Header> */}

        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable verticalAlign="middle">
            <Grid.Column>
              {props.register ? <RegisterForm /> : <LoginForm />}
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Segment
                style={{
                  backgroundColor: "transparent",
                  border: "0px",
                  boxShadow: "0 0 0 0"
                }}
              >
                <Button animated size="big">
                  <Button.Content visible>
                    {props.register ? "Log in" : "Register"}
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name={props.register ? "sign-in" : "signup"} />
                  </Button.Content>
                </Button>
              </Segment>

              {props.register ? (
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
                    <a href="" textAlign="center">
                      <Header
                        as="h5"
                        icon="question circle outline"
                        content="Forgot your password?"
                        textAlign="center"
                      />
                    </a>
                  </Button>
                </Segment>
              ) : (
                ""
              )}
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

class LoginModal extends Component {
  render() {
    const register = true;

    return (
      <div>
        <Login register={register} />
      </div>
    );
  }
}

export default LoginModal;
