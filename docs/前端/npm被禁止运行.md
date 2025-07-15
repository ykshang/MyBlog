---
title: npm被禁止运行
createTime: 2025/07/15 00:30:41
permalink: /article/mazt6ye1/
---

::: danger 错误信息
npm : 无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.c
om/fwlink/?LinkID=135170 中的 about_Execution_Policies。
:::

## 为什么会出现这个问题 ?

这个错误是因为 **PowerShell 的执行策略（Execution Policy）** 限制了脚本的运行，导致 `npm` 命令无法执行。

- Windows 默认禁止运行 `.ps1`（PowerShell 脚本）以防止恶意脚本。
- `npm` 在 Windows 上依赖 PowerShell 脚本（如 `npm.ps1`），因此受此限制。

## 解决方法

### 1、以管理员身份运行 PowerShell

右键点击 **PowerShell** 或 **Windows Terminal**，选择 **“以管理员身份运行”**。

### 2、查看当前的执行策略

```powershell
Get-ExecutionPolicy
```

- 如果返回 `Restricted`（默认值），说明系统禁止运行脚本。

### 3、更改执行策略

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

- **作用**：允许当前用户运行本地脚本，但远程脚本需签名（安全平衡方案）。
- **警告**：不要设为 `Unrestricted`（完全无限制），以免安全风险。

### 4、验证是否生效

```powershell
Get-ExecutionPolicy  # 应返回 RemoteSigned 或 Bypass
npm -v               # 测试 npm 是否可用
```

## **安全提示**

- **推荐使用 `RemoteSigned`**：允许本地脚本，但远程下载的脚本需数字签名。
- 如果问题解决，可恢复默认策略：
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted
  ```
