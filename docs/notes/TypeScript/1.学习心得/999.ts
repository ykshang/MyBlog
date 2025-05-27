interface A {
  get(name: string, n: number, aa: string): boolean | number;
}

class B implements A {
  get(name: string, n: number): boolean {
    // s 的类型是 any
    return true;
  }
}
class C extends B {
  get(name: string): boolean {
    return true;
  }
}
class D extends C {
  get(): boolean {
    return true;
  }
}
let c = new C();
let d = new D();
c.get("1");
d.get();
