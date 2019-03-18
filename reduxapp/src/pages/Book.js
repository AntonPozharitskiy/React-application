import React, { Component } from 'react';

class Book extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.message}</p>
    </div>
  );
 }
}
export default Book;
