import React, { Component } from 'react';
import { Requests } from './Requests';
import '../StyleSheet/Contacts.css';
//import call from '../helpers/call.js'

class TableHead extends Component {
    constructor(props) {
        super(props);
        this.renderHead = this.renderHead.bind(this);
        this.getHeadData = this.getHeadData.bind(this);
    }

    getHeadData() {
        const obj = this.props.head;
        let headers = [];
        for (let i in obj) {
            headers.push(i);
        }
        let header = headers.splice(0, 5);
        return header;
    }

    renderHead(headers, index) {
        return (<th key={index}>{headers}</th>)
    }

    render() {
        return (


            <thead>
                <tr >
                    <th ></th>
                    {this.getHeadData().map(this.renderHead)}
                </tr>
            </thead>
        )
    }
}
export { TableHead }