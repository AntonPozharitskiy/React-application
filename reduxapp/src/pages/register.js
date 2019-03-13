import React, {Component} from 'react';

class Register extends Component {
    render(){
      return(
        <form method="POST">
            <label>Email</label> <br/>
            <input type="email" name="Email"/> <br/>
            <label>Password</label> <br/>
            <input type="password" name="Password"/> <br/>
            <label>Confirm password</label> <br/>
            <input type="password" name="Confirm password"/> <br/>
            <input type="button" value="Register"/>
        </form>
      )
    }
}

export default Register;
