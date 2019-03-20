import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import {bookActions} from '../actions';
class BookList extends Component {
  componentDidMount() {
    //this.props.dispatch(bookActions.getAll())
  }
  render() {
    return (
    <div>
      <h1>All Books</h1>
      {console.log('books props', this.props.books)}
      {this.props.books.map((book) => <Book key={book.id} book={this.props.books} />)}
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(BookList);
