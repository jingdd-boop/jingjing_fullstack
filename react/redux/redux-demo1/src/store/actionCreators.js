import { CHANGE_INPUT,ADD_ITEM,REMOVE_ITEM,GET_LIST} from './actionType'
import axios from 'axios'


export const changeInputAction = (value) => ({
  type:CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type:ADD_ITEM,
})

export const removeItemAction = (index) => ({
  type:REMOVE_ITEM,
  index
})

export const getListAction = (data) => ({
  type:GET_LIST,
  data
})

export const getTodoAction = () => {
  return (dispatch) => {
    axios.get('https://mock.mengxuegu.com/mock/60384a11ca363222f3d57bd3/redux/getList')
    .then((res) => {
      console.log(res)
      const data = res.data
      const action = getListAction(data)
      dispatch(action)
    })
  }
}
//dispatch是thunk内部调用箭头函数时，传入的参数，所以可以直接使用
//dispatch是专门用来发送Action
//axios是一个异步操作(副作用) 获得数据后，通过同步的dispatch将数据更新到redux的state
//使用redux-thunk的目的是让reduer在异步参照后自动执行
