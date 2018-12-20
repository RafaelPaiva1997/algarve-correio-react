import React from "react";
import Loading from "react-loading-animation";
import AutoFetch from "../../AutoFetch/AutoFetch";
import ControlledInput from "../Form/ControlledInput";

export default class EmailInfo extends React.Component {
  constructor(props) {
    super(props);

    this.rfs = {};
    this.props.fields.forEach(e => (this.rfs[e.var] = React.createRef()));

    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  update() {
    var out = {mailingList: this.props.selected.mailingList};
    this.props.fields.forEach(
      e => (out[e.var] = this.rfs[e.var].current.getValue())
    );

    this.props.clear(true);
    AutoFetch.post_code(
      "emails",
      "update",
      {
        key: { email: this.props.selected.email },
        update: out
      },
      () => {this.props.clear(false); this.props.select(null)}
    );
  }
  

  remove() {
    this.props.clear(true);
    AutoFetch.post_code("emails", "deleteOne", {
      key: { email: this.props.selected.email }
    }, () => {this.props.clear(false); this.props.select(null)});
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
          {this.props.loading ? (
            <Loading />
          ) : (
            <div class="dis-flex">
              <div className="add-button"  onClick={this.update}>Actualizar</div>
              <div className="add-button" onClick={this.remove}>
                Remover
              </div>
              <div className="add-button" onClick={() => this.props.select(null)}>
                Fechar
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
