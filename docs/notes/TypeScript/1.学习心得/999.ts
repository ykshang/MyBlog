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
const Database: DatabaseConstructor = class Database implements DatabaseInstance {
  static version = "2.3.1";
  
  static getSupportedDrivers() {
      return ['postgres', 'mysql', 'sqlite'];
  }
  
  constructor(private connectionString: string) {
      // 初始化连接
  }
  
  async query(sql: string) {
      console.log(`Executing: ${sql}`);
      return [/* 结果 */];
  }
  
  close() {
      console.log('Connection closed');
  }
}

// 使用
const db = new Database('postgres://user:pass@localhost:5432/db');
console.log(Database.version); // "2.3.1"
