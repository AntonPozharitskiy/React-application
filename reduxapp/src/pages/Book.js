import React, { Component } from 'react';
import {bookActions} from '../actions';

import {connect} from 'react-redux';

class Book extends Component {
  handleDeleteClick = (id) => {
    this.props.dispatch(bookActions.delete(id));
  }
  handleEditClick = (id) => {
    this.props.dispatch(bookActions.edit(id));
  }
  render() {
  return (
    <div className="post">
    <form>
      <label>{this.props.book.dateOfRelease}</label>
      <h2 className="post_title">{this.props.book.title}</h2>
      <p className="post_message">{this.props.book.content}</p> <br/>
      <div className="control-buttons">
      <button className="edit" onClick={() => this.handleEditClick(this.props.book.id)}>Edit</button>
      <button className="delete" onClick={() => this.handleDeleteClick(this.props.book.id)}>Delete</button>
      </div>
    </form>
    </div>
  );
 }
}

export default connect()(Book);
