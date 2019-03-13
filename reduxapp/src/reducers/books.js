export default function books(state = [], action){
  if(action.type === 'ADD_BOOK'){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
