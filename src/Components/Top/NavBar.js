import React, { Component } from "react";
import NavButton from "../Elements/NavButton";
import ControlledForm from "../Form/ControlledForm";
import ControlledSearch from "../Form/ControlledSearch";

export default class NavBar extends Component {
    render() {
        return (
            <div id="nav-bar" className="dis-flex-col dis-flex-align">
                <ControlledSearch />
                <ControlledForm fields={this.props.fields} />
                <NavButton label="Enviar Email" />
            </div>
        );
    }
}
