import {bookConstants} from '../statuses';
import {bookActions} from '../actions';

//let initialState = this.props.dispatch(bookActions.getAll());

export function books(state = [], action){
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
    default:
      return state;
  }
}
