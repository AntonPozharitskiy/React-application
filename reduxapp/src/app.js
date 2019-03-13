import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Login from './pages/login';
import Register from './pages/register';

class App extends Component {
    render(){
        const Authorization = () =>{
         let isAuthorize = sessionStorage.getItem('TokenInfo');
         let userName = sessionStorage.getItem('username');
          if(this.props.user.authenticated){
              return(
                  <li><NavLink to="/profile">{userName}</NavLink></li>,
                  <li><NavLink to="/logout">Logout</NavLink></li>
              )
          }
          else {
              return(
                  <li><NavLink to="/login">Login</NavLink></li>
              )
          }
      }
      return(
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <Authorization/>
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
      user: state.users
  }),
  dispatch => ({

  })
)(App);
