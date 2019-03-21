import {bookConstants} from '../statuses';
import {bookActions} from '../actions';
import {bookService} from '../services';

let userBooks = bookService.getAll();
let initialState = (userBooks === null) ? [] : userBooks;

export function books(state = initialState, action){
  switch (action.type) {
    case bookConstants.CREATE_REQUEST:
      return [...state];
    case bookConstants.CREATE_SUCCESS:
      return [
        ...state,
        action.newBook
      ];
    case bookConstants.CREATE_FAILURE:
      return [
        (action.error)
      ];
    case bookConstants.DELETE_REQUEST:
      return [...state];
    case bookConstants.DELETE_SUCCESS:
      return [
      ...state.filter((book => book.id !== action.id))
      ];
    case bookConstants.DELETE_FAILURE:
      return [(action.error)];
    case bookConstants.EDIT_REQUEST:
      return state.map((book)=>book.id === action.id ? { ...book, editing:!book.editing }:book);
    case bookConstants.EDIT_SUCCESS:
      return state.map((book)=>{
        if(book.id === action.updatedBook.id) {
          return {
            ...book,
            title: action.updatedBook.title,
            content:action.updatedBook.content,
            editing: !book.editing
          }
        } else return book;
      })
    case bookConstants.EDIT_FAILURE:
      return [
      (action.error)
      ];
    default:
      return state;
  }
}
