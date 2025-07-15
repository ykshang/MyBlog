---
title: 运行npm命令报无权限
createTime: 2025/07/15 13:45:41
permalink: /article/205bye84/
---

重装完系统后，在运行 `npm run dev` 命令时，报了无权限的错误。错误内容如下：

```bash
PS E:\Code_MyBlog\plume-153> pnpm run dev

> my-vuepress-site@1.0.0 dev E:\Code_MyBlog\plume-153
> cross-env NODE_OPTIONS=--max-old-space-size=8192 vuepress dev docs --clean-cache --clean-temp

node:fs:441
    return binding.readFileUtf8(path, stringToFlags(options.flag));

Error: EPERM: operation not permitted, open 'E:\Code_MyBlog\plume-153\node_modules\.pnpm\cross-env@7.0.3\node_modules\cross-env\src\bin\cross-env.js'
    at Object.readFileSync (node:fs:441:20)
    at defaultLoadImpl (node:internal/modules/cjs/loader:1124:17)
    at loadSource (node:internal/modules/cjs/loader:1757:20)
    at Object..js (node:internal/modules/cjs/loader:1889:44)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49 {
  errno: -4048,
  code: 'EPERM',
  syscall: 'open',
  path: 'E:\\Code_MyBlog\\plume-153\\node_modules\\.pnpm\\cross-env@7.0.3\\node_modules\\cross-env\\src\\bin\\cross-env.js'
}

Node.js v22.17.0
 ELIFECYCLE  Command failed with exit code 1.
```

经过检查后发现，在以系统管理员身份运行 `trae` 的时候，执行这个命令是不报错的，因此可能见是权限问题。

想了一下重装的系统，是不是那些依赖包的文件权限有问题，于是把 `node_moudeles` 目录的访问权限改成了 **完全控制**。发现可以运行了。

想着，既然文件的访问权限有问题，那么直接把依赖包删除，然后在当前用户下，重新执行安装命令，那么新的依赖包不就有访问权限了。费半天劲去改这个权限改那个权限，改了以后，万一给病毒留下后门，不就麻烦了。
