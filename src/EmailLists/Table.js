import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { Requests } from './Requests';
import { Buttons } from './SendDeleteButtons';
import { TemplateSelect } from './SelectTemplate';
import '../StyleSheet/Contacts.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { dbMailingList: [], dbTemplate: [] };
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


    render() {
        return (

            <div>
                <TemplateSelect database={this.state.dbTemplate}></TemplateSelect>
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