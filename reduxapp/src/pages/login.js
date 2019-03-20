import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';

import { userActions } from '../actions';

class Login extends Component {
    constructor(props){
      super(props)
      this.state = {
        Email: '',
        Password: ''
      }
      //this.onSubmit = this.onSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    onSubmit = (e) => {
      e.preventDefault();
      const { Email, Password } = this.state;
      const { dispatch } = this.props;
      if (Email && Password) {
        try{
        dispatch(userActions.login(Email, Password));
        }
        catch(exception) {
          console.log(exception)
        }

      }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render(){
      return(
        <form method="POST" onSubmit={this.onSubmit}>
            <label>Email</label> <br/>
            <input type="email" name="Email" onChange={this.handleChange}/> <br/>
            <label>Password</label> <br/>
            <input type="password" name="Password" onChange={this.handleChange}/> <br/>
            <input type="submit" value="Login"/> <br/>
            <Link to="/register" className="btn btn-link">Register as new user?</Link>
        </form>
      )
    }
}

function mapStateToProps(state) {
    const loggingIn = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login);
