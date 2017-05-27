import React, { Component } from 'react';
import '../StyleSheet/Contacts.css';



class Contacts extends Component {
  constructor(props) {
    super(props);
	this.state = { guId: [] };
    this.renderHeaders = this.renderHeaders.bind(this);
	this.getGuId = this.getGuId.bind(this)
  }
  
    getGuId(e) {

    if (e.target.checked === true) {
      this.state.guId.push(this.props.database[e.target.id].GuId);
	  console.log(this.props.database[e.target.id].GuId)
    }
    else {
		let index = this.state.guId.indexOf(this.props.database[e.target.id].GuId);
		if (index >= 0) {
		  this.state.guId.splice( index, 1 );
		}
    }
    this.setState({ guId: this.state.guId })
    console.log(this.state.guId)
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
      <div>
        <p className="count">Number of Contacts: {this.props.database.length}</p>
        <table className="all_contacts">
          <thead>
            <tr className="table_row">
              <th className="table_data">Select</th>
              <th className="table_data">Number</th>
              <th className="table_data">Full Name</th>
              <th className="table_data">Company Name</th>
              <th className="table_data">Position</th>
              <th className="table_data">Country</th>
              <th className="table_data">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.database.map(this.renderHeaders)}
          </tbody>
        </table>
		<button className="email_send">SEND EMAIL</button>
      </div>)
  }
}
export { Contacts };




