import React, { Component } from "react";

export default class Account extends Component {
    render() {
        return (
            <div id="account" className="dis-flex-align brd-round" onClick={() => this.props.select(this.props.item)}>
                <span className="text-xs td-3 font-info td-space-before">{this.props.item.email}</span>
                <span className="text-xs td-3 font-info align-center">{this.props.item.nome}</span>
                <span className="text-xs td-3 font-info td-space-after align-right">{this.props.item.telefone}</span>
            </div>
        );
    }
}
