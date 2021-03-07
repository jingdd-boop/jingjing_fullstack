import React, { Component } from 'react';

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:0
     }
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() { 
    return ( 
      <div>
        <p>
          {this.state.count}
        </p>
        <button onClick={this.addFunc.bind(this)}></button>
      </div>
     );
  }
  addFunc() {
    this.setState({
      count:this.state.count+1
    })
  }
}
 
export default Example3;