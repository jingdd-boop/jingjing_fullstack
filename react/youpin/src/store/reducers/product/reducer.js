import * as actionType from './constants';
const initialVal = {
  detail:{},
  list:[]
}

export default function productReducer (state = initialVal,action) {
  switch (action.type) {
    case actionType.CHANGE_DETAIL:
    state = { //浅拷贝
      ...state,
      detail:action.payload
    }
    default:
      return state
  }
}