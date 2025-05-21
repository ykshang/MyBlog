class C {
  _prop = "init value";
  get prop() {
    console.log("读取 prop 属性：", this._prop);
    return this._prop;
  }
  set prop(value) {
    console.log("设置 prop 属性：", value);
    this._prop = value;
  }
}
// 实例化
let c = new C();
c.prop = "123"; // 调用 setter
c.prop = 124; // 调用 setter
console.log("打印 prop：", c.prop); // 调用 getter
