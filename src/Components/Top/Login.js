import React from "react";
import AutoFetch from "../../AutoFetch/AutoFetch";
import ControlledInput from "../Form/ControlledInput";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.username = React.createRef();
    this.password = React.createRef();

    this.login = this.login.bind(this);
  }

  login() {
    if (
      this.username.current.getValue() !== "" &&
      this.password.current.getValue()
    )
      AutoFetch.login(
        this.username.current.getValue(),
        this.password.current.getValue(),
        result =>
          result === {}
            ? alert("Login Inválido!")
            : this.props.setUser(result, true)
      );
    else alert("Por favor preencha os campos!");
  }

  render() {
    return (
      <div class="background-block">
        <div id="login">
          <img
            id="login-logo"
            alt="logo"
            src="https://www.metalpro.pt/img/metalpro.png?1548892429"
          />
          <ControlledInput
            ref={this.username}
            type="text"
            className="transparent-input big-input"
            fieldset="red-fieldset big-fieldset"
            legend="red-legend big-legend"
            placeholder="Escreva aqui"
            text={"Username"}
          />
          <ControlledInput
            ref={this.password}
            type="password"
            className="transparent-input big-input"
            fieldset="red-fieldset big-fieldset"
            legend="red-legend big-legend"
            placeholder="Escreva aqui"
            text={"Password"}
          />
          <div className="add-button button-fixed" onClick={this.login}>
            Login
          </div>
        </div>
      </div>
    );
  }
}
