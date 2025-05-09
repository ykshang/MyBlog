---
title: 如何在前端项目中使用 MongoDB？
createTime: 2025/03/15 14:26:42
permalink: /MongoDB/wkva9f59/
tags:
  - MongoDB
  - 数据库
  - 前端
---

## 一、安装

1234

我们需要在项目里安装`mongodb`

```bash no-line-numbers
npm install mongodb
```

## 二、连接数据库

```javascript
console.log("引入依赖");
const { MongoClient } = require("mongodb");

// MongoDB连接字符串
const url = "mongodb://localhost:27017/kangkang_test";
console.log("连接：", url);
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("kangkang_test"); // 替换'yourDatabaseName'为你的数据库名
    let collection = db.collection("user");
    await collection.insertOne({ name: "John Doe", age: 30 });
    let result = await collection.findOne({});
    console.log(result);
    // 在这里执行数据库操作，例如查询、插入等
  } catch (err) {
    console.error(err);
  } finally {
    await client.close(); // 关闭连接
  }
}

run().catch(console.dir);
```

在上面的例子中，我们使用`MongoClient.connect()`方法来连接 MongoDB 数据库。你需要提供一个 MongoDB 连接字符串，其中`localhost:27017`表示 MongoDB 服务器的地址和端口号，`mydb`是数据库的名称。

一旦连接成功，你就可以进行数据库查询和操作，例如插入文档、更新文档、查询文档等。

## 三、数据库操作

可以使用`MongoClient.db()`方法创建数据库，**如果数据库已存在，则切换到该数据库**

```js
// 指定数据库
const database = client.db("kangkang_db");
```

## 四、集合操作

### 1、创建集合

```js
db.createCollection("site", function (err, res) {
  if (err) throw err;
  console.log("创建集合!");
  db.close();
});
```

## 五、文档操作

### 1、新增

- `insertOne` 插入单条数据

```js
var insertData = { name: "baidu", url: "www.baidu.com" };
dbo.collection("site").insertOne(insertData, function (err, res) {
  if (err) throw err;
  console.log("文档插入成功");
  db.close();
});
```

- `insertMany` 新增多条数据

```js
var insertData = [
  { name: "Google", url: "https://www.google.com", type: "en" },
  { name: "Facebook", url: "https://www.google.com", type: "en" },
];
dbo.collection("site").insertMany(insertData, function (err, res) {
  if (err) throw err;
  console.log("插入的文档数量为: " + res.insertedCount);
  db.close();
});
```

### 2、查询

- `find` 查询全部数据

```js
dbo.collection("site").find({}).toArray();
```

- `findOne` 查询符合条件的第一条

```js
dbo.collection("site").findOne({});
```

### 3、更新

- `updateOne` 更新一条数据

```js
dbo.collection("site").updateOne({ a: 3 }, { $set: { b: 1 } });
```

- `updateMany` 更新多条数据

```js
dbo.collection("site").updateMany({ a: 3 }, { $set: { b: 1 } });
```

### 4、删除

- `deleteOne` 删除符合条件的第一条数据

```js
dbo.collection("site").deleteOne({ a: 3 });
```

- `deleteMany` 删除符合条件的多条数据

```js
dbo.collection("site").deleteMany({ a: 3 });
```

## 六、操作符

### 1、排序

```js
dbo.collection("site")..find().sort({ type: 1 });
```

### 2、分页

```js
dbo.collection("site").find().limit(2);
```

### 3、`$in` 指定列表

以下示例从 `site` 集合中检索所有文档。其中 `status` 等于 `"A"` 或 `"D"`：

```js
dbo.collection("site").find({ status: { $in: ["A", "D"] } });
```

### 4、指定 `AND` 和 `OR` 条件

在以下示例中，复合查询文档选择集合中 `status` 等于 `"A"` **且** _`qty`_ 小于 (`$lt`) `30` _或_ `item` 以字符 `p` 开头的文档：

```js
dbo.collection("site").find({
  status: "A",
  $or: [{ qty: { $lt: 30 } }, { item: /^p/ }],
});
```

### 5、大小

| 大小 | 意义     | 操作符 |
| ---- | -------- | ------ |
| `>`  | 大于     | `$gt`  |
| `<`  | 小于     | `$lt`  |
| `>=` | 大于等于 | `$gte` |
| `<=` | 小于等于 | `$lte` |

例子：

```js
// 获取 "site" 集合中 "likes" 大于 100 的数据
dbo.collection("site").find({ likes: { $gt: 100 } });

// 获取 "site" 集合中 "likes" 大于等于 100 的数据
dbo.collection("site").find({ likes: { $gte: 100 } });

// 获取 "site" 集合中 "likes" 大于 100，小于 200 的数据
dbo.collection("site").find({ likes: { $lt: 200, $gt: 100 } });
```
