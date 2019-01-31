import React, { Component } from "react";
import { withCookies } from "react-cookie";
import AccountList from "./Components/Top/AccountList";
import NavBar from "./Components/Top/NavBar";
import EmailInfo from "./Components/Top/EmailInfo";
import Login from "./Components/Top/Login";
import "./Components/SendMail/SendMail.css";
import "./Components/Top/Top.css";
import "./Components/Form/Form.css";
import "./Components/Elements/Elements.css";

class App extends Component {
  constructor(props) {
    super(props);

    const { cookies } = props;

    global.user = cookies.get("user");
    global.logged = cookies.get("logged");

    this.state = {
      selected: null,
      mailingList: "emails-em-bruto",
      loading: false,
      logged: cookies.get("logged") || false,
      user: cookies.get("user") || {},
      findKey: { email: { $regex: "" } }
    };

    this.setUser = this.setUser.bind(this);
    this.select = this.select.bind(this);
    this.clear = this.clear.bind(this);
    this.updateKey = this.updateKey.bind(this);
    this.updateMailingList = this.updateMailingList.bind(this);
  }

  setUser(user, logged) {

    const { cookies } = this.props;

    global.user = user;
    global.logged = logged;
    cookies.set("user", user);
    cookies.set("logged", logged);
    this.setState({ user, logged });
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
        {!this.state.logged && <Login setUser={this.setUser} />}
        {this.state.selected && (
          <EmailInfo
            loading={this.loading}
            clear={this.clear}
            selected={this.state.selected}
            select={this.select}
            {...props}
          />
        )}
        {this.state.logged && (
          <AccountList
            findKey={this.state.findKey}
            loading={this.loading}
            selected={this.state.selected}
            select={this.select}
            mailingList={this.state.mailingList}
          />
        )}
        {this.state.logged && (
          <NavBar
            loading={this.loading}
            clear={this.clear}
            mailingList={this.state.mailingList}
            updateKey={this.updateKey}
            updateMailingList={this.updateMailingList}
            setUser={this.setUser}
            {...props}
          />
        )}
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

export default withCookies(App);
