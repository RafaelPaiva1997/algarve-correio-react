import React, { Component } from "react";
import AccountList from "./Components/Top/AccountList";
import NavBar from "./Components/Top/NavBar";
import EmailInfo from "./Components/Top/EmailInfo";
import "./Components/Top/Top.css";
import "./Components/Form/Form.css";
import "./Components/Elements/Elements.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { selected: null };

        this.select = this.select.bind(this);
    }

    select(e) {
        this.setState({ selected: e });
    }

    render() {
        return (
            <div id="app" className="dis-flex">
                {this.state.selected && (
                    <EmailInfo selected={this.state.selected} select={this.select} {...props} />
                )}
                <AccountList select={this.select} />
                <NavBar {...props} />
            </div>
        );
    }
}

var props = {
    fields: [
        ["nome", "Nome", "text"],
        ["telefone", "Nº Telemóvel", "number"],
        ["email", "E-Mail", "email"]
    ].map(e => ({ var: e[0], legend: e[1], type: e[2] }))
};

export default App;
