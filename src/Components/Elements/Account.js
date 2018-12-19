import React, { Component } from "react";

export default class Account extends Component {
  render() {
    return (
      <div id="account" className="dis-flex-align brd-round">
        {["email", "nome", "telefone"].map(e => (
          <span key={e} className={"text-xs td-3 font-info" + 
          (e === "email" ? " td-space-before" : " align-center")}>
            {this.props.item[e]}
          </span>
        ))}
        <i className="fa fa-close"/>
      </div>
    );
  }
}
