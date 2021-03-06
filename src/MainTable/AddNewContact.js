import React, { Component } from 'react';
import '../StyleSheet/Contacts.css';
import call from '../helpers/call.js'

class AddNewContact extends Component {
    constructor(props) {
        super(props);
        this.state = { close: this.props.addNewState, putNew: true };
        //    this.renderAddNew = this.renderAddNew.bind(this);
        //  this.renderEditMode = this.renderEditMode.bind(this);
        this.normalMode = this.normalMode.bind(this);
        this.addNewMode = this.addNewMode.bind(this);
        this.editState = this.editState.bind(this);
        this.closeMode = this.closeMode.bind(this);
        this.putNewData = this.putNewData.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

    }

    editState() {

        this.setState({ close: true })
    }

    closeMode() {
        this.setState({ close: false })
        return (<p>Your Contact Added Succesfully</p>)
    }

    handleAdd() {
        this.setState({ putNew: false });
        console.log(this.state.putNew)
    }
    putNewData(added_data) {
     
        if (this.state.putNew) {
            added_data = {
                "Full Name": this.refs.firstname.value + " " + this.refs.lastname.value,
                "Company Name": this.refs.company.value,
                "Position": this.refs.position.value,
                "Country": this.refs.country.value,
                "Email": this.refs.email.value,
            };
            let that = this;
            call('api/contacts', 'POST', added_data).then(function (response) {
                 console.log(that)
                if (response.error) {
                     call('api/contacts', 'GET').then(response => { response.error ? alert(response.message) : that.props.change(response) })
                     console.log(this)    
                }
                else {
                    alert("Error Request")
                }
            })         
        }
           
    } 


    addNewMode() {
        return (<div className="add_new">
            <div action="" className="add_new_form">
                <h3 className="add_new_header">Add New Contact</h3>
                <input className="list_input" ref="firstname" required type="text" placeholder="First Name" /><br />
                <input className="list_input" ref="lastname" type="text" required placeholder="Last Name" /> <br />
                <input className="list_input" ref="company" type="text" required placeholder="Company Name" /> <br />
                <input className="list_input" ref="position" type="text" required placeholder="Position" /> <br />
                <input className="list_input" ref="country" type="text" required placeholder="Country" /> <br />
                <input className="list_input" ref="email" type="email" required placeholder="Email" /> <br />
                <button className="main_buttons" onClick={this.closeMode}>Close</button>
                <button className="main_buttons" onClick={this.putNewData}>Add Contact</button>
            </div>
        </div>)
    }

    normalMode() {
        return (<button className="main_buttons" onClick={this.editState}>Add New</button>)
    }
    render() {
        if (this.state.close) {
            return this.addNewMode()
        }
        else {
            return this.normalMode()
        }
    }
}
export { AddNewContact }; 