const defaultState = {
  inputValue:'gg',
  list:[]
}

export default (state = defaultState,action) => {

  if(action.type === 'change_input') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === 'add_input') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === 'remove_input') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value,1)
    return newState
  }

  return state
}