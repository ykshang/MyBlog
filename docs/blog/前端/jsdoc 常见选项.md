---
title: jsdoc 常见选项
createTime: 2025/12/21 22:34:07
permalink: /blog/vw7s7qfw/
---

本文档收集了日常 JavaScript/TypeScript 开发中常用的 JSDoc 注释示例，帮助开发者编写清晰、规范的代码文档。

## 1. 函数注释

### 基本函数注释

```javascript
/**
 * 计算两个数字的和
 * @param {number} a - 第一个数字
 * @param {number} b - 第二个数字
 * @returns {number} 两个数字的和
 */
function add(a, b) {
  return a + b;
}
```

### 带默认参数的函数

```javascript
/**
 * 计算一个数字的平方，如果没有提供数字则使用默认值 0
 * @param {number} [num=0] - 要计算平方的数字
 * @returns {number} 数字的平方
 */
function square(num = 0) {
  return num * num;
}
```

### 异步函数

```javascript
/**
 * 从服务器获取用户数据
 * @param {number} userId - 用户 ID
 * @returns {Promise<Object>} 用户数据对象
 */
async function getUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
}
```

### 可变参数函数

```javascript
/**
 * 计算多个数字的总和
 * @param {...number} numbers - 要相加的数字列表
 * @returns {number} 所有数字的总和
 */
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

## 2. 类注释

### 基本类注释

```javascript
/**
 * 表示一个用户对象
 */
class User {
  /**
   * 创建一个用户实例
   * @param {string} name - 用户名
   * @param {number} age - 用户年龄
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * 获取用户的详细信息
   * @returns {string} 用户信息字符串
   */
  getInfo() {
    return `${this.name} is ${this.age} years old`;
  }
}
```

### 类的静态方法

```javascript
/**
 * 数学工具类
 */
class MathUtil {
  /**
   * 计算圆的面积
   * @param {number} radius - 圆的半径
   * @returns {number} 圆的面积
   */
  static calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
}
```

## 3. 参数注释

### 对象参数

```javascript
/**
 * 创建一个新的书籍记录
 * @param {Object} book - 书籍信息对象
 * @param {string} book.title - 书籍标题
 * @param {string} book.author - 书籍作者
 * @param {number} book.year - 出版年份
 * @returns {Object} 创建的书籍记录
 */
function createBook(book) {
  return { id: Date.now(), ...book };
}
```

### 数组参数

```javascript
/**
 * 过滤数组中的偶数
 * @param {number[]} numbers - 数字数组
 * @returns {number[]} 偶数数组
 */
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
```

### 联合类型参数

```javascript
/**
 * 格式化输入值为字符串
 * @param {string|number|boolean} value - 要格式化的值
 * @returns {string} 格式化后的字符串
 */
function formatValue(value) {
  return String(value);
}
```

### 可选参数

```javascript
/**
 * 记录用户登录信息
 * @param {string} username - 用户名
 * @param {Object} [options] - 可选配置
 * @param {boolean} [options.remember] - 是否记住登录状态
 * @returns {void}
 */
function logUserLogin(username, options) {
  console.log(`User ${username} logged in`);
  if (options?.remember) {
    console.log("Remember me option selected");
  }
}
```

## 4. 返回值注释

### 返回对象

```javascript
/**
 * 获取当前时间信息
 * @returns {Object} 包含时间信息的对象
 * @returns {number} return.hour - 当前小时
 * @returns {number} return.minute - 当前分钟
 * @returns {number} return.second - 当前秒
 */
function getCurrentTime() {
  const now = new Date();
  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
}
```

### 返回数组

```javascript
/**
 * 获取斐波那契数列的前 n 项
 * @param {number} n - 要获取的项数
 * @returns {number[]} 斐波那契数列数组
 */
function getFibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}
```

### 返回 null 或 undefined

```javascript
/**
 * 尝试查找数组中的元素
 * @param {Array} arr - 要搜索的数组
 * @param {*} target - 要查找的目标元素
 * @returns {number|null} 找到的元素索引，未找到则返回 null
 */
function findIndex(arr, target) {
  const index = arr.indexOf(target);
  return index !== -1 ? index : null;
}
```

## 5. 类型定义

### 基本类型定义

```javascript
/**
 * @typedef {Object} UserProfile
 * @property {string} name - 用户名
 * @property {string} email - 用户邮箱
 * @property {number} age - 用户年龄
 */

