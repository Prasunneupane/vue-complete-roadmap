<template>
  <div class="pinkBall"></div>
  <li v-bind="$attrs">{{ itemName }}</li>
  <div class="pinkBall"></div>
</template>

<script>
  export default {
    props: ['itemName']
  }
</script>

<style>
.pinkBall::before {
  content: '';
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: hotpink;
  display: inline-block;
  margin-right: 1rem;
}
</style>