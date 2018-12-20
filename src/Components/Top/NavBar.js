import React, { Component } from "react";
import NavButton from "../Elements/NavButton";
import ControlledForm from "../Form/ControlledForm";
import ControlledSearch from "../Form/ControlledSearch";
import ListPicker from "../Form/ListPicker";

export default class NavBar extends Component {
    render() {
        return (
            <div id="nav-bar" className="dis-flex-col dis-flex-align">
                <ListPicker value={this.props.mailingList} onSelect={this.props.updateMailingList} />
                <ControlledSearch {...this.props} />
                <ControlledForm {...this.props} />
                <NavButton label="Enviar Email" />
            </div>
        );
    }
}
