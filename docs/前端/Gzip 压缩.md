---
title: Gzip 压缩配置详解
createTime: 2025/06/29 00:31:29
permalink: /article/iir8otql/
---

Gzip 是一种广泛使用的文件压缩算法，可以显著减小文本类资源的传输体积。以下是详细的配置指南，涵盖 Webpack、Node.js 服务器和 Nginx 服务器的配置细节。

## Webpack 配置 Gzip 压缩

### 安装 compression-webpack-plugin 插件

```bash
npm install compression-webpack-plugin@^9.0.0 --save-dev
```

### 完整 webpack 配置示例

```javascript
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz", // 输出文件名模式
      algorithm: "gzip", // 使用gzip算法
      test: /\.(js|css|html|json|svg|txt|eot|otf|ttf|woff|woff2)$/, // 压缩文件类型
      threshold: 10240, // 只压缩大于10KB的文件
      minRatio: 0.8, // 只有压缩率优于80%才会压缩
      deleteOriginalAssets: false, // 保留原始文件
      cache: true, // 启用缓存
      compressionOptions: {
        level: 9, // 最高压缩级别
      },
    }),
  ],
};
```

### 构建参数说明

| 参数                   | 类型            | 默认值            | 说明                                        |
| ---------------------- | --------------- | ----------------- | ------------------------------------------- |
| `filename`             | String/Function | `[path][base].gz` | 生成的压缩文件名模式                        |
| `algorithm`            | String/Function | `gzip`            | 压缩算法，支持`gzip`/`deflate`/`deflateRaw` |
| `test`                 | RegExp/Array    | 匹配所有文件      | 指定需要压缩的文件类型                      |
| `threshold`            | Number          | `0`               | 文件大小阈值（字节），大于此值才压缩        |
| `minRatio`             | Number          | `0.8`             | 压缩比阈值，小于此值才压缩                  |
| `deleteOriginalAssets` | Boolean         | `false`           | 是否删除原始文件                            |
| `cache`                | Boolean/String  | `false`           | 启用缓存或指定缓存目录                      |
| `compressionOptions`   | Object          | `{}`              | 传递给 zlib 的选项                          |

## Node.js 服务器配置

### Express 服务器详细配置

```javascript
const express = require("express");
const compression = require("compression");
const zlib = require("zlib");

const app = express();

// 高级压缩配置
app.use(
  compression({
    level: zlib.constants.Z_BEST_COMPRESSION, // 压缩级别
    memLevel: 9, // 内存使用级别(1-9)
    strategy: zlib.constants.Z_DEFAULT_STRATEGY, // 压缩策略
    threshold: "10kb", // 最小压缩大小
    filter: (req, res) => {
      // 自定义过滤规则
      const type = res.getHeader("Content-Type") || "";
      const shouldCompress = /text|javascript|json|xml|font|svg/.test(type);

      if (req.headers["x-no-compression"]) {
        return false;
      }
      return shouldCompress;
    },
  })
);

// 静态文件服务（优先使用预压缩文件）
app.get("*.js", (req, res, next) => {
  if (req.acceptsEncodings("gzip")) {
    req.url = req.url + ".gz";
    res.set("Content-Encoding", "gzip");
    res.set("Content-Type", "application/javascript");
    res.set("Vary", "Accept-Encoding");
  }
  next();
});

app.use(express.static("dist"));

app.listen(3000, () => {
  console.log("Server running with Gzip compression");
});
```

### 压缩中间件参数详解

| 参数        | 类型          | 默认值                       | 说明                              |
| ----------- | ------------- | ---------------------------- | --------------------------------- |
| `level`     | Integer       | `-1` (Z_DEFAULT_COMPRESSION) | 压缩级别(0-9)                     |
| `memLevel`  | Integer       | `8`                          | 内存使用级别(1-9)                 |
| `strategy`  | Integer       | `0` (Z_DEFAULT_STRATEGY)     | 压缩策略                          |
| `threshold` | Number/String | `0`                          | 最小压缩大小(字节或字符串如'1kb') |
| `filter`    | Function      | 默认过滤文本类型             | 自定义压缩过滤函数                |

