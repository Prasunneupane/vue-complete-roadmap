<script>
  export default{
    data(){
      return{
        message: "Hellow Vue "
      }
    }
  }
</script>

<template>
  <h1>{{ message }} </h1>
  <div>
    Understand Everything from start how it works. How it functions?
    Everything... :)
  </div>
  <FoodItem food-item="Raspberyy " food-description="Raspberry is an amazing fruit."></FoodItem> 
  <FoodItem food-item="Saake " food-description="Sake is Japanese rice wine."></FoodItem>
</template>

<style >

</style>
