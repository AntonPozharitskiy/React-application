import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {Login} from './pages/login';
import {Register} from './pages/register';

class App extends Component {
    render(){
      console.log(this.props)
        const Authorization = () =>{
          if(this.props.alert){
              return(
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

function mapStateToProps(state) {
    const alert = state.authentication.authenticated;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
