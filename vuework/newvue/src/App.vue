<script>
import FoodItem from "./components/FoodItem.vue"
export default {
  data() {
    return {
      message: "Hellow Vue ",
      foods: ["apples", "mangoes", "rice", "bread", "egg", "milk", "cheese", "yogurt", "butter", "cream"]
    };
  },
  components: { FoodItem },
  methods: {
    addFavorite(food) {
      alert("You like this food " + food)
      console.log("You like this " + food)
    }
  }
}
</script>
<!-- using $.emit to send data from child component to parent component -->
<template>
  <h1>{{ message }} </h1>
  <div>
    Understand Everything from start how it works. How it functions?
    Everything... :)
  </div>
  <FoodItem food-item="Raspberyy " food-description="Raspberry is an amazing fruit."></FoodItem>
  <FoodItem food-item="Saake " food-description="Sake is Japanese rice wine."></FoodItem>
  <FoodItem v-for="food in foods" :key="food" v-bind:food-name="food" @add-favorite="addFavorite(food)"></FoodItem>
</template>

<style></style>
