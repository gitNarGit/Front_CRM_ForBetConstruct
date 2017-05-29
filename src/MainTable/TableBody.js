import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../StyleSheet/Contacts.css';
import call from '../helpers/call.js'

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = { guId: [], checkings: false };
    this.renderHeaders = this.renderHeaders.bind(this);
    this.getGuId = this.getGuId.bind(this);
   
  }

  getGuId(e) {
    console.log(this.props.database[0])
    if (e.target.checked === true) {
      this.state.guId.push(this.props.database[e.target.id].GuId);
      console.log(this.props.database[e.target.id].GuId); console.log(this.props.database);
    }
    else {
      let index = this.state.guId.indexOf(this.props.database[e.target.id].GuId);
      if (index >= 0) {
        this.state.guId.splice(index, 1);
      }
    }
    this.setState({ guId: this.state.guId })
    console.log(this.state.checkings)
    this.props.getSendData(this.state.guId)
  };



  renderHeaders(value, key) {
    return (
      <tr key={key} className="table_row">
        <td className="table_data"><input type="checkbox" defaultChecked={this.state.checkings} id={key} onChange={this.getGuId} /></td>
        <td className="table_data">{key += 1}</td>
        <td className="table_data">{value["Full Name"]}</td>
        <td className="table_data">{value["Company Name"]}</td>
        <td className="table_data">{value.Position}</td>
        <td className="table_data">{value.Country}</td>
        <td className="table_data">{value.Email}</td>
      </tr>
    )
  }
  render() {
    return (
      <tbody>
        {this.props.database.map(this.renderHeaders)}
       
      </tbody>
    )
  }
}
export { TableBody };

//{/*ref={checkings => { this.allchecks.push(checkings)}}*/}