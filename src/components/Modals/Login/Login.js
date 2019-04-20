import React, { Component } from "react";
import {
  Button,
  Header,
  Modal,
  Icon,
  Segment,
  Divider,
  Grid
} from "semantic-ui-react";
import WindowSize from "../../../hoc/WindowSize";
import LoginForm from "../../Forms/LoginForm";
import RegisterForm from "../../Forms/RegisterForm";
import styles from "./Login.module.scss";

class Login extends Component {
  state = {
    register: this.props.register
  };

  changeForm = () => {
    this.setState({ register: !this.state.register });
  };
  render() {
    const mobile = this.props.windowWidth < 768;

    return (
      <Modal
        trigger={this.props.trigger}
        className={styles.loginModal}
        closeOnDimmerClick
        centered
        size="small"
      >
        <Modal.Content scrolling>
          <Modal.Description>
            <Segment placeholder>
              <Grid columns={2} relaxed="very" stackable verticalAlign="middle">
                <Grid.Column>
                  {this.state.register ? <RegisterForm /> : <LoginForm />}
                </Grid.Column>

                <Grid.Column verticalAlign="middle">
                  {mobile ? <Divider horizontal>Or</Divider> : null}
                  <Segment
                    style={{
                      backgroundColor: "transparent",
                      border: "0px",
                      boxShadow: "0 0 0 0"
                    }}
                  >
                    <Button animated size="big" onClick={this.changeForm}>
                      <Button.Content visible>
                        {this.state.register ? "Log in" : "Register"}
                      </Button.Content>
                      <Button.Content hidden>
                        <Icon
                          name={this.state.register ? "sign-in" : "signup"}
                        />
                      </Button.Content>
                    </Button>
                  </Segment>

                  {this.state.register ? (
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
                  ) : null}
                </Grid.Column>
              </Grid>

              {!mobile ? <Divider vertical>Or</Divider> : null}
            </Segment>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default WindowSize(Login);
