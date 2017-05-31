import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import call from '../helpers/call.js';
import { HeaderMail } from './HeaderMail';
import '../StyleSheet/Contacts.css';

class EmailListTable extends Component {
    constructor(props) {
        super(props);
        this.state = { dbMailingList: [], deleteId: null, checked: false };
        this.renderHeaders = this.renderHeaders.bind(this);
        this.getDeleteId = this.getDeleteId.bind(this);
        this.deleteMailingList = this.deleteMailingList.bind(this);

    }

    componentDidMount() {
        call('api/emaillists', "GET").then((response) => {
            this.setState({ dbMailingList: response })
            console.log(response);
        }
        );

        call('api/emaillists/1', "GET").then((response) => {
            this.setState({ dbTemplate: response });
            //  console.log(response);
        }
        )
    }

    renderHeaders(value, key) {
        return (<HeaderMail getDeleteId={this.getDeleteId} checked={this.state.checked} delete={this.deleteMailingList} dbMail={this.state.dbMailingList} key={key} num={key}>{value.EmailListName}</HeaderMail>)
    }

    getDeleteId(id, checked) {
        this.setState({ deleteId: id, checked: checked });
    }

    deleteMailingList(deleteId, event) {

        deleteId = this.state.deleteId;
        console.log(this.state.deleteId);
        if (this.state.deleteId != null) {
            let that = this;
            console.log(event.target.deleteId)
            call('api/emaillists?id=' + deleteId, 'DELETE').then(function (response) {
                console.log(that);
                if (response.error) {
                    call('api/emaillists', 'GET').then(response => { response.error ? alert(response.message) : that.setState({ dbMailingList: response }) })
                    console.log(this);
                    that.setState({ checked: false });
                }
                else {
                    alert("Error Request");
                }
            })
        }
    }

    render() {
        return (
            <div>
                <p className="count">Number of Mailing Lists: {this.state.dbMailingList.length}</p>
                <table className="all_contacts mailList">
                    <thead>
                        <tr>
                            <th className="table_data table_head_data">SELECT</th>
                            <th className="table_data table_head_data">NUMBER</th>
                            <th className="table_data table_head_data">NAME</th>
                            <th className="table_data table_head_data">EDIT</th>
                            <th className="table_data table_head_data">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dbMailingList.map(this.renderHeaders)}
                    </tbody>
                </table>
                <button className="main_buttons button_send">SEND EMAIL</button>
            </div>
        )
    }
}

export { EmailListTable };







/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { Requests } from './Requests';
//import call from '../helpers/call.js';

import '../StyleSheet/Contacts.css';

class EmailListTable extends Component {
    constructor(props) {
        super(props);
        this.state = { dbMailingList: [], dbTemplate: [], templateId: [1], tableHead: true, sendEmails: [] };
        this.renderOptions = this.renderOptions.bind(this);
        this.getTemplateListId = this.getTemplateListId.bind(this);
        this.getEmailsList = this.getEmailsList.bind(this);
        this.send = this.send.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        Requests.getData('http://crmbetd.azurewebsites.net/api/emaillists').then(
            (response) => {
                this.setState({ dbMailingList: response })
                console.log(response);
            }
        );

        Requests.getData('http://crmbetd.azurewebsites.net/api/template').then(
            (response) => {
                this.setState({ dbTemplate: response })
                console.log(response);
            }
        )
    }

    getTemplateListId(e) {
        this.state.templateId[0] = this.state.dbTemplate[e.target.selectedIndex].TemplateId;
        console.log(this.state.templateId);
    }


    renderOptions(value, key) {
        return (
            <option key={key} id={key + 1}>{value.TemplateName} </option>
        )

    }

    getEmailsList(emailsArr){
        this.setState({sendEmails: emailsArr});
    }

    send(sendData) {
        console.log(this.state.sendEmails + '/' + this.state.templateId);
    };

    delete(deleteData) {
        console.log(this.state.sendEmails);
    };


    render() {
        return (

            <div>
                <select onChange={this.getTemplateListId}>
                    {this.state.dbTemplate.map(this.renderOptions)}
                </select>

                <table className="all_contacts">
                    <TableHead head={this.state.dbMailingList[0]}></TableHead>
                    <TableBody database={this.state.dbMailingList} head={this.state.dbMailingList[0]} sendemails={this.getEmailsList}></TableBody>
                </table>
                <div>
                    <button onClick={this.send}>Send</button>
                    <button onClick={this.delete}>Delete</button>
                </div>

            </div>
        )
    }
}
export { EmailListTable };*/