/**
 * 更新用户资料
 * @param {number} userId - 用户 ID
 * @param {UserProfile} profile - 新的用户资料
 * @returns {Promise<UserProfile>} 更新后的用户资料
 */
async function updateUserProfile(userId, profile) {
  // 实现代码
}
```

### 复杂类型定义

```javascript
/**
 * @typedef {Object} ApiResponse
 * @property {number} code - 响应状态码
 * @property {string} message - 响应消息
 * @property {Object|Array|string|number|null} data - 响应数据
 */

/**
 * 处理 API 响应
 * @param {ApiResponse} response - API 响应对象
 * @returns {Object} 处理后的响应数据
 */
function handleApiResponse(response) {
  if (response.code === 200) {
    return response.data;
  }
  throw new Error(response.message);
}
```

## 6. 模块注释

### CommonJS 模块

```javascript
/**
 * 工具函数模块
 * @module utils
 */

/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date) {
  return date.toISOString().split("T")[0];
}

/**
 * 生成随机 ID
 * @returns {string} 随机 ID
 */
function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

module.exports = {
  formatDate,
  generateId,
};
```

### ES 模块

```javascript
/**
 * 字符串处理工具
 * @module stringUtils
 */

/**
 * 将字符串转换为驼峰命名
 * @param {string} str - 要转换的字符串
 * @returns {string} 驼峰命名的字符串
 */
export function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * 将字符串转换为连字符命名
 * @param {string} str - 要转换的字符串
 * @returns {string} 连字符命名的字符串
 */
export function toKebabCase(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}
```

## 7. 事件注释

```javascript
/**
 * @event User#login
 * @type {Object}
 * @property {string} username - 登录的用户名
 * @property {Date} timestamp - 登录时间
 */

/**
 * 用户类
 */
class User {
  constructor(name) {
    this.name = name;
    this.events = {};
  }

  /**
   * 触发登录事件
   */
  login() {
    /**
     * @type {Object}
     */
    const loginEvent = {
      username: this.name,
      timestamp: new Date(),
    };

    // 触发登录事件
    this.emit("login", loginEvent);
  }
}
```

## 8. 其他常用注释

### 私有成员

```javascript
/**
 * 缓存管理器
 */
class CacheManager {
  constructor() {
    /**
     * 内部缓存存储
     * @private
     * @type {Map<string, *>}
     */
    this._cache = new Map();
  }

  /**
   * 获取缓存值
   * @param {string} key - 缓存键
   * @returns {*} 缓存值
   */
  get(key) {
    return this._cache.get(key);
  }
}
```

### 常量注释

```javascript
/**
 * API 基础 URL
 * @constant
 * @type {string}
 */
const API_BASE_URL = "https://api.example.com";

/**
 * HTTP 状态码
 * @readonly
 * @enum {number}
 */
const HttpStatus = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
```

### 代码示例

```javascript
/**
 * 计算阶乘
 * @param {number} n - 非负整数
 * @returns {number} n 的阶乘
 * @example
 * // 返回 120
 * factorial(5);
 * @example
 * // 返回 1
 * factorial(0);
 */
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

### 抛出异常

```javascript
/**
 * 除法运算
 * @param {number} dividend - 被除数
 * @param {number} divisor - 除数
 * @returns {number} 商
 * @throws {Error} 如果除数为 0
 */
function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error("除数不能为 0");
  }
  return dividend / divisor;
}
```

### 版本信息

```javascript
/**
 * 应用程序版本
 * @version 1.2.3
 */
const appVersion = "1.2.3";

/**
 * 更新用户信息
 * @version 2.0.0
 * @param {number} userId - 用户 ID
 * @param {Object} data - 用户数据
 * @returns {Promise<Object>} 更新后的用户信息
 */
async function updateUser(userId, data) {
  // 实现代码
}
```

## 总结

以上是日常开发中常用的 JSDoc 注释示例，涵盖了函数、类、参数、返回值、类型定义、模块等多种场景。合理使用 JSDoc 注释可以提高代码的可读性和可维护性，同时也能为 IDE 提供更好的代码提示和类型检查支持。
