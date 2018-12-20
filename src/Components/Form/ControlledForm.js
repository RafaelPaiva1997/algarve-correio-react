import React from "react";
import Loading from "react-loading-animation";
import AutoFetch from "../../AutoFetch/AutoFetch";
import ControlledInput from "./ControlledInput";

export default class ControlledForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };

    this.rfs = {};
    this.props.fields.forEach(e => (this.rfs[e.var] = React.createRef()));

    this.add = this.add.bind(this);
  }

  add() {
    var out = {};
    this.props.fields.forEach(
      e => (out[e.var] = this.rfs[e.var].current.getValue())
    );

    this.props.clear(true);
    AutoFetch.post_code(
      "emails",
      "add",
      {
        item: { ...{ mailingList: this.props.mailingList }, ...out }
      },
      () => this.props.clear(false)
    );
  }

  render() {
    return (
      <div id="controlled-form" className="dis-flex-col dis-flex-align">
        {this.props.fields.map(e => (
          <ControlledInput
            key={e.var}
            ref={this.rfs[e.var]}
            type={e.type}
            className="transparent-input"
            fieldset="red-fieldset"
            legend="red-legend"
            placeholder="Escreva aqui"
            text={e.legend}
          />
        ))}
        {this.props.loading ? (
          <Loading />
        ) : (
          <div id="add-button" onClick={this.add}>
            Adicionar
          </div>
        )}
      </div>
    );
  }
}
