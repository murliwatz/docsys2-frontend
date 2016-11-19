import React, { Component } from 'react';
import './MainMenu.css';
import $ from 'jquery'

class MainMenu extends Component {

  constructor(props) {
    super();
    this._handleMenuItemClick = this._handleMenuItemClick.bind(this);
  }

  componentDidMount() {
    this.design();
  }

  design() {
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

  _handleMenuItemClick(e) {
  	$(".mainMenu ul li a").removeClass("activeItem");
  	$(e.target).addClass("activeItem");
  	this.props.itemClicked({
  		viewType: $(e.target).attr("data-view"),
  		docType: $(e.target).attr("data-item")
  	});
  }

  render() {
    return (
        <div className="mainMenu">
          <ul>
            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Dokumente</a>
              <ul>
                <li><a href="#" data-item="vd" data-view="DocumentCollection" onClick={this._handleMenuItemClick}>Verlaufsdokumentationen</a></li>
                <li><a href="#" data-item="jze" data-view="DocumentCollection" onClick={this._handleMenuItemClick}>Jahreszielevaluation</a></li>
                <li><a href="#" data-item="jzp" data-view="DocumentCollection" onClick={this._handleMenuItemClick}>Jahreszielplanungen</a></li>
                <li><a href="#" data-item="vb" data-view="DocumentCollection" onClick={this._handleMenuItemClick}>Verlaufsberichte</a></li>
                <li><a href="#" data-item="fvb" data-view="DocumentCollection" onClick={this._handleMenuItemClick}>Fallverlaufsbesprechungen</a></li>
                <li><a href="#" data-item="pd" data-view="DocumentCollection" onClick={this._handleMenuItemClick}>Physiodokumentationen</a></li>
                <li><a href="#" data-item="bl" data-view="DocumentCollection" onClick={this._handleMenuItemClick}>Bedarfslisten</a></li>
                <li><a href="#" data-item="awl" data-view="DocumentCollection" onClick={this._handleMenuItemClick}>Anwesenheitslisten</a></li>
              </ul>
            </li>
            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Einstellungen</a>
              <ul>
              	<li><a href="#" data-item="null" data-view="ChangePassword" onClick={this._handleMenuItemClick}>Passwort ändern</a></li>
                <li><a href="#" data-item="null" data-view="ManageRights" onClick={this._handleMenuItemClick}>Rechte / Rollen</a></li>
                <li><a href="#" data-item="null" data-view="ManageUsers" onClick={this._handleMenuItemClick}>Benutzer verwalten</a></li>
                <li><a href="#" data-item="null" data-view="ManageClients" onClick={this._handleMenuItemClick}>Klienten verwalten</a></li>
              </ul>
            </li>
          </ul>
        </div>
    );
  }
}

export default MainMenu;
