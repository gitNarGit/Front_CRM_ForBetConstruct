import React, { Component } from 'react';
import { Requests } from './Requests';
import '../StyleSheet/Contacts.css';


class TableBody extends Component {
    constructor(props) {
        super(props);
        this.state = { editing: false, getEmailListIdArr: [], checkings: false };
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.editMode = this.editMode.bind(this);
        this.normalMode = this.normalMode.bind(this);
        this.renderNormalModeHead = this.renderNormalModeHead.bind(this);
        this.renderEditModeHead = this.renderEditModeHead.bind(this);
        this.getEmailListId = this.getEmailListId.bind(this);
    }

    getEmailListId(e) {
        console.log(this.props.database[0]);
        if (e.target.checked === true) {
            this.state.getEmailListIdArr.push(this.props.database[e.target.id].EmailListId);
            console.log(this.props.database[e.target.id].EmailListId);
            console.log(this.props.database);
            console.log(this.state.getEmailListIdArr);
        }
        else {
            let index = this.state.getEmailListIdArr.indexOf(this.props.database[e.target.id].EmailListId);
            if (index >= 0) {
                this.state.getEmailListIdArr.splice(index, 1);
            }
        }
        this.setState({ getEmailListIdArr: this.state.getEmailListIdArr })
        console.log(this.state.checkings)
    };

    edit() {
        this.setState({ editing: true });
    };

    save(updateData) {
        let val = this.refs.newText.value;
        this.setState({ editing: false });

        console.log(val);
    };

    editMode() {

        return (
            <tbody>
                {this.props.database.map(this.renderEditModeHead)}
                <tr>
                    <td><button onClick={this.save}>Save</button></td>
                </tr>
            </tbody>

        )
    };

    normalMode() {
        return (
            <tbody>
                {this.props.database.map(this.renderNormalModeHead)}
            </tbody>
        )
    }

    renderNormalModeHead(value, key) {
        return (
            <tr key={key} >
                <td ><input type="checkbox" id={key} ref="checkbx" onChange={this.getEmailListId} /></td>
                <td >{value.EmailListId}</td>
                <td >{value.EmailListName}</td>
                <td >
                    <button onClick={this.edit} >Edit</button>
                </td>
            </tr>
        )
    }

    renderEditModeHead(value, key) {
        return (
            <tr key={key} >
                <td id={key} ></td>
                <td >{value.EmailListId}</td>
                <td ><textarea ref="newText" defaultValue={value.EmailListName}>{}</textarea></td>

            </tr>


        )
    }

    render() {
        if (this.state.editing) {
            return this.editMode();
        } else {
            return this.normalMode();
        }
    }
}
export { TableBody };