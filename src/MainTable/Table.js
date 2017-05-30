import React, { Component } from 'react';
import { TableBody } from './TableBody';
import call from '../helpers/call.js'
import { Headers } from './Headers';
import { AddNewContact } from './AddNewContact';
import '../StyleSheet/Contacts.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { db: [], AddNewMode: false, sendMail: [], addnew: false, disable: true, selectAll: false, };
        //this.putNewContacts=this.putNewContacts.bind(this);
        this.getSendMailData = this.getSendMailData.bind(this);
        this.postData = this.postData.bind(this);
        this.changeState = this.changeState.bind(this);
        this.putData = this.putData.bind(this);
        this.ReusableChangeState = this.ReusableChangeState.bind(this);
        this.changeSelectAll = this.changeSelectAll.bind(this);

    }

    componentDidMount() {
        call('api/contacts', 'GET').then(response => { response.error ? alert(response.message) : this.setState({ db: response }) })

    }

    changeState(data) {
        this.setState({ db: data })
    }

    ReusableChangeState(newdata) {
        this.setState({ disable: newdata })
    }

    changeSelectAll() {
        this.setState({ selectAll: !this.state.selectAll })
      

        //console.log(this.allGuID)

    }

    putData(putJSON) {
        call('api/contacts', 'PUT', putJSON)
    }


    closeMode() {
        this.setState({ AddNewMode: false })
    }

    getSendMailData(sendData) {
    
            this.setState({ sendMail: sendData })
        
    }

    postData(sendData) {
        
            if (this.state.selectAll) {
            this.allGuID = [];
            for (let i in this.state.db) {
                this.allGuID.push(this.state.db[i].GuID)
            }
            sendData = this.allGuID
        }
        else {
                 sendData = this.state.sendMail;
        }
       
        
        call('api/sendemail?templateid=1', 'POST', sendData)
    };

    render() {

        return (<div>
            <h3 className="headers">All Contacts</h3>
            <AddNewContact addNewState={this.state.AddNewMode} change={this.changeState} />
            <p className="count">Number of Contacts: {this.state.db.length}</p>
            <input type="checkbox" onChange={this.changeSelectAll} className="select_all" />
            <table className="all_contacts">
                
                <Headers selectAll={this.changeSelectAll} headerData={this.state.db[0]}></Headers>
                <TableBody select={this.state.selectAll} status={this.state.disable} changeSt={this.ReusableChangeState} getSendData={this.getSendMailData} put={this.putData} change={this.changeState} database={this.state.db} head={this.state.db[0]} />
            </table>
            <button className="main_buttons button_send" disabled={this.state.disable} onClick={this.postData}>SEND EMAIL</button>
            <div className="upload">
                <input type="file" className="upload" />
            </div>
            <button className="main_buttons button_send" >Upload</button>
        </div>
        )
    }
}
export { Table };

