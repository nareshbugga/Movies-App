import { Component } from "react";
import { Navigate } from "react-router-dom";

import Cookies from "js-cookie";
import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
  };

  onChangeUserUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangeUserPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;

    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    history.replace("/");
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(response);
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  render() {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      <Navigate to="/" />;
    }
    const { username, password, showSubmitError, errorMsg } = this.state;
    return (
      <div className="movies-login-back-ground">
        <form className="form-back-ground" onSubmit={this.submitForm}>
          <h1 className="login-form-heading">Login</h1>
          <div>
            <div className="input-container">
              <label htmlFor="username" className="input-label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                className="input-value"
                onChange={this.onChangeUserUserName}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="input-label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                className="input-value"
                onChange={this.onChangeUserPassword}
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          {showSubmitError ? <p className="error-msg">{errorMsg}</p> : null}
        </form>
      </div>
    );
  }
}

export default LoginForm;
