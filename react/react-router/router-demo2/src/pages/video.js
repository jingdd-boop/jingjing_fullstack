import React from 'react'
import {Route,Link} from 'react-router-dom';
import ReactPage from './video/reactpage';
import Flutter from './video/flutter';
import Vue from './video/vue';

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/">react</Link></li>
          <li><Link to="/flutter">flutter</Link></li>
          <li><Link to="/vue">vue</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div>视频教程</div>
        <Route path="./video/reactpage/" component={ReactPage}></Route>
        <Route path="./video/flutter/" component={Flutter}></Route>
        <Route path="./video/vue/" component={Vue}></Route>
      </div>
    </div>
  )
}

export default Video