<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class Parent {
  name: string;
}
class Child extends Parent {
  age: number;
}
class MyClass {
  myMethod = function (val: Child) {
    return "";
  };
}
class MyClass1 extends MyClass {
  myMethod = function (val: Parent) {
    console.log(this);
    return "";
  };
  
}
let aaa = new MyClass1();
aaa.myMethod(new Child());
aaa.myMethod({ name: "123" });

</script>
