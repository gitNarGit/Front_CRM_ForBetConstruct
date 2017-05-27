import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Contacts } from './Contacts';
import { Requests } from './Requests';
import '../StyleSheet/Contacts.css';



class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { db: [] };
    }
    componentDidMount() {
        Requests.getData('http://crmbetd.azurewebsites.net/api/contacts').then(
            (response) => { this.setState({ db: response }) }
        )
        console.log(this.state.db[0])
    }

    render() {
        return (              
                <Contacts database={this.state.db} head = {this.state.db[0]} />
      )
    }
}
export { Table };

