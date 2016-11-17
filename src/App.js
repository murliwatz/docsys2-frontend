import React, { Component } from 'react';
import './App.css';
import MainMenu from './MainMenu.js';
import HeaderMenu from './HeaderMenu.js';
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    $(".Viewer").css({
      "position" : "absolute",
      "left" : $(".mainMenu").width(),
      "top" : $(".App-header").height(),
      "width" : $(window).width() - $(".mainMenu").width(),
      "height" : $(window).height() - $(".App-header").height()
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>docsys</h1>
          <HeaderMenu />
        </div>
        <MainMenu />
        <div className="Viewer">
          <div className="ViewHeader">
            Jahr: <select><option>2016 / 2017</option></select>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
