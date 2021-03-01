import {CHANGE_INPUT,ADD_ITEM,REMOVE_ITEM,GET_LIST} from './actionType'

const defaultState = {
  inputValue:'写入待办',
  list : []
}

export default (state = defaultState,action) => {
  console.log(state,action)
  //reducer 里面只能接受state 不能改变state
  if(action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value
    return newState
  }

  if(action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = ''//添加完后，把input值设置为空
    return newState
  }

  if(action.type === REMOVE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState
  }

  if(action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list
    return newState
  }
   
   


  return state
}