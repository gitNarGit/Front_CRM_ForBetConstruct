import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CheckBox } from './Table';


class Contacts extends Component {
  constructor(props) {
    super(props);
    this.renderHeaders = this.renderHeaders.bind(this);

  }

  renderHeaders(value, key) {

    return (

      <tr key={key} className="table_row">
        <CheckBox index={key} />
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
      </div>)
  }
}
export { Contacts };




