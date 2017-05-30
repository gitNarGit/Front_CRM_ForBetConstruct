import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { Requests } from './Requests';
//import call from '../helpers/call.js';

import '../StyleSheet/Contacts.css';

class Table extends Component {
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

                <table >
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
export { Table };