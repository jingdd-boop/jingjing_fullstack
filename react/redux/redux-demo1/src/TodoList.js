import React, { Component } from 'react';
import 'antd/dist/antd.css'

import store from './store'
import {getTodoAction,changeInputAction,addItemAction,removeItemAction,getListAction} from './store/actionCreators'

import TodoListUI from './TodoListUI'
// import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(store.getState())
    this.state = store.getState()

    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.clickRemove = this.clickRemove.bind(this)
  
    
  }
 
  componentDidMount() {
    store.subscribe(this.storeChange)//发布订阅模式

    
    const action = getTodoAction()
    store.dispatch(action)
    // axios.get('https://mock.mengxuegu.com/mock/60384a11ca363222f3d57bd3/redux/getList')
    // .then((res) => {
    //   console.log(res)
    //   const data = res.data
    //   const action = getListAction(data)
    //   store.dispatch(action)
    // })
  }
  render() { 
    return ( 
      <TodoListUI
      inputValue={this.state.inputValue}
      changeInputValue={this.changeInputValue}
      clickBtn={this.clickBtn}
      list={this.state.list}
      clickRemove={this.clickRemove}
      />
     );
  }
  
  changeInputValue(e) {
    // const action = {
    //   type:CHANGE_INPUT,
    //   value:e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  storeChange() {
    this.setState(store.getState())
  }
  clickBtn() {
    // const action = {
    //   type:ADD_ITEM
    // }
    const action = addItemAction()
    store.dispatch(action)
  }
  clickRemove(index) {
    console.log(index)
    // const action = {
    //   type:REMOVE_ITEM,
    //   index
    // }
    const action = removeItemAction(index)
    store.dispatch(action)
  }
}
 
export default TodoList;