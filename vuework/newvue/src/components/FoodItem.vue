<template>
    <div @click="CountClicks">
        <h1>{{ foodItem}}</h1>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p>You liked this food {{ Count }} times</p>
        <p>Food Description: {{ foodDescription }}</p>
        <p>Food Name: {{ foodName }}</p>
        <p><b>Do you like this food?</b></p>
        <button @click="CountClicks">Like</button>
        
    </div>
</template>
<script>
export default{
    data(){
        return{
            name:"Mexical Food",
            message:"I want to eat mexican food",
            Count:0,
            like:false,
           
        }
    },
    methods:{
        CountClicks(){
            this.Count++
            this.like=!this.like
            this.$emit('add-favorite',this.foodName)
            
        }
    },
    props:{
        foodItem:{
            type:String,
            required:true
        },
        foodDescription:{
            type:String,
            required:true
        },
        foodName:{
            type:String,
            required:true
        }
    },
    computed:{
        likeStatus(){
            return this.like?'Liked':'Not Liked'
        }
    }
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