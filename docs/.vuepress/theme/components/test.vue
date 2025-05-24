<template>
  <p>Count: {{ 1 }}</p>
</template>

<script setup lang="ts">
interface Animal {
  animalStuff: any;
}

interface Dog extends Animal {
  dogStuff: any;
}

class AnimalHouse {
  resident: Animal;

  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  declare resident: Dog;

  constructor(dog: Dog) {
    super(dog);
  }
}
const dog = {
  animalStuff: "animal",
  dogStuff: "dog",
};

const dogHouse = new DogHouse(dog);

console.log(dogHouse.resident); // 输出结果将不一致

</script>
