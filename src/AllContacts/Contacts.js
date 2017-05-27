import React, { Component } from 'react';
import '../StyleSheet/Contacts.css';
import { Requests } from './Requests';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = { guId: [] };
    this.renderHeaders = this.renderHeaders.bind(this);
    this.getGuId = this.getGuId.bind(this);
    this.postData = this.postData.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  getGuId(e) {
    console.log(this.props.database[0])
    if (e.target.checked === true) {
      this.state.guId.push(this.props.database[e.target.id].GuId);
      console.log(this.props.database[e.target.id].GuId); console.log(this.props.database)
    }
    else {
      let index = this.state.guId.indexOf(this.props.database[e.target.id].GuId);
      if (index >= 0) {
        this.state.guId.splice(index, 1);
      }
    }
    this.setState({ guId: this.state.guId })
    console.log(this.state.guId)
  }


  postData(sendData) {
    sendData = this.state.guId;
    Requests.postData('http://crmbetd.azurewebsites.net/api/sendemail?templateid=1', sendData).then(res => console.log(res))
  }

  renderHeaders(value, key) {
    return (
      <tr key={key} className="table_row">
        <td className="table_data"><input type="checkbox" id={key} ref="checkbx" onClick={this.getGuId} /></td>
        <td className="table_data">{key += 1}</td>
        <td className="table_data">{value.FullName}</td>
        <td className="table_data">{value.CompanyName}</td>
        <td className="table_data">{value.Position}</td>
        <td className="table_data">{value.Country}</td>
        <td className="table_data">{value.Email}</td>
      </tr>
    )
  }
  renderBody(value, key) {
    return (
      <tr key={key} className="table_row">
        <th className="table_data">Select</th>
        <th className="table_data">{value}</th>
      </tr>
    )
  }

  render() {
    // getting header data
    
    const obj = this.props.head;

    // defining rendered headers

    let headers = [];
    for (let i in obj) {
      headers.push(i);
    }
    let header = headers.splice(0, 5);

    // rendering headers as table heads

    let head = header.map((headers, index) =>
      <th className="table_data" key={index}>{headers}</th>);
    return (
      <div>
        <h3 className="contacts_header">All Contacts</h3>
        <p className="count">Number of Contacts: {this.props.database.length}</p>
        <table className="all_contacts">
          <thead>
            <tr className="table_row">
              <th className="table_data">Select</th>
              <th className="table_data">ID</th>{head}
            </tr>
          </thead>
          <tbody>{this.props.database.map(this.renderHeaders)}</tbody>
        </table>
        <button className="email_send" onClick={this.postData}>SEND EMAIL</button>
      </div>)
  }
}
export { Contacts };




