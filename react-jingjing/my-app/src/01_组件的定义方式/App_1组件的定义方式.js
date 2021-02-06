// import React, { Component } from 'react';

import React from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
//       <div>hhh</div>
//      );
//   }
// }
 
// export default App;

/**
 * 函数式组件的特点
 * 1、没有this对象
 * 2、没有内部的状态
 * hooks 让函数式组件可以维护自己的状态
 */

export default function App() {
  return (
    <div>
      <span>我是function的组件：app</span>
      <h2>你好</h2>
    </div>
  )
}

