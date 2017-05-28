import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableBody } from './TableBody';
import { Requests } from './Requests';
import { Headers } from './Headers';
//import {AddNewContact} from './AddNewContact';
import '../StyleSheet/Contacts.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { db: [], AddNewMode: false };
    }
    componentDidMount() {
        Requests.getData('http://crmbetd.azurewebsites.net/api/contacts').then(
            (response) => { this.setState({ db: response }) }
        )
    } 

    closeMode(){
        this.setState({AddNewMode: false })
    }
    render() {
        return (<div>
                    <h3 className="headers">All Contacts</h3>
                    {/*<AddNewContact addNew={this.editMode} addNewState={this.state.AddNewMode}/>*/}
                    <p className="count">Number of Contacts: {this.state.db.length}</p>
                    <table className="all_contacts">
                        <Headers headerData={this.state.db[0]}></Headers>
                        <TableBody database={this.state.db} head={this.state.db[0]} />
                    </table>
                </div>
                )
    }
}
export { Table };

