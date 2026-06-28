<script>
import FoodItem from "./components/FoodItem.vue"
import TodoItem from "./components/TodoItem.vue"
export default {
  data() {
    return {
      message: "Hellow Vue ",
      foods: ["apples", "mangoes", "rice", "bread", "egg", "milk", "cheese", "yogurt", "butter", "cream"],
      newItem: '',
      items: ['Buy apples','Make pizza','Mow the lawn']
    };
  },
  components: { FoodItem,TodoItem },
  methods: {
    addFavorite(food) {
      alert("You like this food " + food)
      console.log("You like this " + food)
    },
    addItem() {
        this.items.push(this.newItem),
        this.newItem = '';
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
    <h3>Todo List</h3>  
  <ul>
    <todo-item
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen; color: aliceblue;"
    />
  </ul>
  <input v-model="newItem" @keydown.enter="addItem">
  <button @click="addItem">Add</button>
  </div>
  <!-- <FoodItem food-item="Raspberyy " food-description="Raspberry is an amazing fruit."></FoodItem>
  <FoodItem food-item="Saake " food-description="Sake is Japanese rice wine."></FoodItem>
  <FoodItem v-for="food in foods" :key="food" v-bind:food-name="food" @toggle-favorite="addFavorite"></FoodItem> -->


</template>

<style>
    ul {
    width: 150px;
    list-style-type: none;
    padding-left: 10px;
}
</style>
