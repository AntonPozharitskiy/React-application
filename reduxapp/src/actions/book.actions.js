import { bookConstants } from '../statuses';
import { bookService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';
export const bookActions = {
    create,
    getAll,
    edit,
    update,
    delete: _delete
};

function create(book) {
  return dispatch => {
    dispatch(request());

    bookService.create(book)
      .then(
        newBook => {
          dispatch(success(newBook));
        },
        error => {
          dispatch(failure(error));
        }
      )
  }
  function request() { return { type: bookConstants.CREATE_REQUEST} }
  function success(newBook) { return { type: bookConstants.CREATE_SUCCESS, newBook } }
  function failure(error) { return { type: bookConstants.CREATE_FAILURE, error } }
}

function edit(id) {
  return dispatch => {
    dispatch(request());
  }
  function request() { return { type: bookConstants.EDIT_REQUEST, id: id } }
}

function update(data) {
  return dispatch => {
    bookService.update(data)
      .then(
        updatedBook => {
          dispatch(success(updatedBook));
        }
      )
  }
  function success(updatedBook) { return { type: bookConstants.EDIT_SUCCESS, updatedBook } }
}

function _delete(id) {
  return dispatch => {
    dispatch(request());

    bookService.delete(id)
      .then(
        id => {
          dispatch(success(id));
        },
        error => {
          dispatch(failure(error));
        }
      )
    function request() { return { type: bookConstants.DELETE_REQUEST} }
    function success(id) { return { type: bookConstants.DELETE_SUCCESS, id: id } }
    function failure(error) { return { type: bookConstants.DELETE_FAILURE, error } }
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());
    bookService.getAll()
      .then(
        books => {
          dispatch(success(books));
        },
        error => {
          dispatch(failure(error));
        }
      )
  }
  function request() { return { type: bookConstants.GETALL_REQUEST } }
  function success(books) { return { type: bookConstants.GETALL_SUCCESS, books } }
  function failure(error) { return { type: bookConstants.GETALL_FAILURE, error } }
}
