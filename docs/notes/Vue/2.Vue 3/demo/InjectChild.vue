<template>
  <GrandChild></GrandChild>
</template>
<script setup lang="ts">
import GrandChild from "./InjectGrandChild.vue";
defineOptions({
  name: "ChildView",
});
</script>
