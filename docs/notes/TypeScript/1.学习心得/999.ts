class Parent {
  name: string;
}
class Child extends Parent {
  age: number;
}

class Person {
  speak = (val: Child) => {
    return "speak";
  };
  hold(val: Child) {
    return "hold";
  }
  breath(val: Parent) {
    return "breath";
  }
}
class Man extends Person {
  speak = (val: Parent) => {
    return "speak";
  };
  override hold(val: Parent) {
    return "hold";
  }
  override breath(val: Child) {
    return "breath";
  }
}
