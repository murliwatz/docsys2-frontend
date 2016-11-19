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
              {id:5, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:6, klient: "Bruckner Michael", date: "2016-08-10"},
              {id:7, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:8, klient: "Bruckner Michael", date: "2016-08-10"},
              {id:9, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:10, klient: "Bruckner Michael", date: "2016-08-10"},
              {id:11, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:12, klient: "Bruckner Michael", date: "2016-08-10"},
              {id:13, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:15, klient: "Bruckner Michael", date: "2016-08-10"},
              {id:16, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:17, klient: "Bruckner Michael", date: "2016-08-10"},
              {id:18, klient: "Haderer Hannes", date: "2016-08-10"},
              {id:19, klient: "Bruckner Michael", date: "2016-08-10"},
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
                <div className="DocumentEdit"><a href="#" title="Bearbeiten"><i className="fa fa-pencil" aria-hidden="true"></i></a></div>
                <div className="DocumentRemove"><a href="#" title="Löschen"><i className="fa fa-trash" aria-hidden="true"></i></a></div>
                <div className="DocumentRemove"><a href="#" title="Als PDF herunterladen"><i className="fa fa-download" aria-hidden="true"></i></a></div>
                <div className="DocumentInfo"><a href="#" title="Informationen"><i className="fa fa-info-circle" aria-hidden="true"></i></a></div>
              </div>)
            }
          </div>
        </div>
    );
  }
}

export default DocumentCollectionViewer;
