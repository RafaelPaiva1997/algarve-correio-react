import React, { Component } from 'react';
import AccountList from "./Components/Top/AccountList";
import NavBar from './Components/Top/NavBar';
import "./Components/Top/Top.css"
import "./Components/Form/Form.css"
import "./Components/Elements/Elements.css"

class App extends Component {
  render() {
    return (
      <div id="app" className="dis-flex">
        <AccountList />
        <NavBar />
      </div>
    );
  }
}

export default App;
