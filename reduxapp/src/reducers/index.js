import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { books } from './books.reducer';

export default combineReducers({
  authentication,
  registration,
  alert,
  books
})
