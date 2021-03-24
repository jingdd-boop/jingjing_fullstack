import React, { Component } from 'react';
import {List,InputItem,WingBlank,WhiteSapce,Button} from 'antd-mobile'
// import Logo from '../../components/logo/logo'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="page-login">
        {/* <Login /> */}
        <List>
          <InputItem>lbj-账号</InputItem>
          <InputItem>lbj-密码</InputItem>
        </List>
        <WingBlank>
              <Button type="primary">登录</Button>
              <Button 
              onClick={this.handleGoRegister.bind(this)} 
              type="primary">去注册</Button>
        </WingBlank>
      </div>
     );
  }
    /*
      *     去注册
      * */
    handleGoRegister() {
      this.props.history.push('/register');
  }
}
 
export default Login;