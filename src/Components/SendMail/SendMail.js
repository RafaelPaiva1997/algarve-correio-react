import React from "react";
import ListPicker from "../Form/ListPicker";
import EmailArea from "./EmailArea";
import Loading from "react-loading-animation";
import AutoFetch from "../../AutoFetch/AutoFetch";
import ControlledInput from "../Form/ControlledInput";

export default class SendMail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mailingList: "emails-em-bruto",
      template: false,
      loading: false
    };

    this.subject = React.createRef();
    this.email = React.createRef();
    this.template = React.createRef();

    this.send = this.send.bind(this);
  }

  send() {
    var data = {
      from: "rafael@paiva.it",
      to: this.state.mailingList,
      subject: this.subject.current.getValue(),
      text: this.email.current.getValue()
    };

    if (this.state.template) data.html = this.template.current.innerHTML;

    this.setState({ loading: true });
    AutoFetch.post("emails", "bulkMail", data, e => {
      alert(JSON.stringify(e));
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div id="shutdown-screen">
        <div id="send-mail" className="dis-flex-col dis-flex-align">
          <div id="send-mail-title-div" className="dis-flex dis-flex-align">
            <h1 id="send-mail-title">Enviar Email</h1>
            <ListPicker
              className="list-picker-mail"
              value={this.state.mailingList}
              onSelect={e => this.setState({ mailingList: e })}
            />
<<<<<<< HEAD
            {this.state.loading ? (
              <Loading />
            ) : (
              <div className="dis-flex dis-flex-align">
                <div className="add-button" onClick={this.send}>
                  Enviar
                </div>
                <div
                  id="template-button"
                  className="add-button"
                  onClick={() =>
                    this.setState(e => ({ template: !e.template }))
                  }
                >
                  {this.state.template ? "Texto" : "Template"}
                </div>
                <div
                  className="add-button"
                  onClick={() => this.props.updateSending(false)}
                >
                  Fechar
                </div>
=======
            <div className="dis-flex dis-flex-align">
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
>>>>>>> 6bc0805390cf2a9b0f7614ba871f7d223fb897c3
              </div>
            )}
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
          {this.state.template && (
            <div
              ref={this.template}
              id="template-holder"
              dangerouslySetInnerHTML={{ __html: template }}
            />
          )}
          <EmailArea
            ref={this.email}
            fieldset="red-fieldset email-fieldset"
            legend="red-legend"
            placeholder="Escreva aqui"
            text="Email"
          />
        </div>
      </div>
    );
  }
}

var template =
  '<div style="width: 500px; height: 500px; background-color: #d6ae10; overflow: hidden;"><div style="display: flex; background-color: white; width: 500px; height: 20%; padding-left: 4%;"><img style="height:100%;" src="https://www.metalpro.pt/img/metalpro.png?1545522387" /></div><div style="margin-top: 6.5%; margin-left: 6%; height: 65%; width: 85%; background-color: white; font-family: sans-serif; font-size: 12px; padding: 7px; border-radius: 10px; outline: none; text-align:justify;" contenteditable="true"><div style="font-size: 16px; text-align: center; width=100%;">Título</div><div></br></div><div></br></div>Escreva aqui<div></br></div><div></br></div><div style="width: 100%; text-align: center;"><a href="http://metal-pro.surge.sh/emailverify/rafael@paiva.its" style="color: #d6ae10; text-align: center;">Carregue aqui para validar os seus dados.</a></div></div></div>';
