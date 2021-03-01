import React from 'react';

import {connect} from 'react-redux'

const TodoList = (props) => {
 
    let {inputValue,inputChange,addInput,removeInput,list} = props
    return ( 
      <div>
        <div>
          <input 
          value={inputValue} 
          onChange={inputChange}></input>
          <button onClick={addInput}>按钮</button>
        </div>
        <ul>
         {
           list.map((item,index) => {
            return  <li key={index}><button onClick={(index) => {removeInput(index)}}>删除</button> {item}  </li>
          })
       
         }
            
        </ul>
      </div>
     );
  }



const stateToProps = (state) => {
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
const dispatchToProps = (dispatch) =>{
    return {
      inputChange(e) {
        //console.log(e.target.value)
          let action = {
            type:'change_input',
            value:e.target.value
          }
          dispatch(action)
      },
      addInput() {
        let action = {
          type:'add_input',
        }
        dispatch(action)
      },
      removeInput(index) {
        let action = {
          type:'remove_input',
          value:index
        }
        dispatch(action)
      }
      
    }
}

// class TodoList extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }
 
// }

export default connect(stateToProps,dispatchToProps )(TodoList);