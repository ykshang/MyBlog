interface IUser {
  name: string | number;
  age: number;
  speak: (val: number) => string;
}
class User implements IUser {
  name: string;
  age: number;
  width: number;
  speak: (val: number | string) => string;
}
