import React from "react";
import { Button, Icon, Form, Popup, Message } from "semantic-ui-react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { reduxForm, Field, SubmissionError } from "redux-form";
import { Required, Email, PasswordStrength, Confirm } from "./Validation";
import { connect } from "react-redux";
import {
  modifyLoginForm,
  addRegisterSucces,
  deleteRegisterSucces
} from "../redux/actions/actions";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Aux from "../../hoc/aux";

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
        content="Introduceti numarul de pe legitimatie. Daca nu aveti una probabil nu ar trebui sa va puteti face un cont"
        on="focus"
        disabled={input.name !== "legitimation_id"}
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

const ConnectedRegisterForm = props => {
  const { invalid, error } = props;
  const submitHandle = async data => {
    if (!invalid) {
      const { first_name, last_name, email, password, legitimation_id } = data;
      const newUser = {
        first_name,
        last_name,
        email,
        password,
        legitimation_id
      };
      try {
        const response = await axios.post("/register", newUser);
        const { first_name, last_name } = response.data.data;
        const succesMessage = `Salut ${first_name} ${last_name}. ${
          response.data.message
        }!`;
        props.addRegisterSucces(succesMessage);

        setTimeout(() => {
          props.history.push("/");
          props.modifyLoginForm({
            open: false,
            register: props.loginModal.register
          });
        }, 5000);
      } catch (e) {
        if (e.response) {
          const field = Object.keys(e.response.data.data)[0];
          const errorMsg = Object.values(e.response.data.data)[0][0];
          throw new SubmissionError({
            [field]: errorMsg
          });
        }
      }
    }
  };
  return (
    <Aux>
      <Form>
        <Field
          component={FormField}
          name="first_name"
          placeholder="Prenume..."
          required
          icon="user"
          iconPosition="left"
          label="Prenume"
          validate={[Required]}
        />
        <Field
          name="last_name"
          component={FormField}
          required
          icon="user"
          iconPosition="left"
          label="Nume de familie"
          placeholder="Nume de familie..."
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
          placeholder="Email..."
          type="email"
          validate={[Required, Email]}
        />
        <Field
          name="password"
          component={FormField}
          required
          icon="lock"
          iconPosition="left"
          label="Parola"
          placeholder="Parola"
          type="password"
          validate={[Required, PasswordStrength]}
        />
        <Field
          name="password_confirmation"
          component={FormField}
          required
          icon="lock"
          iconPosition="left"
          label="Confirma parola"
          placeholder="Confirma parola"
          type="password"
          validate={[Required]}
        />
        <Field
          name="legitimation_id"
          component={FormField}
          required
          icon="id card"
          iconPosition="left"
          label="Legitimatia"
          placeholder="Numarul de pe legitimatie"
          validate={[Required]}
        />

        <Button
          onClick={props.handleSubmit(submitHandle)}
          animated
          attached="bottom"
          disabled={invalid}
        >
          <Button.Content visible>Cont nou</Button.Content>
          <Button.Content hidden>
            <Icon name="signup" />
          </Button.Content>
        </Button>
      </Form>
      {props.registerSucces ? (
        <Message success>
          <Message.Content>{props.registerSucces}</Message.Content>
        </Message>
      ) : null}
    </Aux>
  );
};

const formConfiguration = {
  form: "register-form",
  validate: Confirm
};

const mapStateToProps = state => {
  return {
    loginModal: state.showCarousel.loginModal,
    registerSucces: state.showCarousel.registerSucces
  };
};

function mapDispatchToProps(dispatch) {
  return {
    modifyLoginForm: loginModal => dispatch(modifyLoginForm(loginModal)),
    addRegisterSucces: registerSucces =>
      dispatch(addRegisterSucces(registerSucces)),
    deleteRegisterSucces: registerSucces =>
      dispatch(deleteRegisterSucces(registerSucces))
  };
}

const RegisterForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedRegisterForm);

export default withRouter(reduxForm(formConfiguration)(RegisterForm));
