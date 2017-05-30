import React, { Component } from 'react';
import '../StyleSheet/Contacts.css';
import { Requests } from './Requests';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { Table } from './Table';
class Buttons extends Component {
    constructor(props) {
        super(props);
        this.send = this.send.bind(this);
        this.delete = this.delete.bind(this);

    };

    send(sendData) {

    };

    delete(deleteData) {

    };
    render() {
        return (
            <div>
                <button onClick={this.send}>Send</button>
                <button onClick={this.delete}>Delete</button>
            </div>
        )
    }

}

export { Buttons };