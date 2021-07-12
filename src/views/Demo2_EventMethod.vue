<template>
  <div app = "demo2">
      <h1>Event and Methods</h1>
      <button v-on:click="clickMe">ClickMe</button>
      <button v-on:click="clickMe2('Welcome to VueJS')">ClickME2</button>
      <button @click="clickMe3('Welcome to My World')">ClickME3</button>
      <h3>{{getTimestamp()}}</h3>
  </div>    
</template>

<script>
export default {
    name : "Demo2" ,
    mounted() {
        this.initial()
    },

    methods : {
        initial() {
            console.log("Initialzation")
        },
        clickMe() { 
            console.log('test clicked')
        },
        clickMe2(message) {
            alert(message)
        },
        clickMe3(message) {
            alert(message)
        },
        getTimestamp() {
            return Date()
        }

    },


}
</script>

<style>

</style>