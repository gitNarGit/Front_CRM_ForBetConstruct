import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Contacts } from './Contacts';
import '../StyleSheet/Contacts.css';

class ajax {
    static getData(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => resolve(response.json()), err => reject(err));
        })
    }
    static postData(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => resolve(response.text(), err => reject(err))).catch(function() {
        console.log("error occured");
    })
        })
    }
}

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { db: [] };
    }
    componentDidMount() {
        ajax.getData('http://crmbetd.azurewebsites.net/api/contacts').then(
            (response) => { this.setState({ db: response }) }
        )
    }

    render() {
        return (<Contacts database={this.state.db} />);
    }

}

export { Table };

