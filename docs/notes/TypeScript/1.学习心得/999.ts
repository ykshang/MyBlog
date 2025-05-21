class A {
  protected x = "x";
}
class B extends A {
  public x = "x";
  protected y = "y";
  get_paren_x() {
    return this.x;
  }
}
const b = new B();
b.x; // "x"
b.y; // "x"
b.get_paren_x(); // "x"
b.y; // 报错 类型“B”上不存在属性“y”。B.x; // 报错 类型“typeof A”上不存在属性“x”。
