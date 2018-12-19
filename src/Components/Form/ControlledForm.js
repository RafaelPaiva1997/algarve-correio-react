import React from "react";
import ControlledInput from "./ControlledInput";

export default class ControlledForm extends React.Component {
    constructor(props) {
        super(props);

        this.rfs = {};
        this.props.fields.forEach(e => (this.rfs[e.var] = React.createRef()));
    }

    render() {
        return (<div id="controlled-form" className="dis-flex-col dis-flex-align">
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
            <div id="add-button">Adicionar Email</div>
        </div>);
    }
}