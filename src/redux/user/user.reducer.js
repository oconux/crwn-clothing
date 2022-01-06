const INITIAL_STATE = {
  currentUser: null,
  abcName: 'Tonyy'
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER' :
    return {
      ...state,
      currentUser: action.payload,
      abcName:'Mike'
    }
    break;


    default:
    return state;
  }
}

export default userReducer;
