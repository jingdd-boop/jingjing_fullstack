import React, {Component} from 'react'
import {List,InputItem,WingBlank,WhiteSpace, Button} from 'antd-mobile'
//   import Logo from '../../pages/logo/logo'
import {connect} from 'react-redux'

  class Login extends Component {
      render() {
          return (
              <div className="page-login">
                  {/* <Logo /> */}
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <List>
                      <InputItem>lbj-账号</InputItem>
                      <InputItem>lbj-密码</InputItem>
                  </List>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WingBlank>
                      <Button type="primary">登录</Button>
                      <WhiteSpace></WhiteSpace>
                      <Button onClick={this.handleGoRegister.bind(this)} type="primary">去注册</Button>
                  </WingBlank>
              </div>
          )
      }
      /*
      *     去注册
      * */
      handleGoRegister() {
          this.props.history.push('/register');
      }
      /*
 *  登录
 * */
      handleLogin() {
        this.props.login(this.state)
    }
  }

  export default connect( state => state)(Login)