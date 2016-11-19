import React, { Component } from 'react';
import DocumentCollectionViewer from './DocumentCollectionViewer.js';
import RightsViewer from './RightsViewer.js';
import $ from 'jquery'

class Viewer extends Component {

  constructor(props) {
    super();
    this.state ={
      viewType : "DocumentCollection",
      docType : "vd"
    }
  }

  componentDidMount() {
    this.design();
  }

  design() {
    this.adjustViewerSize();
    setInterval(this.adjustViewerSize, 100);
  }

  adjustViewerSize() {
    $(".Viewer").css({
      "position" : "absolute",
      "left" : $(".mainMenu").width(),
      "top" : $(".App-header").height(),
      "width" : $(window).innerWidth() - $(".mainMenu").width(),
      "height" : $(window).innerHeight() - $(".App-header").height(),
      "overflow": "auto"
    })
  }

  render() {
    switch(this.state.viewType) {
      case "DocumentCollection":
        return (
         <div className="Viewer">
            <DocumentCollectionViewer docType={this.state.docType} />
          </div>
        );
        break;
      case "ManageRights":
        return (
         <div className="Viewer">
            <RightsViewer />
          </div>
        );
        break;
      default:
        return (
           <div className="Viewer">
              <div>Diese View existiert nicht!</div>
            </div>
        );
        break;
    }
  }
}

export default Viewer;