## Nginx 服务器详细配置

### 完整 Nginx Gzip 配置

```nginx
http {
  # 基本Gzip配置
  gzip on;
  gzip_http_version 1.1;
  gzip_comp_level 6;
  gzip_min_length 1024;
  gzip_proxied any;
  gzip_vary on;

  # 压缩类型配置
  gzip_types
    text/plain
    text/css
    text/javascript
    text/xml
    application/javascript
    application/x-javascript
    application/json
    application/xml
    application/xml+rss
    application/vnd.ms-fontobject
    application/x-font-ttf
    font/opentype
    image/svg+xml;

  # 预压缩文件配置
  gzip_static on;
  gunzip on;

  # 禁用特定浏览器的Gzip
  gzip_disable "MSIE [1-6]\.";

  # 其他优化参数
  gzip_buffers 16 8k;
}
```

### Nginx 配置参数详解

| 指令                | 值类型        | 默认值      | 说明                                    |
| ------------------- | ------------- | ----------- | --------------------------------------- |
| `gzip`              | on/off        | off         | 启用/禁用 Gzip 压缩                     |
| `gzip_http_version` | 1.0/1.1       | 1.1         | 最小 HTTP 版本要求                      |
| `gzip_comp_level`   | 1-9           | 1           | 压缩级别(越高压缩率越大但 CPU 消耗越高) |
| `gzip_min_length`   | 字节数        | 20          | 最小压缩文件大小                        |
| `gzip_proxied`      | 多种选项      | off         | 对代理请求的压缩行为                    |
| `gzip_vary`         | on/off        | off         | 是否添加"Vary: Accept-Encoding"头       |
| `gzip_types`        | MIME 类型列表 | text/html   | 指定压缩的文件类型                      |
| `gzip_static`       | on/off/always | off         | 优先使用预压缩文件(.gz)                 |
| `gunzip`            | on/off        | off         | 为不支持 Gzip 的客户端解压              |
| `gzip_buffers`      | number size   | 32 4k/16 8k | 压缩缓冲区数量和大小                    |

### 推荐的 Nginx 压缩类型

```nginx
gzip_types
  text/plain
  text/css
  text/javascript
  text/xml
  text/x-component
  application/javascript
  application/x-javascript
  application/json
  application/xml
  application/xml+rss
  application/xhtml+xml
  application/rss+xml
  application/atom+xml
  application/vnd.ms-fontobject
  application/x-font-ttf
  application/x-font-opentype
  application/x-font-truetype
  font/eot
  font/opentype
  font/otf
  image/svg+xml
  image/x-icon;
```

## 验证 Gzip 是否生效

### 使用 curl 命令验证

```bash
curl -H "Accept-Encoding: gzip" -I http://yourserver.com/main.js

# 预期输出应包含：
# Content-Encoding: gzip
# Vary: Accept-Encoding
```

### 浏览器开发者工具检查

1. 打开 Chrome 开发者工具(F12)
2. 切换到 Network 标签
3. 刷新页面
4. 点击任意资源文件，查看响应头：
   - 应有`content-encoding: gzip`
   - 比较`Content-Length`和资源实际大小

### 文件大小对比检查

```bash
# 原始文件大小
ls -lh dist/main.js

# Gzip压缩后大小
ls -lh dist/main.js.gz
```

## 性能优化建议

1. **静态文件**：

   - 使用 Webpack 预生成.gz 文件
   - 配置 Nginx 优先使用预压缩文件(`gzip_static on`)

2. **动态内容**：

   - 使用 Node.js 中间件实时压缩
   - 设置适当的压缩级别(通常 6 是最佳平衡点)

3. **缓存配置**：

   ```nginx
   location ~* \.(js|css|html|json)$ {
     expires 1y;
     add_header Cache-Control "public, immutable";
     add_header Vary "Accept-Encoding";
   }
   ```

4. **监控与调优**：
   - 监控服务器 CPU 使用率
   - 根据实际流量调整`gzip_comp_level`
   - 定期检查压缩率是否正常
