//interface 接口，设计模式 面向接口编程
//用接口来定义方法和属性
//对象 可以用接口来约定
interface IUser {
  name:string;
  age:number;
}

const getUserInfoWidthInterface = (user:IUser):string => {
  return `name:${user.name},age:${user.age}`;
}
getUserInfoWidthInterface({name:'jinjin',age:18})