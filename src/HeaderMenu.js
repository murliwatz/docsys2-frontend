import React, { Component } from 'react';
import './HeaderMenu.css';
import $ from 'jquery'

class HeaderMenu extends Component {

  constructor(props) {
    super();
    this.state = {
      user: {
        first_name: "#",
        last_name: "#"
      }
    }
  }

  componentDidMount() {
    var that = this;
    $.get(this.context.api_url + "/auth", function(data) {
      that.setState({
        user: data.user
      })
    })
  }

  render() {
    return (
        <ul className="headerMenu">
            <li><a href="#">{this.state.user.last_name} {this.state.user.first_name}</a></li>
            <li><a href="#"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a></li>
          </ul>
    );
  }
}

HeaderMenu.contextTypes = {
  api_url: React.PropTypes.string
};

export default HeaderMenu;
