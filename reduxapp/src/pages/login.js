import React, {Component} from 'react';

class Login extends Component {
    render(){
      return(
        <form method="POST">
            <label>Email</label> <br/>
            <input type="email" name="Email"/> <br/>
            <label>Password</label> <br/>
            <input type="password" name="Password"/> <br/>
            <input type="button" value="Login"/>
        </form>
      )
    }
}

export default Login;
