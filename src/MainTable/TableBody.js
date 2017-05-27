import React, { Component } from 'react';
import '../StyleSheet/Contacts.css';
import { Requests } from './Requests';

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = { guId: [] };
    this.renderHeaders = this.renderHeaders.bind(this);
    this.getGuId = this.getGuId.bind(this);
    this.postData = this.postData.bind(this);

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
  render() {
    return (

      <tbody>{this.props.database.map(this.renderHeaders)}
        <tr>
          <td colSpan="7">
            <button className="email_send" onClick={this.postData} >SEND EMAIL</button>
          </td>
        </tr>
      </tbody>
    )
  }
}
export { TableBody };

