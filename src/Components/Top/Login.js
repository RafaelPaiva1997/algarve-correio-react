import React from "react";
import Loading from "react-loading-animation";
import AutoFetch from "../../AutoFetch/AutoFetch";
import ControlledInput from "../Form/ControlledInput";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loading: false };

        this.username = React.createRef();
        this.password = React.createRef();

        this.login = this.login.bind(this);
    }

    login() {
        if (
            this.username.current.getValue() !== "" &&
            this.password.current.getValue()
        ) {
            this.setState({ loading: true });
            AutoFetch.login(
                this.username.current.getValue(),
                this.password.current.getValue(),
                result => {
                    if (!result.username) alert("Login Inválido!");
                    else this.props.setUser(result, true);
                    this.setState({ loading: false });
                }
            );
        } else alert("Por favor preencha os campos!");
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
                    {this.state.loading ? (
                        <Loading />
                    ) : (
                        <div
                            className="add-button button-fixed"
                            onClick={this.login}
                        >
                            Login
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
