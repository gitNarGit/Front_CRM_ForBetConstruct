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
                .then(response => resolve(response.text(), err => reject(err)))
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

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = { checkedList: {}, isChecked: true };
        this.getKey = this.getKey.bind(this);
        this.getId = this.getId.bind(this);
    }

    getKey() {
        this.setState({ isChecked: !this.state.isChecked });
    }

    getId() {

        this.getKey();
        if (this.state.isChecked) {
            this.state.checkedList[this.props.index] = this.props.index;
            this.setState({ checkedList: this.state.checkedList });
            console.log(this.state.checkedList);
        }
        this.arr = [];
        this.arr.push(this.state.checkedList);
    }

    render() {
        console.log(this.arr)
        return (<td className="table_data"><input type="checkbox" ref="checkbx" onClick={this.getId} /></td>);
    }
}
export { CheckBox };