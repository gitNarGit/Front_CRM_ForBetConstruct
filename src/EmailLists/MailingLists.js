import React, { Component } from 'react';
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
export { MailingLists };

