import React from 'react';
import {Input , Button , List} from 'antd'
import 'antd/dist/antd.css'


const TodoListUI = (props) => {
  return ( 
    <div>
    <div style={{margin:'10px'}}>
      <Input placeholder={props.inputValue} 
      style={{width:'275px',marginRight:'10px'}}
      onChange={props.changeInputValue}
      value={props.inputValue}
      ></Input>

      <Button type="primary" onClick={props.clickBtn}>添加</Button>
    </div>
    <div style={{margin:'10px',width:'300px'}}>
      <List
      bordered
      dataSource={props.list}
      renderItem={(item,index) => (
      <div>
      <List.Item>
      <Button type="primary" onClick={
        () => {props.clickRemove(index)}}>    
        移除</Button>
        {item}
      </List.Item>
      </div>
      
      )}
      >
      </List>
      
    </div>
  </div>
   );
}

// class TodoListUI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
//       <div>
//       <div style={{margin:'10px'}}>
//         <Input placeholder={this.props.inputValue} 
//         style={{width:'275px',marginRight:'10px'}}
//         onChange={this.props.changeInputValue}
//         value={this.props.inputValue}
//         ></Input>

//         <Button type="primary" onClick={this.props.clickBtn}>添加</Button>
//       </div>
//       <div style={{margin:'10px',width:'300px'}}>
//         <List
//         bordered
//         dataSource={this.props.list}
//         renderItem={(item,index) => (
//         <div>
//         <List.Item>
//         <Button type="primary" onClick={
//           () => {this.props.clickRemove(index)}}>    
//           移除</Button>
//           {item}
//         </List.Item>
//         </div>
        
//         )}
//         >
//         </List>
        
//       </div>
//     </div>
//      );
//   }
// }
 
export default TodoListUI;