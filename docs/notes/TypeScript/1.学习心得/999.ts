class A {
  private x = "x";
}
class B extends A {
  private y = "y";
  get_paren_x() {
    return this.x;  // 报错 属性“x”为私有属性，只能在类“A”中访问。
  }
}
const b = new B();
// b.x; // "x"
b.get_paren_x(); // 报错
b.y; // 报错 类型“B”上不存在属性“y”。
B.x; // 报错 类型“typeof A”上不存在属性“x”。
