import React from "react";
import ListPicker from "../Form/ListPicker";
import EmailArea from "./EmailArea";
import ControlledInput from "../Form/ControlledInput";

export default class SendMail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mailingList: "emails-em-bruto", template: false };

    this.subject = React.createRef();
    this.email = React.createRef();
  }

  render() {
    return (
      <div id="shutdown-screen">
        <div id="send-mail" className="dis-flex-col dis-flex-align">
          <div id="send-mail-title-div" class="dis-flex dis-flex-align">
            <h1 id="send-mail-title">Enviar Email</h1>
            <ListPicker
              className="list-picker-mail"
              value={this.state.mailingList}
              onSelect={e => this.setState({ mailingList: e })}
            />
            <div class="dis-flex dis-flex-align">
              <div
                className="add-button"
                onClick={() => alert("Email Enviado")}
              >
                Enviar
              </div>
              <div
                id="template-button"
                className="add-button"
                onClick={() => this.setState(e => ({ template: !e.template }))}
              >
                {this.state.template ? "Texto" : "Template"}
              </div>
              <div
                className="add-button"
                onClick={() => this.props.updateSending(false)}
              >
                Fechar
              </div>
            </div>
          </div>
          <ControlledInput
            ref={this.subject}
            type="text"
            id="subject-fieldset"
            className="transparent-input"
            fieldset="red-fieldset"
            legend="red-legend"
            placeholder="Escreva aqui"
            text="Assunto"
          />
          {this.state.template ? (
            "Template"
          ) : (
            <EmailArea
              ref={this.email}
              fieldset="red-fieldset"
              legend="red-legend"
              placeholder="Escreva aqui"
              text="Email"
            />
          )}
        </div>
      </div>
    );
  }
}
