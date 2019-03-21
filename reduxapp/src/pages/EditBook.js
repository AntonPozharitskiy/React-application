import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bookActions} from '../actions';


class EditBook extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const id = this.props.book.id;
  const title = this.getTitle.value;
  const content = this.getMessage.value;
  const data = {
    id,
    title,
    content
  }
  this.props.dispatch(bookActions.update(data))
}
render() {
return (
<div onSubmit={this.handleEdit}>
  <form className="form">
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.book.title} placeholder="Enter Post Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.book.content} cols="28" placeholder="Enter Post" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}

export default connect()(EditBook);
