import React, { Component } from "react";

export default class NavButton extends Component {
  render() {
    return (
      <div id="nav-button" className="dis-flex-align dis-flex-justify" onClick={this.props.onClick}>
        {this.props.label}
      </div>
    );
  }
}
