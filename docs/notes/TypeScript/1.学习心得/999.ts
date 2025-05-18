class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static id: "1";
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
interface UserInterface {
  (name: string, age: number): void;
  new (name: string, age: number): UserInterface;
}
const UserClass: UserInterface = function (name: string, age: number) {
  console.log(name, age);
} as UserInterface;
UserClass.prototype = User.prototype;
console.log(UserClass("xiaoming", 12));
