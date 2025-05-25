class A {
  readonly name: string;
  age: number;
}
class B extends A {
  declare name: string;
  declare readonly age: number;
}
