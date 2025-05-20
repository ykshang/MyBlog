<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class Dictionary {
  private _data: { [key: string]: any } = {};

  // 索引 getter
  get(key: string): any {
      return this._data[key];
  }

  // 索引 setter
  set(key: string, value: any): void {
      this._data[key] = value;
  }
}

const dict = new Dictionary();
dict.set('name', 'Alice');
console.log(dict.get('name')); // 输出: Alice
console.log(dict); // 输出: Alice

</script> 
