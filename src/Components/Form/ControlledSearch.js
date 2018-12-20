import React from "react";
import Loading from "react-loading-animation";
import ControlledInput from "./ControlledInput";

export default class ControlledSearch extends React.Component {
  constructor(props) {
    super(props);

    this.search = React.createRef();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.updateKey({ email: { $regex: this.search.current.getValue() } });
  }

  render() {
    return (
      <div id="controlled-search" className="dis-flex-col dis-flex-align">
        <ControlledInput
          ref={this.search}
          type="text"
          className="transparent-input"
          fieldset="red-fieldset"
          legend="red-legend"
          placeholder="Escreva aqui"
          text="Email"
        />
        {this.props.loading ? (
          <Loading />
        ) : (
          <div className="add-button" onClick={this.onClick}>
            Procurar
          </div>
        )}
      </div>
    );
  }
}
