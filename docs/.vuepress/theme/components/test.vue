<template>
  <div class="test-container">
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 响应式数据
const count = ref(0);
const title = ref("Vue3 + TS Component");

// 方法
const increment = () => {
  count.value++;
};

/// ------------------
console.clear();
interface Vehicle {
  name: string;
  drive(): void;
}

interface VehicleConstructor {
  new (model: string): Vehicle;
}

class Car implements Vehicle {
  constructor(private model: string) {}
  name: string;
  drive() {
      console.log(`Driving ${this.model} car`);
  }
}

class Truck implements Vehicle {
  constructor(private model: string) {}
  name: string;
  drive() {
      console.log(`Hauling with ${this.model} truck`);
  }
}

function createVehicle(ctor: VehicleConstructor, model: string): Vehicle {
  return new ctor(model);
}

const myCar = createVehicle(Car, "Tesla");
const myTruck = createVehicle(Truck, "Ford F-150");
myCar.drive(); // Output: Driving Tesla car
myTruck.drive(); // Output: Hauling with Ford F-150 truck
console.log(myCar); // Output: undefined
// 测试函数方法 和 属性并存

/// --------------------------
</script> 

<style scoped>
.test-container {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
