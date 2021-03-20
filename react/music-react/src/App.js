import React, { Component } from 'react';
import './App.css';
import {getBannerRequest} from './api/request'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>1</div>
     );
  }

  componentDidMount() {
    getBannerRequest()
    .then(data => {
      console.log(data);
    })
  }
}
 
export default App;


