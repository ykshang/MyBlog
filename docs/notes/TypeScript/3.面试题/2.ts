interface A {
  name: string;
  age?: number;
  readonly email: string;
  [key: string]: any;
}
const a: A = {
  name: "123",
  age: 123,
  email: "123@qq.com",
};
