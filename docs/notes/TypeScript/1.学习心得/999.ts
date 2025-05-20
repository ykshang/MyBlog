function State(target: object, property: string) {
  let value : any;
  Object.defineProperty(target, property, {
    get() {
      return value;
    },
    set(newValue) {
      console.log(`${property} 的最新值 ${value}`);
      value = newValue;
    }
  })
}
class Person {
  name: string;
  // @State age: number;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const p = new Person('zs', 18);
console.log(p);
