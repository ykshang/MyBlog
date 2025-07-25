---
title: 传统架构向 monorepo 架构演进
createTime: 2025/07/21 13:03:25
permalink: /article/bscys0u1/
---

::: tip
PolyRepo 的尽头是 MonoRepo。MonoRepo 的尽头是 HybridRepo（MonoRepo 核心仓 + 多个独立 PolyRepo）
:::

## 传统架构

### 什么是传统架构？

传统架构指的就是我们平时开发的项目，每个项目都有自己的项目结构，项目之间的代码是独立的。一般具备以下几个特征：

- **项目相互独立**：每个项目都有自己的项目结构，项目之间的代码是独立的。
- **技术栈独立**：不同的项目可能使用不同的技术栈和工具链。
- **依赖管理**：项目通过 `node_modules` 管理依赖，可以将一个项目作为另外一个项目的依赖。
- **独立部署**：各自独立部署上线，通常依赖 CI/CD 工具。

### 传统架构的优势

随着业务的发展，我们会创建更多的项目。这些项目之间可能会存在一些重复的代码或功能。

我们提取这些重复的代码或功能，将其发布成一个单独的 项目，通过 npm 包的方式引入到其他项目中，是一个非常好的选择。

![1](./assert/2.png)

如上图所示，在传统架构中，我们将项目分为以下几大部分：

- **业务应用类**：业务应用系统。`@scope/App1`、`@scope/App2`。
- **UI 组件类**：我们将项目用到的 UI 组件单独封装并发布成一个单体库。`@scope/component`。
- **公共方法类**：针对不同操作对象的公共方法库。`@scope/utils`。
- **工具类**：如监控组件、日志组件、文件操作组件等。`@scope/Logs`、`@scope/Chart`。
- **第三方库**：如 `Echarts`、`log4j.js` 等。

### 传统架构的局限性

随着项目数量增加，项目之间的依赖关系可能变得越来越复杂，传统架构的局限性慢慢显现出来：

- **代码耦合度高**：不同项目之间依赖相同的代码或者功能，导致代码耦合度高非常高，已有的公共代码不能随意修改。
- **依赖关系混乱**：项目下不同的依赖包引用了同一个项目的不同版本，导致依赖管理冲突。
- **版本难以管理**：当我们需要修改一个依赖库的代码时，需要根据依赖关系，依次更新每个项目，非常麻烦。

## Monorepo 架构

### 什么是 Monorepo 架构？

**Monorepo（Monolithic Repository，即单体仓库）** 是一种将多个项目或模块的代码存储在同一个版本控制仓库中的软件开发架构。与传统的**多仓库（PolyRepo）模式（每个项目独立一个仓库）** 不同，Monorepo 通过统一管理代码，强调代码共享、依赖管理和协作效率。

### Monorepo 架构如何解决传统架构存在的痛点？

::: warning 多仓库中共享代码需通过复制或发布私有包，导致版本碎片化、更新繁琐。
Monorepo 架构下，所有项目/模块在同一仓库，可直接本地引用其他模块代码，无需发布包。在修改了公共代码后，所有依赖的项目/模块都能同步更新，避免版本不一致。
:::

::: warning 依赖版本易冲突，升级需跨仓库协调，易引发“依赖地狱”
通过管理工具（如 npm、yarn 或 pnpm），强制所有模块使用本地的版本，简介保证了版本的一致性，且可以做到每一个包依旧可以独立发布成项目。
:::

::: warning 跨仓库修改需提交多个 PR，沟通成本高，重构风险大。
所有模块都在一个仓库中，修改一个模块后，其他模块也能同步更新，避免了跨仓库修改的问题。
:::

::: warning 各仓库配置（构建、测试、部署）需要单独配置，维护成本高。
在 Monorepo 架构下，我们可以配置一套相应的基础设施应用于整个仓库，包含构建（Webpack/Vite）、测试（Jest）、CI/CD 配置、代码规范（ESLint、Prettier）、提交规范（Commitlint）、文档管理（docs）等。
:::

::: warning 多仓库权限分散，新人难以全局了解代码。
所有代码可见、全局透明化，便于阅读和学习。同时可以通过权限管理，控制不同项目的访问权限。
:::

## Monorepo vs. Polyrepo

| **问题领域**        | **传统 Polyrepo 痛点** | **Monorepo 解决方案**    |
| ------------------- | ---------------------- | ------------------------ |
| **代码复用**        | 需发布版本，升级延迟   | 直接源码引用，即时生效   |
| **依赖管理**        | 版本冲突，依赖冗余     | 统一安装，依赖提升       |
| **跨项目协作**      | 跨仓库协调成本高       | 原子提交，全局可见性     |
| **工具链一致性**    | 配置重复，流程碎片化   | 统一配置，标准化流程     |
| **微服务/多端协同** | 类型不同步，版本漂移   | 共享代码和类型，统一版本 |
| **代码可维护性**    | 搜索困难，权限管理复杂 | 全局搜索，目录级权限     |


## 适用场景总结

Monorepo 特别适合以下场景：  
✅ **中大型团队**：需要高频协作和代码共享。  
✅ **全栈/多端项目**：如 Web、Mobile、后端服务共享逻辑。  
✅ **微服务架构**：服务间依赖紧密，需保证接口一致性。  
✅ **开源项目**：如 React、Vue 等管理核心库与插件。

**不适用场景**：  
❌ 独立性极强的项目（如完全无关的产品线）。  
❌ 小型团队或项目，工具链复杂度可能得不偿失。

## 最终建议

选择 Monorepo 前需评估：

1. **团队规模**：是否有足够资源维护工具链？
2. **项目关联性**：模块间是否需要高频共享代码？
3. **工具成熟度**：能否接受 Turborepo/Nx 等工具的学习成本？

若痛点集中在上述问题，Monorepo 可能是提升效率的最优解。

::: warning 注意
Monorepo 架构的优势在于代码复用、依赖管理、跨项目协作等方面。但它也有一些局限性，随着项目数量增加，仓库体积会不断增大，**容易诞生一个非常巨大的仓库**。我们需要进行 **适当的拆分**，将一些独立的、稳定的、成熟的项目拆分成独立的仓库。
:::
