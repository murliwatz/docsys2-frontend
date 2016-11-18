import React, { Component } from 'react';
import './DocumentCollectionViewer.css';
import $ from 'jquery'

class DocumentCollectionViewer extends Component {

  constructor(props) {
    super();
    console.log(props.docType);
    this.state = {
          desc : "Verlaufsdokumentation",
          docs : [
            {id:3, klient: "Haderer Hannes", date: "2016-08-10"},
            {id:4, klient: "Bruckner Michael", date: "2016-08-10"},
          ]
        };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.docType != nextProps.docType) {
      switch(nextProps.docType) {
        case "jzp":
          this.setState({
            desc : "Jahreszielplanung",
            docs : [
              {id:3, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:4, klient: "Bruckner Michael", date: "2016-08-10"},
            ]
          })
          break;
        case "vd":
          this.setState({
            desc : "Verlaufsdokumentation",
            docs : [
              {id:3, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:4, klient: "Bruckner Michael", date: "2016-08-10"},
            ]
          })
          break;
        case "pd":
          this.setState({
            desc : "Physiodokumentation",
            docs : [
              {id:3, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:4, klient: "Bruckner Michael", date: "2016-08-10"},
            ]
          })
          break;
        case "vb":
          this.setState({
            desc : "Verlaufsbericht",
            docs : [
              {id:3, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:4, klient: "Bruckner Michael", date: "2016-08-10"},
            ]
          })
          break;
        case "bl":
          this.setState({
            desc : "Bedarfsliste",
            docs : [
              {id:3, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:4, klient: "Bruckner Michael", date: "2016-08-10"},
            ]
          })
          break;
      }
    }
  }

  componentDidMount() {
    $(".DocumentHeader input[type=checkbox]").on("click", function(){
      $(".ViewBody input[type=checkbox]").prop("checked", $(this).prop("checked"));
    })
  }

  render() {
    return (
        <div className="DocumentCollectionViewer">
          <div className="ViewHeader">
            Arbeitsjahr:
            <select>
              <option>Alle</option>
              <option>2016 / 2017</option>
            </select>
            <input type="button" value="Neu" />
          </div>
          <div className="ViewBody">
              <div className="DocumentHeader">
                <div><input type="checkbox" /></div>
                <div></div>
                <div>Dokumenttyp</div>
                <div>Klient</div>
                <div>Datum</div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              {
              this.state.docs.map((item) => 
              <div key={item.id} className="Document">
                <div className="DocumentCheckbox"><input type="checkbox" /></div>
                <div className="DocumentIcon"><i className="fa fa-file-text" aria-hidden="true"></i></div>
                <div className="DocumentType">{this.state.desc}</div>
                <div className="DocumentKlient">{item.klient}</div>
                <div className="DocumentDate">{(new Date(item.date)).toLocaleDateString()}</div>
                <div className="DocumentEdit"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                <div className="DocumentRemove"><i className="fa fa-trash" aria-hidden="true"></i></div>
                <div className="DocumentInfo"><i className="fa fa-info-circle" aria-hidden="true"></i></div>
              </div>)
            }
          </div>
        </div>
    );
  }
}

export default DocumentCollectionViewer;
