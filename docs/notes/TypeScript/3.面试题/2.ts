let alice = { name: "Alice", age: 30, isAdult: true };
let bob = { name: "Bob", age: 30, isAdult: true } as const;
alice = bob; // 成功
alice.name = "new name"; // 修改成功

// bob = alice;
