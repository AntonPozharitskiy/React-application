import React, { Component } from 'react';
import { userActions } from '../actions';

class Logout extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }
}

export default Logout;
