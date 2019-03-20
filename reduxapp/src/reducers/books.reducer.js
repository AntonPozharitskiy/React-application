import {bookConstants} from '../statuses';
import {bookActions} from '../actions';

//let initialState = this.props.dispatch(bookActions.getAll());

export function books(state = {}, action){
  switch (action.type) {
    case bookConstants.CREATE_REQUEST:
      return {};
    case bookConstants.CREATE_SUCCESS:
      return {
        ...state,
        book: action.payload
      };
    case bookConstants.CREATE_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
