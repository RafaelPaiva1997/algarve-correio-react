(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){(function(e){var n=a(33),i=function(t,a,n){return{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({lib:t,action:a,data:n,auth:{id:e.user._id,user:e.user}})}};t.post=function(e,t,a,s){fetch(n.url,i(e,t,a)).then(function(e){return e.json()}).then(s)},t.post_code=function(e,t,a,s){fetch(n.url,i(e,t,a)).then(s)},t.login=function(e,t,a){fetch(n.login,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({data:{login:{username:e,password:t}}})}).then(function(e){return e.json()}).then(a)}}).call(this,a(11))},function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(2),i=a(3),s=a(5),r=a(4),l=a(6),c=a(1),o=a(0),u=a.n(o),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={value:a.props.value},a.getValue=a.getValue.bind(Object(c.a)(Object(c.a)(a))),a.onClickFocus=a.onClickFocus.bind(Object(c.a)(Object(c.a)(a))),a.input=u.a.createRef(),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"getValue",value:function(){return this.state.value}},{key:"onClickFocus",value:function(){this.input.current.focus()}},{key:"render",value:function(){var e=this;return u.a.createElement("fieldset",{className:this.props.fieldset,onClick:this.onClickFocus},this.props.text&&u.a.createElement("legend",{className:this.props.legend},this.props.text),u.a.createElement("input",{ref:this.input,id:this.props.id,type:this.props.type,className:this.props.className,disabled:this.props.disabled,placeholder:this.props.placeholder,value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}))}}]),t}(u.a.Component)},,,,,,,function(e,t,a){"use strict";(function(e){var n=a(2),i=a(3),s=a(5),r=a(4),l=a(6),c=a(1),o=a(0),u=a.n(o),d=a(20),p=a(16),m=a(21),h=a(18),f=a(19),g=(a(34),a(36),a(38),a(40),function(t){function a(t){var i;Object(n.a)(this,a),i=Object(s.a)(this,Object(r.a)(a).call(this,t));var l=t.cookies;return e.user=l.get("user"),e.logged=l.get("logged"),i.state={selected:null,mailingList:"emails-em-bruto",loading:!1,logged:l.get("logged")||!1,user:l.get("user")||{},findKey:{email:{$regex:""}}},i.setUser=i.setUser.bind(Object(c.a)(Object(c.a)(i))),i.select=i.select.bind(Object(c.a)(Object(c.a)(i))),i.clear=i.clear.bind(Object(c.a)(Object(c.a)(i))),i.updateKey=i.updateKey.bind(Object(c.a)(Object(c.a)(i))),i.updateMailingList=i.updateMailingList.bind(Object(c.a)(Object(c.a)(i))),i}return Object(l.a)(a,t),Object(i.a)(a,[{key:"setUser",value:function(t,a){var n=this.props.cookies;e.user=t,e.logged=a,n.set("user",t),n.set("logged",a),this.setState({user:t,logged:a})}},{key:"select",value:function(e){this.setState({selected:e})}},{key:"clear",value:function(e){this.setState({loading:e})}},{key:"updateKey",value:function(e){this.setState({findKey:e})}},{key:"updateMailingList",value:function(e){this.setState({mailingList:e})}},{key:"render",value:function(){return u.a.createElement("div",{id:"app",className:"dis-flex"},!this.state.logged&&u.a.createElement(f.a,{setUser:this.setUser}),this.state.selected&&u.a.createElement(h.a,Object.assign({loading:this.loading,clear:this.clear,selected:this.state.selected,select:this.select},v)),this.state.logged&&u.a.createElement(p.a,{findKey:this.state.findKey,loading:this.loading,selected:this.state.selected,select:this.select,mailingList:this.state.mailingList}),this.state.logged&&u.a.createElement(m.a,Object.assign({loading:this.loading,clear:this.clear,mailingList:this.state.mailingList,updateKey:this.updateKey,updateMailingList:this.updateMailingList,setUser:this.setUser},v)))}}]),a}(o.Component)),v={fields:[["nome","Nome","text"],["telefone","N\xba Telem\xf3vel","tel"],["email","Email","email"]].map(function(e){return{var:e[0],legend:e[1],type:e[2]}})};t.a=Object(d.a)(g)}).call(this,a(11))},function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return v});var n=a(12),i=a(2),s=a(3),r=a(5),l=a(4),c=a(6),o=a(1),u=a(0),d=a.n(u),p=a(9),m=a.n(p),h=a(7),f=a.n(h),g=a(17),v=function(t){function a(t){var n;return Object(i.a)(this,a),(n=Object(r.a)(this,Object(l.a)(a).call(this,t))).state={items:null},n.update=n.update.bind(Object(o.a)(Object(o.a)(n))),n.getItems=n.getItems.bind(Object(o.a)(Object(o.a)(n))),e.getItems=n.getItems,n}return Object(c.a)(a,t),Object(s.a)(a,[{key:"componentWillMount",value:function(){this.update()}},{key:"getItems",value:function(){return this.state.items}},{key:"update",value:function(){var e=this;!this.props.selected&&f.a.post("emails","findLimited",{key:Object(n.a)({},{mailingList:this.props.mailingList},this.props.findKey),inf:0,sup:1e3},function(t){return e.setState({items:t})})}},{key:"componentWillReceiveProps",value:function(e){this.props=e,this.setState({items:null}),this.update()}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{id:"account-list",className:"dis-flex-col"},!this.props.loading&&this.state.items?this.state.items.map(function(t){return d.a.createElement(g.a,Object.assign({key:t.email,item:t},e.props))}):d.a.createElement(m.a,null))}}]),a}(u.Component)}).call(this,a(11))},function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(2),i=a(3),s=a(5),r=a(4),l=a(6),c=a(0),o=a.n(c),u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"account",className:"dis-flex-align brd-round",onClick:function(){return e.props.select(e.props.item)}},o.a.createElement("span",{className:"text-xs td-3 font-info td-space-before"},this.props.item.email),o.a.createElement("span",{className:"text-xs td-3 font-info align-center"},this.props.item.nome),o.a.createElement("span",{className:"text-xs td-3 font-info td-space-after align-right"},this.props.item.telefone))}}]),t}(c.Component)},function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(2),i=a(3),s=a(5),r=a(4),l=a(6),c=a(1),o=a(0),u=a.n(o),d=a(9),p=a.n(d),m=a(7),h=a.n(m),f=a(8),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).rfs={},a.props.fields.forEach(function(e){return a.rfs[e.var]=u.a.createRef()}),a.update=a.update.bind(Object(c.a)(Object(c.a)(a))),a.remove=a.remove.bind(Object(c.a)(Object(c.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"update",value:function(){var e=this,t={mailingList:this.props.selected.mailingList};this.props.fields.forEach(function(a){return t[a.var]=e.rfs[a.var].current.getValue()}),this.props.clear(!0),h.a.post_code("emails","update",{key:{email:this.props.selected.email},update:t},function(){e.props.clear(!1),e.props.select(null)})}},{key:"remove",value:function(){var e=this;this.props.clear(!0),h.a.post_code("emails","deleteOne",{key:{email:this.props.selected.email}},function(){e.props.clear(!1),e.props.select(null)})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"black-background"},u.a.createElement("div",{id:"email-info",class:"dis-flex-col dis-flex-align"},u.a.createElement("h1",{id:"detalhes-email"},"Detalhes Email"),this.props.fields.map(function(t){return u.a.createElement(f.a,{key:t.var,ref:e.rfs[t.var],type:t.type,value:e.props.selected[t.var],className:"transparent-input big-input",fieldset:"red-fieldset big-fieldset",legend:"red-legend big-legend",placeholder:"Escreva aqui",text:t.legend})}),this.props.loading?u.a.createElement(p.a,null):u.a.createElement("div",{className:"dis-flex"},u.a.createElement("div",{className:"add-button button-fixed",onClick:this.update},"Actualizar"),u.a.createElement("div",{className:"add-button button-fixed",onClick:this.remove},"Remover"),u.a.createElement("div",{className:"add-button button-fixed",onClick:function(){return e.props.select(null)}},"Fechar"))))}}]),t}(u.a.Component)},function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(2),i=a(3),s=a(5),r=a(4),l=a(6),c=a(1),o=a(0),u=a.n(o),d=a(7),p=a.n(d),m=a(8),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).username=u.a.createRef(),a.password=u.a.createRef(),a.login=a.login.bind(Object(c.a)(Object(c.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"login",value:function(){var e=this;""!==this.username.current.getValue()&&this.password.current.getValue()?p.a.login(this.username.current.getValue(),this.password.current.getValue(),function(t){return t==={}?alert("Login Inv\xe1lido!"):e.props.setUser(t,!0)}):alert("Por favor preencha os campos!")}},{key:"render",value:function(){return u.a.createElement("div",{class:"background-block"},u.a.createElement("div",{id:"login"},u.a.createElement("img",{id:"login-logo",alt:"logo",src:"https://www.metalpro.pt/img/metalpro.png?1548892429"}),u.a.createElement(m.a,{ref:this.username,type:"text",className:"transparent-input big-input",fieldset:"red-fieldset big-fieldset",legend:"red-legend big-legend",placeholder:"Escreva aqui",text:"Username"}),u.a.createElement(m.a,{ref:this.password,type:"password",className:"transparent-input big-input",fieldset:"red-fieldset big-fieldset",legend:"red-legend big-legend",placeholder:"Escreva aqui",text:"Password"}),u.a.createElement("div",{className:"add-button button-fixed",onClick:this.login},"Login")))}}]),t}(u.a.Component)},,function(e,t,a){"use strict";var n=a(2),i=a(3),s=a(5),r=a(4),l=a(6),c=a(0),o=a.n(c),u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"nav-button",className:"dis-flex-align dis-flex-justify",onClick:this.props.onClick},this.props.label)}}]),t}(c.Component),d=a(12),p=a(1),m=a(9),h=a.n(m),f=a(7),g=a.n(f),v=a(8),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={loading:!1},a.rfs={},a.props.fields.forEach(function(e){return a.rfs[e.var]=o.a.createRef()}),a.add=a.add.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"add",value:function(){var e=this,t={};this.props.fields.forEach(function(a){return t[a.var]=e.rfs[a.var].current.getValue()}),this.props.clear(!0),g.a.post_code("emails","add",{item:Object(d.a)({},{mailingList:this.props.mailingList},t)},function(){return e.props.clear(!1)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"controlled-form",className:"dis-flex-col dis-flex-align"},this.props.fields.map(function(t){return o.a.createElement(v.a,{key:t.var,ref:e.rfs[t.var],type:t.type,className:"transparent-input",fieldset:"red-fieldset",legend:"red-legend",placeholder:"Escreva aqui",text:t.legend})}),this.props.loading?o.a.createElement(h.a,null):o.a.createElement("div",{className:"add-button button-fixed",onClick:this.add},"Adicionar"))}}]),t}(o.a.Component),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).search=o.a.createRef(),a.onClick=a.onClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"onClick",value:function(){this.search.current.getValue()&&this.props.updateKey({email:{$regex:this.search.current.getValue()}})}},{key:"render",value:function(){return o.a.createElement("div",{id:"controlled-search",className:"dis-flex-col dis-flex-align"},o.a.createElement(v.a,{ref:this.search,type:"text",className:"transparent-input",fieldset:"red-fieldset",legend:"red-legend",placeholder:"Escreva aqui",text:"Email"}),this.props.loading?o.a.createElement(h.a,null):o.a.createElement("div",{className:"add-button button-fixed",onClick:this.onClick},"Procurar"))}}]),t}(o.a.Component),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={value:a.props.value},a.getValue=a.getValue.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"getValue",value:function(){return this.state.value}},{key:"render",value:function(){var e=this;return o.a.createElement("select",{id:"list-picker",className:this.props.className,value:this.state.value,onChange:function(t){e.setState({value:t.target.value}),e.props.onSelect(t.target.value)}},o.a.createElement("option",{value:"emails-em-bruto"},"Emails em Bruto"),o.a.createElement("option",{value:"emails-validados"},"Emails Validados"),o.a.createElement("option",{value:"emails-captados"},"Emails Captados"))}}]),t}(o.a.Component),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={value:a.props.value},a.getValue=a.getValue.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"getValue",value:function(){return this.state.value}},{key:"render",value:function(){var e=this;return o.a.createElement("fieldset",{className:this.props.fieldset,onClick:this.onClickFocus},this.props.text&&o.a.createElement("legend",{className:this.props.legend},this.props.text),o.a.createElement("textarea",{id:"email-area",value:this.state.value,placeholder:this.props.placeholder,onChange:function(t){return e.setState({value:t.target.value})}}))}}]),t}(o.a.Component),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={mailingList:"emails-em-bruto",template:!1,loading:!1},a.subject=o.a.createRef(),a.email=o.a.createRef(),a.template=o.a.createRef(),a.send=a.send.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"send",value:function(){var e=this,t={from:"noreply@marketing.metalpro.pt",to:this.state.mailingList,subject:this.subject.current.getValue(),text:this.email.current.getValue()};this.state.template&&(t.html=this.template.current.innerHTML),this.setState({loading:!0}),g.a.post_code("emails","bulkMail",t,function(t){alert("Email Enviado!"),e.setState({loading:!1})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"shutdown-screen"},o.a.createElement("div",{id:"send-mail",className:"dis-flex-col dis-flex-align"},o.a.createElement("div",{id:"send-mail-title-div",className:"dis-flex dis-flex-align"},o.a.createElement("h1",{id:"send-mail-title"},"Enviar Email"),o.a.createElement(O,{className:"list-picker-mail",value:this.state.mailingList,onSelect:function(t){return e.setState({mailingList:t})}}),this.state.loading?o.a.createElement(h.a,null):o.a.createElement("div",{className:"dis-flex dis-flex-align"},o.a.createElement("div",{className:"add-button",onClick:this.send},"Enviar"),o.a.createElement("div",{id:"template-button",className:"add-button",onClick:function(){return e.setState(function(e){return{template:!e.template}})}},this.state.template?"Texto":"Template"),o.a.createElement("div",{className:"add-button",onClick:function(){return e.props.updateSending(!1)}},"Fechar"))),o.a.createElement(v.a,{ref:this.subject,type:"text",id:"subject-fieldset",className:"transparent-input",fieldset:"red-fieldset",legend:"red-legend",placeholder:"Escreva aqui",text:"Assunto"}),this.state.template&&o.a.createElement("div",{ref:this.template,id:"template-holder",dangerouslySetInnerHTML:{__html:k}}),o.a.createElement(E,{ref:this.email,fieldset:"red-fieldset email-fieldset",legend:"red-legend",placeholder:"Escreva aqui",text:"Email"})))}}]),t}(o.a.Component),k='<div style="width: 500px; height: 500px; background-color: #d6ae10; overflow: hidden;"><div style="display: flex; background-color: white; width: 500px; height: 20%; padding-left: 4%;"><img style="height:100%;" src="https://www.metalpro.pt/img/metalpro.png?1545522387" /></div><div style="margin-top: 6.5%; margin-left: 6%; height: 65%; width: 85%; background-color: white; font-family: sans-serif; font-size: 12px; padding: 7px; border-radius: 10px; outline: none; text-align:justify;" contenteditable="true"><div style="font-size: 16px; text-align: center; width=100%;">T\xedtulo</div><div></br></div><div></br></div>Escreva aqui<div></br></div><div></br></div><div style="width: 100%; text-align: center;"><a href="http://metalpro-newsletter.surge.sh/" style="color: #d6ae10; text-align: center;">Carregue aqui para validar os seus dados.</a></div></div></div>';a.d(t,"a",function(){return x});var x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={sending:!1},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"nav-bar",className:"dis-flex-col dis-flex-align"},o.a.createElement(O,{value:this.props.mailingList,onSelect:this.props.updateMailingList}),o.a.createElement(j,this.props),o.a.createElement(b,this.props),o.a.createElement(u,{label:"Enviar Email",onClick:function(){return e.setState(function(e){return{sending:!e.sending}})}}),o.a.createElement(u,{label:"Logout",onClick:function(){return e.props.setUser({},!1)}}),this.state.sending&&o.a.createElement(y,{updateSending:function(t){return e.setState({sending:t})}}))}}]),t}(c.Component)},function(e,t,a){e.exports=a(44)},,,,,,,,,,,function(e){e.exports={url:"https://thawing-cliffs-93872.herokuapp.com/api",login:"https://thawing-cliffs-93872.herokuapp.com/login"}},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),r=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(15);a(42);r.a.render(i.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[22,2,1]]]);
//# sourceMappingURL=main.941b94c0.chunk.js.map