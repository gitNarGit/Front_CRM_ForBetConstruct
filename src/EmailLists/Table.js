import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { Requests } from './Requests';
import { Buttons } from './SendDeleteButtons';

import '../StyleSheet/Contacts.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { dbMailingList: [], dbTemplate: [], templateId: [1], tableHead: true };
        this.renderOptions = this.renderOptions.bind(this);
        this.getTemplateListId = this.getTemplateListId.bind(this);
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

    render() {
        return (

            <div>
                <select onChange={this.getTemplateListId}>
                    {this.state.dbTemplate.map(this.renderOptions)}
                </select>

                <table >
                    <TableHead head={this.state.dbMailingList[0]}></TableHead>
                    <TableBody database={this.state.dbMailingList} head={this.state.dbMailingList[0]}></TableBody>
                </table>
                <Buttons></Buttons>

            </div>
        )
    }
}
export { Table };