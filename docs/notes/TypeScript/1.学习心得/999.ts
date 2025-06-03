// 示例一
type Person = {
  age: number;
  name: string;
  alive: boolean;
};
type Age = Person['age']; // 报错

// 示例二
type Age1 = Person['a' + 'g' + 'e']; // 报错
