import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import {bookActions} from '../actions';
import EditBook from './EditBook';

class BookList extends Component {
  componentDidMount() {
    //this.props.dispatch(bookActions.getAll())
  }
  render() {
    return (
    <div>
      <h1 className="post_heading" >All Books:</h1><br/><br/>
      {this.props.books.map((book, index) => (
                    <div key={index}>
                        {book.editing ? <EditBook key={book.id} book={book} /> :
                            <Book key={book.id} book={book} />}
                    </div>
                ))}
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
