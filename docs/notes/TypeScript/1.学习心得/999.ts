class A {
  #name = 1;
  getName() {
    return this.#name;
  }
}

const a = new A();

console.log(a.getName()); // 1
console.log(a["#name"]); // undefined
console.log(a["name"]); // 报错
