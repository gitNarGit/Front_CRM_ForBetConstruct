import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableBody } from './TableBody';
import call from '../helpers/call.js'
import { Headers } from './Headers';
import { AddNewContact } from './AddNewContact';
import '../StyleSheet/Contacts.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { db: [], AddNewMode: false, sendMail: [], addnew: false };
        //this.putNewContacts=this.putNewContacts.bind(this);
        this.getSendMailData = this.getSendMailData.bind(this);
        this.postData = this.postData.bind(this);
        this.changeState = this.changeState.bind(this);
      //  this.getAddedData = this.getAddedData.bind(this);
    }

    componentDidMount() {
        call('api/contacts', 'GET').then(response => { response.error ? alert(response.message) : this.setState({ db: response }) })

    }

    changeState(data) {
        this.setState({ db: data })
    }
    
      
       

    
    closeMode() {
        this.setState({ AddNewMode: false })
    }

    getSendMailData(sendData) {
        this.setState({ sendMail: sendData })
    }

    postData(sendData) {
        sendData = this.state.sendMail;
        call('api/sendemail?templateid=1', 'POST', sendData)
    };

    render() {
        return (<div>
            <h3 className="headers">All Contacts</h3>
            <AddNewContact addNewState={this.state.AddNewMode} change={this.changeState} />
            <p className="count">Number of Contacts: {this.state.db.length}</p>
            <table className="all_contacts">
                <Headers headerData={this.state.db[0]}></Headers>
                <TableBody getSendData={this.getSendMailData} database={this.state.db} head={this.state.db[0]} />
            </table>

            <button className="main_buttons" onClick={this.postData}>SEND EMAIL</button>

        </div>
        )
    }
}
export { Table };

