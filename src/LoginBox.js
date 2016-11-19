import React, { Component } from 'react';
import './LoginBox.css';
import $ from 'jquery'

class LoginBox extends Component {

  constructor(props) {
    super();
    this._handleLoginClicked = this._handleLoginClicked.bind(this);
    this.state = {
      errorMessage : ""
    }
  }

  componentDidMount() {
    
  }

  _handleLoginClicked() {
    var that = this;
    this.context.request("/auth", "POST", {user: this.refs.username.value}, function(data) {
      console.log(data);
      if(data.status == "ok") {
        that.props.loggedIn();
      } else {
        that.setState({
          errorMessage : data.message
        })
      }
    })
  }

  render() {
    return (
        <div className="LoginBox">
          <h1>docsys</h1>
          <div className="LoginBoxForm">
            <div>{this.state.errorMessage}</div>
            <div>Benutzer:</div><input type="text" ref="username" />
            <div>Passwort:</div><input type="password" ref="password" />
            <input type="button" value="Anmelden" onClick={this._handleLoginClicked} />
          </div>
          <span>Version 2 | Created by Paul Pröll</span>
        </div>
    );
  }
}

LoginBox.contextTypes = {
  api_url: React.PropTypes.string,
  request: React.PropTypes.func
};

export default LoginBox;
