class Point {
  static a: number = 1;
  constructor(public a: number) {
    this.a = a;
  }
}
Point.a = 2;
let aaa = new Point(3);
aaa.a;
