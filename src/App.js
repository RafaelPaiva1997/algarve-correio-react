import React, { Component } from "react";
import AccountList from "./Components/Top/AccountList";
import NavBar from "./Components/Top/NavBar";
import EmailInfo from "./Components/Top/EmailInfo";
import "./Components/SendMail/SendMail.css";
import "./Components/Top/Top.css";
import "./Components/Form/Form.css";
import "./Components/Elements/Elements.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      mailingList: "emails-em-bruto",
      loading: false,
      findKey: { email: { $regex: "" } }
    };

    this.select = this.select.bind(this);
    this.clear = this.clear.bind(this);
    this.updateKey = this.updateKey.bind(this);
    this.updateMailingList = this.updateMailingList.bind(this);
  }

  select(e) {
    this.setState({ selected: e });
  }

  clear(current) {
    this.setState({ loading: current });
  }

  updateKey(e) {
    this.setState({ findKey: e });
  }

  updateMailingList(e) {
    this.setState({ mailingList: e });
  }

  render() {
    return (
      <div id="app" className="dis-flex">
        {this.state.selected && (
          <EmailInfo
            loading={this.loading}
            clear={this.clear}
            selected={this.state.selected}
            select={this.select}
            {...props}
          />
        )}
        <AccountList
          findKey={this.state.findKey}
          loading={this.loading}
          select={this.select}
          mailingList={this.state.mailingList}
        />
        <NavBar
          loading={this.loading}
          clear={this.clear}
          mailingList={this.state.mailingList}
          updateKey={this.updateKey}
          updateMailingList={this.updateMailingList}
          {...props}
        />
      </div>
    );
  }
}

var props = {
  fields: [
    ["nome", "Nome", "text"],
    ["telefone", "Nº Telemóvel", "tel"],
    ["email", "Email", "email"]
  ].map(e => ({ var: e[0], legend: e[1], type: e[2] }))
};

export default App;
