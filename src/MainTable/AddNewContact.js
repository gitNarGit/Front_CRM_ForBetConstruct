/*import React, { Component } from 'react';
import '../StyleSheet/Contacts.css';
import { Requests } from './Requests';

class AddNewContact extends Component {
    constructor(props) {
        super(props);
        this.state = { close: this.props.addNewState };
        //    this.renderAddNew = this.renderAddNew.bind(this);
      //  this.renderEditMode = this.renderEditMode.bind(this);
        this.normalMode = this.normalMode.bind(this);
        this.addNewMode=this.addNewMode.bind(this);
        this.editState=this.editState.bind(this);
    }
editState(props){
   
    this.setState({close: !props.addNewState})
}

    /* closeEditMode(){
         this.setState({addNew: false})
     }*/

    addNewMode() {
        return (<div className="add_new">
            <form action="" className="add_new_form">
                <h3 className="add_new_header">Add New Contact</h3>
                <input className="list_input" ref="firstname" type="text" required placeholder="First Name" /><br />
                <input className="list_input" ref="lastname" type="text" required placeholder="Last Name" /> <br />
                <input className="list_input" ref="company" type="text" required placeholder="Company Name" /> <br />
                <input className="list_input" ref="position" type="text" required placeholder="Position" /> <br />
                <input className="list_input" ref="country" type="text" required placeholder="Country" /> <br />
                <input className="list_input" ref="email" type="text" required placeholder="Email" /> <br />
                <button className="main_buttons">Close</button>
                <button className="main_buttons">Add Contact</button>
            </form>
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
export { AddNewContact }; */