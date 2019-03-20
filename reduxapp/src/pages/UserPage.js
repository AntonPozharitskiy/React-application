import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';
class UserPage extends Component {
  render() {
    console.log(this.props)
    return(
        <div>
          <h1>Welcome, {this.props.loggingIn.user.userEmail}!</h1>
          <BookForm />
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
