class A {
  name: string | number;
}
class B extends A {
  declare name: string;
  val: number;
}
let a: A = new A();
let b: B = new B();
a = b;
