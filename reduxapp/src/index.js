//CHAPTER 1
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  { App } from './app'
import reducer from './reducers';
import { configureStore } from './helpers/store';

const store = configureStore() //createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// CHAPTER 2
// import { createStore } from 'redux'
//
// function bookStore(state = [], action){
//   if(action.type === 'ADD_BOOK'){
//     return [
//       ...state,
//       action.payload
//     ];
//   }
//   return state;
// }
//
// const store = createStore(bookStore);
// const bookInput = document.querySelectorAll('.bookInput')[0];
// const bookList = document.querySelectorAll('.bookList')[0];
// const addBookButton = document.querySelectorAll('.addBook')[0];
//
// store.subscribe(()=>{
//     bookList.innerHTML = '';
//     bookInput.value = '';
//     store.getState().forEach(book => {
//       const li = document.createElement('li');
//       li.textContent = book;
//       bookList.appendChild(li);
//     })
// }
// )
//
// addBookButton.addEventListener('click', () => {
//   const bookName = bookInput.value;
//   store.dispatch({type: 'ADD_BOOK', payload: bookName});
// })
