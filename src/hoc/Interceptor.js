import axios from "axios";
import { connect } from "react-redux";
import React, { Component } from "react";
import { updateToken } from "../components/redux/actions/actions";
import { DEAUTHENTICATE } from "../components/redux/constants/index";
import { store } from "../components/redux/store";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  timeout: 1000
});

instance.interceptors.request.use(
  request => {
    const token = store.getState().auth.token;
    request.headers["Authorization"] = `Bearer ${token}`;

    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    const header = response.headers.authorization;

    if (header) {
      const token = header.substr(7);
      console.log(token);
      if (token) {
        store.dispatch(updateToken(token));
      }
    }
    return response;
  },
  error => {
    switch (error.response.status) {
      case 401:
        store.dispatch({ type: DEAUTHENTICATE, payload: "" });
        break;
      default:
        console.log(error);
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
