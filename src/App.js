import React, { Component } from 'react';
import './App.css';
import MainMenu from './MainMenu.js';
import HeaderMenu from './HeaderMenu.js';
import Viewer from './Viewer.js';
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super();
    this._handleMainMenuItemClicked = this._handleMainMenuItemClicked.bind(this);
  }

  componentDidMount() {
    
  }

  _handleMainMenuItemClicked(item) {
    this.refs.viewer.setState(item);
  }

  render() {
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
  }
}

export default App;
