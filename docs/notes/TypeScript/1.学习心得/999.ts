// 定义一个带泛型的构造函数类型
type CommonConstructor<T> = new (...args: any[]) => T;

// 用于动态创建类实例的工厂函数
// @param ctor 构造函数
// @param args 构造函数的参数列表
// @returns 构造函数的实例
function createInstance<T>(ctor: CommonConstructor<T>, ...args: any[]): T {
  return new ctor(...args);
}

// 需要被动态创建的类
class Car {
  constructor(public model: string) {}
  drive(): void {
    console.log(`Driving ${this.model}`);
  }
}
// 实例
const myCar = createInstance(Car, "Tesla Model 3");
myCar.drive(); // Output: Driving Tesla Model 3
