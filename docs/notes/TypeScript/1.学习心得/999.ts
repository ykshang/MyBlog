class Point {
  x: number;
  y: number = 2;  z: number;
  constructor(x: number) {
    this.x = x;
  }
}
let point = new Point(1);
point.x; // 1
point.y; // 2
point.z; // undefined 因为 z 没有被初始化
point.z = 1; // 我们在类的实例中给 z 赋值
