import React, { Component } from 'react';

//header
function Header() {
  return <h2>我是header</h2>
}
function Banner() {
  return <h2>Banner</h2>
}
function ProductList() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )
}

//main
//在main中请求的数据同时运用到<Banner /> <ProductList />两个子组件中
//比如说<ProductList />中的数据发生改变，需要由父组件来完成一些操作。需要子组件向父组件传递事件
function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
}
//footer
function Footer() {
  return <h2>我是footer</h2>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
     );
  }
}
 
export default App;