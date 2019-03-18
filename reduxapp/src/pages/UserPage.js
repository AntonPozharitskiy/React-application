import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserPage extends Component {
  render() {
    console.log(this.props)
    return(
        <div>
          <h1>Welcome, {this.props.loggingIn.user.userEmail}!</h1>

          <h3>Your books:</h3>
          
          <input type="text" ref={(input)=>{this.bookInput = input}}/>
          <button type="button">Add book</button>
          <ul>
          </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
    const loggingIn = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(UserPage);
export { connectedLoginPage as UserPage };
