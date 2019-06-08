import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class ConnectedAuthRoute extends Component {
  hasPermission = userType => {
    if (this.props.isAuth) {
      switch (userType) {
        case 0:
          return this.props.userType === userType;
        case 1:
          return true;
        case 2:
          return this.props.userType === userType || this.props.userType === 0;
        default:
          return false;
      }
    }
    return false;
  };
  render() {
    let { component: Component, userType, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          this.hasPermission(userType) ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    userType: state.auth.user.user_type
  };
};

const AuthRoute = connect(mapStateToProps)(ConnectedAuthRoute);

export default AuthRoute;
