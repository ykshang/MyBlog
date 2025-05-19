"use strict"
class User {
  version = 1;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const userinfo1 = new User();
userinfo1.speak();
userinfo1.version = 2;
const userinfo2 = new User();
console.log(userinfo2.version);
