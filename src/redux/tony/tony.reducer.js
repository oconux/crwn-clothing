const INITIAL_STATE = {
  weight: '100lbs',
  height: '5ft 10in',
  firstName: 'Tony',
  lastName: 'Ocon',
  favoriteFood: ['pizza','ice cream','hamburgers']

}

const tonyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_TONY_HEIGHT' :
    return {
      ...state,
      height: action.payload
    }
    break;


    default:
    return state;
  }
}

export default tonyReducer;
