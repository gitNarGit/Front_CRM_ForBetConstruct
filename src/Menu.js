import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './StyleSheet/Menu.css';

class Menu extends Component{
  render(){
    return(
      
          <div className="menu">
                  <ul className="list_menu">
                      <li className="menu_item"><NavLink activeClassName="active" to='/table'>Contact List </NavLink></li>
                      <li className="menu_item"><NavLink activeClassName="active" to='/EmailListTable'>Mailing List </NavLink></li>
                 </ul>
          </div>
      
    );
  }
}

export default Menu;
