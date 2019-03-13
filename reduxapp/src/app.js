import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
//import {syncHistoryWithStore} from 'react-router-redux';

import Login from './pages/login';
import Register from './pages/register';

class App extends Component {
    addBook(){
      this.props.onAddBook(this.bookInput.value);
      this.bookInput.value = '';
    }
    render(){
      return(
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/"/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </div>
        </div>
      </HashRouter>
      )
    }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    
  })
)(App);
