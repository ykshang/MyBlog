---
title: Zstandard 压缩
createTime: 2025/06/29 18:16:03
permalink: /blog/7qclxlzz/
---

Zstandard 是 Facebook 于 2016 年开源的高性能压缩算法，旨在提供 **实时压缩速度** 和 **接近 Brotli 的压缩率**。以下是其核心技术解析：

## 核心设计思想

### 1、混合算法架构

- 结合 **字典压缩** + **LZ77** + **熵编码** 三阶段流水线
- 支持从 `-1`（最快）到 `22`（最高压缩比）的 23 个压缩级别

### 2、可训练字典

- 允许用户为特定数据类型生成专用字典（如 JSON/日志/二进制）
- 字典大小可调（默认 112KB，最大支持 2GB）

### 3、多线程优化

- 原生支持并行压缩（`--threads=N` 参数）
- 解压仍保持单线程（确保低端设备兼容性）

## 压缩流程（分步解析）

### 1、预处理阶段

```python
# 伪代码示例
if 使用字典:
    load_custom_dictionary()  # 加载预训练字典
init_parallel_workers()      # 初始化多线程
```

### 2、LZ77 阶段优化

对重复模式生成 `<offset, length>` 元组
采用 **可变大小哈希链** 加速匹配：

| 压缩级别 | 哈希链长度 | 搜索深度 |
| -------- | ---------- | -------- |
| 1        | 3          | 4        |
| 19+      | 8          | 128      |

### 3、熵编码阶段

- 比 Huffman 编码快 30% 且节省 5-10% 空间
- 使用 **有限状态熵 (FSE)** 编码：

  ```mermaid
  graph LR
  A[符号] --> B{频率>阈值?}
  B -->|是| C[FSE编码]
  B -->|否| D[原始字节]
  ```

### 4、块结构设计

每个 Zstandard 帧包含：

```c
struct ZstdFrame {
  uint32_t magic_number;  // 0xFD2FB528
  uint8_t  header;       // 字典ID/块大小标识
  uint64_t checksum;      // 可选的XXHash64
  byte     data[];        // 压缩内容
}
```

## 关键技术创新

### 1、动态块分割

- 自动检测数据特征划分块大小（默认 128KB）
- 对结构化数据（如 JSON）采用更小的块

### 2、反向匹配优化

- 不仅向前搜索重复，也检查 **向后 1KB** 的潜在匹配
- 提升 2-5% 压缩率（尤其对日志类数据）

### 3、零成本重置

- 自动根据 CPU 负载调整压缩级别
- 允许在流式传输中重置压缩状态：

  ```bash
  zstd --adapt min=1,max=22 -f input.log
  ```

## 性能实测对比

| 算法       | 压缩速度 (MB/s) | 解压速度 (MB/s) | 压缩率 | 内存占用 |
| ---------- | --------------- | --------------- | ------ | -------- |
| Zstd -1    | 720             | 2500            | 2.7:1  | <1 MB    |
| Zstd -19   | 28              | 550             | 4.1:1  | ~256 MB  |
| Gzip -6    | 120             | 500             | 3.2:1  | 8 MB     |
| Brotli -11 | 12              | 400             | 4.3:1  | 300 MB   |

测试数据：Silesia Corpus / i9-13900K

## 典型应用场景

### 1、数据库存储

```sql
-- MySQL 8.0+ 启用 Zstd
ALTER TABLE logs COMPRESSION="zstd";
```

- RocksDB/MongoDB 的默认压缩算法

### 2、游戏资源打包

```bash
# Unity 资源包压缩
zstd --ultra -22 --content-size Assets.bundle
```

### 3、实时日志处理

```python
# Python 流式压缩
import zstandard as zstd
cctx = zstd.ZstdCompressor(level=3)
with open('log.zst', 'wb') as f:
    f.write(cctx.compress(log_data))
```

## 与 Brotli/Gzip 的对比选择

| 场景         | 推荐算法     | 理由                        |
| ------------ | ------------ | --------------------------- |
| Web 静态资源 | Brotli       | 最高压缩率 + 浏览器原生支持 |
| 数据库/日志  | Zstandard    | 实时压缩 + 低解压 CPU 消耗  |
| 老旧系统兼容 | Gzip         | 无处不在的支持              |
| 内存受限环境 | Zstandard -3 | 速度/内存/压缩率平衡        |

## 命令行实用示例

### 1、基础压缩

```bash
zstd file.txt         # 生成 file.txt.zst
zstd -d file.txt.zst  # 解压
```

### 2、字典训练

```bash
# 从样本生成字典
zstd --train sample/*.json -o json.dict
# 使用字典压缩
zstd -D json.dict new_data.json
```

### 3、性能调优

```bash
zstd --fast=3         # 速度优先模式
zstd --adapt          # 动态调整级别
```

Zstd 通过算法创新和工程优化，在 **速度** 和 **压缩率** 之间实现了近乎完美的平衡，成为现代数据处理的瑞士军刀。其设计理念（如可训练字典）也深刻影响了后续算法发展。
