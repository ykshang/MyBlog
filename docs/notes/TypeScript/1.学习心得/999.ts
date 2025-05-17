interface Person {
  name: string;
  age: number;
  add(x: number, y: number): number;
}

// 定义一个构造函数接口
interface PersonConstructor {
  new (name: string, age: number): Person; // 描述构造函数
}
const user:Person = {
  name: 'John',
  age: 30,
  add: function(x: number, y: number): number {
    return x + y;
  }
}
