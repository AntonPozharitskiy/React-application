import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';

import { Formik } from 'formik'
import { userActions } from '../actions';

class Login extends Component {
    constructor(props){
      super(props)
      this.state = {
        Email: '',
        Password: ''
      }
    }
    render(){
      return(
        <div className="post-container">
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        } else if(!values.password) {
          errors.password = 'Password is required'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        this.props.dispatch(userActions.login(values.email, values.password))
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form className="form" onSubmit={handleSubmit}>
        <label>Email</label> <br/>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <br/>
          {errors.email && touched.email && errors.email}
          <br/>
          <label>Password</label> <br/>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br/>
          {errors.password && touched.password && errors.password}
          <br/>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      )}
    </Formik>
  </div>
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
