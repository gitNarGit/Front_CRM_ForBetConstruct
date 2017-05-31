import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import call from '../helpers/call.js';

class HeaderMail extends Component {
    constructor(props) {
        super(props);
        this.state = { mailDb: "", checking: false };
        this.checkOnChange = this.checkOnChange.bind(this);
    }

    checkOnChange(e) {
        if (e.target.checked === true) {
            this.state.mailDb = this.props.dbMail[this.props.num].EmailListId;
        }
        this.setState({ mailDb: this.state.mailDb });
        this.props.getDeleteId(this.state.mailDb);
        console.log(this.state.mailDb);
    }

    render() {

        return (
            <tr className="table_row">
                <td className="table_data table_head_data"><input type="checkbox" checked={this.props.checked} onChange={this.checkOnChange} /></td>
                <td className="table_data table_head_data">{this.props.num + 1}</td>
                <td className="table_data table_head_data">{this.props.children}</td>
                <td className="table_data table_head_data"><button className="edit_delete">EDIT</button></td>
                <td className="table_data table_head_data"><button className="edit_delete del" onClick={this.props.delete}>DELETE</button></td>
            </tr>
        )
    }
}

export { HeaderMail };



/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Requests } from './Requests';
import { EmailListTable } from './EmailListTable'

class MailingLists extends Component {

    render() {
        return (
            <div className="wrapper">
                <h3 className="list_head"> Mailing Lists </h3>
                <EmailListTable></EmailListTable>
            </div>
        )
    }
}
export { HeaderMail };
*/
