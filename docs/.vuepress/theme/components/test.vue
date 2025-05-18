<template>
  <div class="test-container">
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 响应式数据
const count = ref(0);
const title = ref("Vue3 + TS Component");

// 方法
const increment = () => {
  count.value++;
};

/// ------------------
console.clear();
// 实例接口
interface DatabaseInstance {
  query(sql: string): Promise<any[]>;
  close(): void;
}

// 静态部分接口（包含构造函数和其他静态成员）
interface DatabaseConstructor {
  new (connectionString: string): DatabaseInstance;
  readonly version: string;
  getSupportedDrivers(): string[];
}

// 实现
const Database: DatabaseConstructor = class Database
  implements DatabaseInstance
{
  static version = "2.3.1";

  static getSupportedDrivers() {
    return ["postgres", "mysql", "sqlite"];
  }

  constructor(private connectionString: string) {
    // 初始化连接
  }

  async query(sql: string) {
    console.log(`Executing: ${sql}`);
    return [
      /* 结果 */
    ];
  }

  close() {
    console.log("Connection closed");
  }
};

// 使用
const db = new Database("postgres://user:pass@localhost:5432/db");
console.log(Database.version); // "2.3.1"
db.query("SELECT * FROM users").then((res) => {
  console.log(res); // 执行查询
  db.close(); // 关闭连接
});
/// --------------------------
</script> 

<style scoped>
.test-container {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
