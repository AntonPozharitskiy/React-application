import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bookActions} from '../actions'
class BookForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      title,
      message
    }

  this.props.dispatch(bookActions.create(data));

  this.getTitle.value = '';
  this.getMessage.value = '';
  }


  render() {
    return (
      <div>
        <h1>Create Book</h1>
          <form onSubmit={this.handleSubmit}>
             <input required type="text" ref={(input)=>this.getTitle = input}
             placeholder="Enter Post Title"/>
             <br /><br />
             <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28"
             placeholder="Enter Post" />
             <br /><br />
             <button>Post</button>
          </form>
    </div>
    );
  }
}
export default connect()(BookForm);
