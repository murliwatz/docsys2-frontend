import React, { Component } from 'react';
import $ from 'jquery'

class MainMenu extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    this.adjustMenu();
    this.initMenuEffects();
  }

  initMenuEffects() {
    $(".mainMenu li a").on("click", function(){
      var $submenu = $(this).parent().children("ul");
      if($submenu.is(":visible")) {
        $(this).children(".fa-angle-double-down").addClass("fa-angle-double-right").removeClass("fa-angle-double-down");
      } else {
        $(this).children(".fa-angle-double-right").addClass("fa-angle-double-down").removeClass("fa-angle-double-right");
      }
      $submenu.slideToggle();
    })
  }

  adjustMenu() {
    $(".mainMenu").height($(window).height() - $(".App-header").height());
    $(window).on("resize", function() {
      $(".mainMenu").height($(window).height() - $(".App-header").height());
    })
  }

  render() {
    return (
        <div className="mainMenu">
          <ul>
            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Dokumente</a>
              <ul>
                <li><a href="#">Verlaufsdokumentationen</a></li>
                <li><a href="#">Jahreszielplanungen</a></li>
              </ul>
            </li>
            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Einstellungen</a></li>
          </ul>
        </div>
    );
  }
}

export default MainMenu;
