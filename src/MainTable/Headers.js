import React, { Component } from 'react';
import '../StyleSheet/Contacts.css';
import call from '../helpers/call.js'

class Headers extends Component {
    constructor(props) {
        super(props);
        this.getHeadersData = this.getHeadersData.bind(this);
        this.renderHeaders=this.renderHeaders.bind(this);
console.log(this.getHeadersData())
    }
    getHeadersData() {
        // getting header data
        const obj = this.props.headerData;
        console.log(obj)
        // defining rendered headers
        let headers = [];
        for (let i in obj) {
            headers.push(i);
        }
        console.log(headers)
        let header = headers.splice(0, 5);
        // rendering headers as table heads
        return header
    }
    

    renderHeaders(headers, index) {
        return (<th className="table_data table_head_data" key={index}>{headers}</th>)
    }
    render() {   
        return (
            <thead>
                <tr className="table_row">
                    <th className="table_data">Select</th>
                    <th className="table_data">Number</th>
                    {this.getHeadersData().map(this.renderHeaders)}
                </tr>
            </thead>
        )
    }
}
export { Headers };