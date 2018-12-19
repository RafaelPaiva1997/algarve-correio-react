import React from "react";
import ControlledInput from "../Form/ControlledInput";

export default class EmailInfo extends React.Component {
    constructor(props) {
        super(props);

        this.rfs = {};
        this.props.fields.forEach(e => (this.rfs[e.var] = React.createRef()));
    }

    render() {
        return (
            <div className="black-background">
                <div id="email-info" class="dis-flex-col dis-flex-align">
                    <h1 id="detalhes-email">Detalhes Email</h1>
                    {this.props.fields.map(e => (
                        <ControlledInput
                            key={e.var}
                            ref={this.rfs[e.var]}
                            type={e.type}
                            value={this.props.selected[e.var]}
                            className="transparent-input big-input"
                            fieldset="red-fieldset big-fieldset"
                            legend="red-legend big-legend"
                            placeholder="Escreva aqui"
                            text={e.legend}
                        />
                    ))}
                    <div class="dis-flex">
                        <div id="add-button">Actualizar</div>
                        <div id="add-button">Remover</div>
                        <div
                            id="add-button"
                            onClick={() => this.props.select(null)}
                        >
                            Fechar
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
