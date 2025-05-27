<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class Options {
  name: string;
  debug?: boolean;
  log: string;
  static version: string = "1.0.0";
  version: string = "1.0.0";
}

// 子接口可以使可选属性变为必需
class StrictOptions extends Options {
  // version: string;
  static version: number;
}

let aa = new StrictOptions();
// console.log(aa.version);
console.log(StrictOptions.version);
</script>
