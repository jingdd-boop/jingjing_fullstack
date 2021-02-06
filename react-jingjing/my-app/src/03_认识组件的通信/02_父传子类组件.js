import React, { Component } from 'react';

class Child extends Component {

  
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const {name,age,height} = this.props
    return (
      <div>
        子组件展示数据：{name+""+age+""+height}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Child name="why" age="18" height="1.88" />
        <Child name="why" age="18" height="1.889" />
      </div>
     );
  }
}
 
export default App;