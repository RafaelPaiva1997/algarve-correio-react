import React from "react";

export default class ControlledInput extends React.Component {
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
            <fieldset className={"flex-center " + this.props.fieldset}>
                {this.props.text && (
                    <legend className={this.props.legend}>
                        {this.props.text}
                    </legend>
                )}
                <input
                    id={this.props.id}
                    type={this.props.type}
                    className={this.props.className}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                />
            </fieldset>
        );
    }
}
