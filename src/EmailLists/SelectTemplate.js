import React, { Component } from 'react';
import '../StyleSheet/Contacts.css';
import { Requests } from './Requests';

// const databaseTemplate = ["New Year", "Valentine's Day", "Thanksgiving", "Halloween", "Women's day"];


class TemplateSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { db: [], templateId: [1] }; 
        this.renderOptions = this.renderOptions.bind(this);
        this.getTemplateListId = this.getTemplateListId.bind(this);

    }

    getTemplateListId(e) {
        this.state.templateId[0] = this.props.database[e.target.selectedIndex].TemplateId;
        console.log(this.state.templateId);
    }
    renderOptions(value, key) {

        return (
            <option key={key} id={key + 1}>{value.TemplateName} </option>
        )

    }
    render() {
        return (
            <select onChange={this.getTemplateListId}>
                {this.props.database.map(this.renderOptions)}
            </select>
        )
    }
}

export { TemplateSelect }

// esqanna???   alooo es bolor bacvacnery