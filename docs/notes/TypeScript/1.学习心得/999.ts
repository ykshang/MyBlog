class A {
  show(val: string | number):number {
    return 1;
  }
}
class B extends A {
  show(val: string): string {
    return ""
  }
}
