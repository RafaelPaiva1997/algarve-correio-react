import React from "react";
import ControlledInput from "./ControlledInput";

export default class ControlledSearch extends React.Component {
    constructor(props) {
        super(props);

        this.search = React.createRef();
    }

    render() {
        return (
            <div id="controlled-search" className="dis-flex-col dis-flex-align">
                <ControlledInput
                    type="text"
                    className="transparent-input"
                    fieldset="red-fieldset"
                    legend="red-legend"
                    placeholder="Escreva aqui"
                    text="E-Mail"
                    pr
                />
                <div id="add-button">Procurar Email</div>
            </div>
        );
    }
}
