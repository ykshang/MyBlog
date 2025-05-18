interface Parent {
  greet(name: string): string;
}

interface Child extends Parent {
  // 保持相同签名
  greet(name: string): string;

  // 添加重载
  greet(name: string, age: number): string;

  // 或者完全覆盖（不推荐，可能会导致类型不兼容）
  greet(name: number): string;
}
class Nino implements Child {
  greet(name: any): string {
    return "Hello, " + name;
  }
}
const child = new Nino();
console.log(child.greet("John")); // 输出: Hello, John
