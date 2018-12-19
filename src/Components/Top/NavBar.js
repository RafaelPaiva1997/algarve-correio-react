import React, { Component } from "react";
import NavButton from "../Elements/NavButton";
import ControlledForm from "../Form/ControlledForm";
import ControlledInput from "../Form/ControlledInput";

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-bar" className="dis-flex-col dis-flex-align">
          <div className="black-box"><ControlledInput
              type="text"
              className="transparent-input"
              fieldset="red-fieldset"
              legend="red-legend"
              placeholder="Escreva aqui"
              text="E-Mail"
          /><div id="add-button">Procurar Email</div></div>
          <ControlledForm fields={fields} />
          <NavButton label="Enviar Email" />
      </div>
    );
  }
}

var fields = [
  ["nome", "Nome", "text"],
  ["telemovel", "Nº Telemóvel", "number"],
  ["email", "E-Mail", "email"]
].map(e => ({ var: e[0], legend: e[1], type: e[2] }));
