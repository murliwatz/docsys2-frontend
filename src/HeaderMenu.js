import React, { Component } from 'react';
import $ from 'jquery'

class HeaderMenu extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
        <ul className="headerMenu">
            <li><a href="#">Paul Pröll</a></li>
            <li><a href="#"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a></li>
          </ul>
    );
  }
}

export default HeaderMenu;
