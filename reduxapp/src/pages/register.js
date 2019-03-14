import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class Register extends Component {
  constructor(props) {
        super(props);
        this.state = {
            user: {
                Email: '',
                Password: ''
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

  onSubmit(e){
    e.preventDefault();
    const { user } = this.state;
        const { dispatch } = this.props;
        if (user.Email && user.Password) {
            dispatch(userActions.register(user));
        }
  }

  render(){
      return(
        <form method="POST" onSubmit={this.onSubmit}>
            <label>Email</label> <br/>
            <input type="email" name="Email" onChange={this.handleChange}/> <br/>
            <label>Password</label> <br/>
            <input type="password" name="Password" onChange={this.handleChange}/> <br/>
            <label>Confirm password</label> <br/>
            <input type="password" name="Confirm password"/> <br/>
            <input type="submit" value="Register"/> <br/>
            <Link to="/login">Cancel</Link>
        </form>
      )
  }
}

function mapStateToProps(state) {
    const registering = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(Register);
export { connectedRegisterPage as Register };
