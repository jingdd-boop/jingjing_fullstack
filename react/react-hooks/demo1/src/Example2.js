import React, { useState } from 'react';
// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       couter:1
//      }
//   }
//   render() { 
//     return ( 
//       <div>
//         <p>
//           {this.state.couter}
//         </p>
//         <button onClick={this.addFun.bind(this)}>点击加一</button>
//       </div>
//      );
//   }
//   addFun() {
//     this.setState({
//      couter : this.state.couter+1
//     })
//   }
// }

function Example2() {
  const [age,setAge] = useState(18);
  const [sex,setSex] = useState('男');
  const [work,setWork] = useState('前端');
  //等价于
  /**
   * let _useState = userState(0)
   * let count = _useState[0]
   * let setState = _useState[1]
   */
  return (
    <div>
      <p>JSpang {age}</p>
      <p>JSpang {sex}</p>
      <p>JSpang {work}</p>
    </div>
  )
}
 
export default Example2;

//useEffect() 副作用  和函数页面主逻辑关联不大
//ajax 监听 手动修改dom
//