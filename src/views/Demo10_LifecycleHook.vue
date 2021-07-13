<template>
  <div id="demo10">
    <h1>Lifecycle Hook</h1>
    <span>{{ counter }}</span>
    <br />
    <button @click="add">Change</button>
 </div>
</template>

<script>
export default {
    name : "Demo10" ,
    data() {
        return {
            counter : 0
        }
    },
    methods: {
        add() {
            this.counter++ ;
        }
    },
    beforeCreate() {
        console.log("before create") ;
    },
    created() {
        console.log("created") ;
    },
    mounted() {
        console.log("mounted") ;
    },
    beforeUpdate() {
        console.log("beforeUpdate") ;
    },
    updated() {
        console.log("updated") ;
    },
    before_Destroy() {
        console.log("before destroy") ;
    },
    destroy() {
        console.log("destroy") ;
    },
    
}
</script>

<style>

</style>