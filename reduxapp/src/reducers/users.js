const initialState = {
  authenticated: false,
  error: '',
  user: {
    Email: '',
    Token: ''
  },
  loading: false
};

export default function users(state = initialState, action) {
  if(action.type === 'USER_LOGIN_REQUEST') {
    return {...state, loading:true};
  }
  else if (action.type === 'USER_LOGIN_SUCCESS') {
    return {...state, authenticated: true, loading: false};
  }
  else if (action.type === 'USER_LOGIN_FAILURE') {
    return {...state, authenticated: false, loading: false};
  }
  return state;
}
