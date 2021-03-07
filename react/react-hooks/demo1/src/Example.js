import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
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
function Index() {
  useEffect(() => {
    console.log('index来了')
    return () => {
      console.log('index离开')
    }
  },[])
  return (
    <div>jjjj</div>
  )
}
function List() {
  useEffect(() => {
    console.log('list来了')
    return () => {
      console.log('list离开')
    }
  })
  return (
    <div>
      list
    </div>
  )
}
function Example() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log(`${count}`)
    return () => {
      console.log('---------')
    }
  },[count])
  //等价于
  /**
   * let _useState = userState(0)
   * let count = _useState[0]
   * let setState = _useState[1]
   */
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {setCount(count+1)}}></button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </div>
  )
}
 
export default Example;