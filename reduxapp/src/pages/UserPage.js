import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';
class UserPage extends Component {
  render() {
    return(
        <div className="App">
        <div className="navbar">
          <h1 className="center">Welcome, {this.props.loggingIn.user.userEmail}!</h1>
          </div>
          <BookForm />
          <BookList />
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

export default connect(mapStateToProps)(UserPage);
