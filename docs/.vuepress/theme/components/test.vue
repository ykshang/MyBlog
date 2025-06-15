<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
// 定义状态枚举
enum State {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}
// 定义成功回调函数类型
type Resolve<T> = (value?: T) => void;
// 定义失败回调函数类型
type Reject = (reason: any) => void;
// 定义执行器函数类型
type Executor<T> = (resolve: Resolve<T>, reject: Reject) => void;
// 定义Promise类
class TypePromise<T = unknown> {
  private state: State = State.PENDING;
  private value?: T;
  private reason: any;
  private onFulfilledCallbacks: Resolve<T>[] = [];
  private onRejectedCallbacks: Reject[] = [];

  constructor(executor: Executor<T>) {
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  private resolve(value?: T) {
    if (this.state === State.PENDING) {
      this.state = State.FULFILLED;
      this.value = value;

      this.onFulfilledCallbacks.forEach((task) => {
        queueMicrotask(() => task(this.value));
      });
    }
  }

  private reject(reason: any) {
    if (this.state === State.PENDING) {
      this.state = State.REJECTED;
      this.reason = reason;

      this.onRejectedCallbacks.forEach((task) => {
        queueMicrotask(() => task(this.reason));
      });
    }
  }

  public then<V = unknown>(
    onFulfilled?: (value?: T) => V,
    onRejected?: (reason: any) => any
  ) {
    return new TypePromise<V>((resolve, reject) => {
      // 当全部处理完成
      const handleFulfilled = (value?: T) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          // 成功回调
          resolve(result as V);
        } catch (e) {
          // 抛出问题原因
          reject(e);
        }
      };
      // 当遇到失败
      const handleRejected = (reason: any) => {
        try {
          const result = onRejected ? onRejected(reason) : reason;

          reject(result);
        } catch (e) {
          reject(e);
        }
      };

      if (this.state === State.FULFILLED) {
        queueMicrotask(() => handleFulfilled(this.value));
      } else if (this.state === State.REJECTED) {
        queueMicrotask(() => handleRejected(this.reason));
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }
}

new TypePromise((resolve, reject) => {
  const i = Math.random() * 10;

  console.log({ i });

  if (i < 5) {
    resolve("success");
  }

  reject("failed");
}).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
// 测试一下
new TypePromise((resolve) => {
  setTimeout(() => {
    resolve("success frist");
  });
})
  .then((res) => {
    console.log(res);
    return "success second";
  })
  .then((res) => {
    console.log(res);
  });
</script>
