<template>
    <div @click="CountClicks">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p>You liked this food {{ Count }} times</p>
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
    }
}
</script>
<style></style>