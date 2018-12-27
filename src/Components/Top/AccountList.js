import React, { Component } from "react";
import Loading from "react-loading-animation";
import AutoFetch from "../../AutoFetch/AutoFetch";
import Account from "../Elements/Account";

export default class AccountList extends Component {
  constructor(props) {
    super(props);

    this.state = { items: null };

    this.update = this.update.bind(this);
    this.getItems = this.getItems.bind(this);
    
    global.getItems = this.getItems;
  }

  componentWillMount() {
    this.update();
  }

  getItems() {
    return this.state.items;
  }

  update() {
    !this.props.selected && AutoFetch.post(
      "emails",
      "findLimited",
      {
        key: {
          ...{
            mailingList: this.props.mailingList
          },
          ...this.props.findKey
        },
        inf: 0,
        sup: 1000
      },
      res => this.setState({ items: res })
    );
  }

  componentWillReceiveProps(props) {
    this.props = props;
    this.setState({ items: null });
    this.update();
  }

  render() {
    return (
      <div id="account-list" className="dis-flex-col">
        {!this.props.loading && this.state.items ? (
          this.state.items.map(e => (
            <Account key={e.email} item={e} {...this.props} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
