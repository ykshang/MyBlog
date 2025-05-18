interface Person {
  name: string;
  age: number;
}
interface GetName {
  prop: string;
  version: string;
  (val: Person): string;
}
let user: Person = {
  name: "zhangsan",
  age: 18,
};
// const getUserName: GetName = function (user) {
//   return user.name;
// }
const getUserName: GetName = (user) => {
  return user.name;
};

// 必须同时给 prop 和 version 赋值，否则 ts 会报错
getUserName.prop = "任何有意义的语句";
getUserName.version = "v1.0.0";
getUserName(user);
