<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
class TestA {
  city: string;
  constructor(city: string) {
    this.city = city;
  }
}

interface MyCountry extends TestA {
  capital: string;
  language: string;
}
class TestB implements MyCountry {
  capital: string;
  language: string;
  constructor(capital, language) {
    this.capital = capital;
    this.language = language;
  }
}
let aaa = new TestB("北京", "中文");
</script>
