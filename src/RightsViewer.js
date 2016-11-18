import React, { Component } from 'react';
import './RightsViewer.css';
import $ from 'jquery'

class RightsViewer extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
        <div className="RightsViewer">
          <div className="ViewHeader">
            <h1>Rechte verwalten</h1>
          </div>
          <div className="ViewBody">
            <div className="SubView">
              <div className="ViewHeader">
                <h2>Rollen bearbeiten</h2>
              </div>
              <div className="ViewBody">
                <span>Rolle: </span> 
                <select>
                  <option disabled>Administrator</option>
                  <option>Betreuer</option>
                  <option>Büro</option>
                </select>
                <div className="SubView">
                  <div className="ViewHeader">
                    <h2>Rechte: Einstellungen</h2>
                  </div>
                  <div className="ViewBody">
                    ...
                  </div>
                </div>
                <div className="SubView">
                  <div className="ViewHeader">
                    <h2>Rechte: Jahreszielplanungen</h2>
                  </div>
                  <div className="ViewBody">
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default RightsViewer;
