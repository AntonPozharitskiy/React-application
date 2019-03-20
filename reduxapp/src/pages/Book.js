import React, { Component } from 'react';

class Book extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.book.title}</h2>
      <p>{this.props.book.content}</p>
    </div>
  );
 }
}
export default Book;
