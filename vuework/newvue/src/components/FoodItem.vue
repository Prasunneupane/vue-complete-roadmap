<template>
    <div @click="CountClicks">
        <h1>{{ foodItem}}</h1>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p>You liked this food {{ Count }} times</p>
        <p>Food Description: {{ foodDescription }}</p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            name:"Mexical Food",
            message:"I want to eat mexican food",
            Count:0
        }
    },
    methods:{
        CountClicks(){
            this.Count++
        }
    },
    props:['foodItem','foodDescription'],
}
</script>
<style>
    div{
        border: 1px solid gray;
        margin: 10px;
        padding: 10px;
        cursor: pointer;
        transition: all 0.5s ease;
    }
    /* div:hover{
        background-color: gray;
        color: white;
    } */
</style>