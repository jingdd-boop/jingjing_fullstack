import React, { Component } from 'react';


class Jing extends Component {
  render() {
    return <h2>wos1jingjinf</h2>
  }

  componentWillUnmount() {
    console.log("删除")
  }

  componentDidUpdate(prevProps,prevState,snapshot) {
    
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    console.log("1执行了constructor")
    this.state = { 
      counter:1,
      isShow:true
     }
  }
  render() { 
    console.log("2执行了render")
    return ( 
      <div>

      <div>{this.state.counter}</div>   
  
      <button onClick={() => this.btnClick()}>999</button>
      <hr/>
      
      <button onClick={() => this.btnChange()}>999</button>
      {this.state.isShow && <Jing/>}
      </div>
     
     );
  }

  componentDidMount() {
    console.log("3执行了componentDidMount")
  }
  componentDidUpdate() {
    console.log("4、执行了更新函数")
  }

  btnClick() {
    this.setState({
      counter:this.state.counter+1
    })
  }

  btnChange() {
    this.setState({
      isShow:!this.state.isShow
    })
  }
}


 
export default App;