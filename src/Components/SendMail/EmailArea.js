import React from "react";

export default class EmailArea extends React.Component {
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
      <fieldset className={this.props.fieldset} onClick={this.onClickFocus}>
        {this.props.text && (
          <legend className={this.props.legend}>{this.props.text}</legend>
        )}
        <textarea
          id="email-area"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={e => this.setState({ value: e.target.value })}
        />
      </fieldset>
    );
  }
}
