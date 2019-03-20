import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { PrivateRoute } from './routes';

import Login from './pages/login';
import Register from './pages/register';
import UserPage from './pages/UserPage';
import { userActions } from './actions';

class App extends Component {
    constructor(props){
      super(props);
      this.onLogoutClick = this.onLogoutClick.bind(this);
    }
    onLogoutClick(e){
      e.preventDefault();
      const {dispatch} = this.props;
      dispatch(userActions.logout());
    }
    render(){
        const Authorization = () =>{
          if(this.props.alert){
              return(
                  <li><NavLink to="/logout" onClick={this.onLogoutClick}>Logout</NavLink></li>
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
            <PrivateRoute path="/profile" component={UserPage}/>
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

export default connect(mapStateToProps)(App);
