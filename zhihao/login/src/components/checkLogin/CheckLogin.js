import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class CheckLogin extends Component {
  componentDidMount() {
    // 登录注册两个页面不需要判断
  //   if(filterCheck.indexOf(this.props.location.pathname) > -1) {
  //     return;
  // }
    axios.get('/user/info')
    .then(res => {
      if(res.status === 200) {
        if(res.data.code === 0) {

        } else {
          this.props.history.push('./login')
        }
      }
    })
  }
  render() {
    return null;
  }
}

export default withRouter(CheckLogin);