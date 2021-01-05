type IUserInfoFunc = (user:IUser) => string
//校验函数 参数和返回值
interface IUser {
  name:string;
  age:number;
}
//接口，只要实现接口就可以

const getUserInfoWidthType:IUserInfoFunc = (user) => {
  return `name:${user.name},age:{user.age}`;
}

getUserInfoWidthType({name:'jing',age:12})