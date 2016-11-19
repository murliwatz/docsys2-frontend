import React, { Component } from 'react';
import './App.css';
import LoginBox from './LoginBox.js';
import MainMenu from './MainMenu.js';
import HeaderMenu from './HeaderMenu.js';
import Viewer from './Viewer.js';
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super();
    var that = this;
    this._handleMainMenuItemClicked = this._handleMainMenuItemClicked.bind(this);
    this._handleLoggedIn = this._handleLoggedIn.bind(this);
    this.state = {
      "api_url" : "http://localhost/docsys2-api/public",
      "logged_in" : false,
      request: function(path,method,data,successCallback){
        $.ajax(that.state.api_url + path, {
            type: method,
            dataType: "json",
            data:data,
            success: successCallback,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        });    
      }
    };
  }

  componentDidMount() {
    
  }

  componentWillMount() {
    var that = this;
    this.state.request("/auth", "GET",{}, function(data, status, xhr) {
      console.log(data);
      if(data.status == "ok") {
        that.setState({
          "logged_in" : true
        });
      }
    });
  }

  _handleMainMenuItemClicked(item) {
    this.refs.viewer.setState(item);
  }

  _handleLoggedIn() {
    this.setState({
      "logged_in" : true
    })
  }

  getChildContext() {
    return {
      api_url: this.state.api_url,
      request: this.state.request
    };
  }

  render() {
    if(this.state.logged_in) {
      return (
        <div className="App">
          <div className="App-header">
            <h1>docsys</h1>
            <HeaderMenu />
          </div>
          <MainMenu itemClicked={this._handleMainMenuItemClicked} />
          <Viewer ref="viewer" />
        </div>
      );
    } else {
      return (
        <div className="App">
          <LoginBox loggedIn={this._handleLoggedIn} />
        </div>
      );
    }
  }
}

App.contextTypes = {
  api_url: React.PropTypes.string,
  request: React.PropTypes.func
};

App.childContextTypes = {
  api_url: React.PropTypes.string,
  request: React.PropTypes.func
};

export default App;
