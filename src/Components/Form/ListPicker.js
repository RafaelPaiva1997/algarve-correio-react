import React from "react";

export default class ListPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.value };

    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    return this.state.value;
  }

  render() {
    return (
      <select
        id="list-picker"
        className={this.props.className}
        value={this.state.value}
        onChange={e => {
          this.setState({ value: e.target.value });
          this.props.onSelect(e.target.value);
        }}
      >
        <option value="emails-em-bruto">Emails em Bruto</option>
        <option value="emails-validados">Emails Validados</option>
        <option value="emails-captados">Emails Captados</option>
      </select>
    );
  }
}
