import React from 'react'
import {Route,Link} from 'react-router-dom';
import Getup from './workplace/Getup';
import Money from './workplace/Money';


function Workplace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/">react</Link></li>
          <li><Link to="/Getup">Getu</Link></li>
          <li><Link to="/Money">vonee</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div>视频教程</div>
        <Route path="./workplace/Getup/" component={Getup}></Route>
        <Route path="./workplace/Money/" component={Money}></Route>
      </div>
    </div>
  )
}

export default Workplace