<template>
  <div app = "demo4">
      <h2>{{firstname}}</h2>
      <h2>{{lastname}}</h2>
      <h2>{{fullname}}</h2>
      <h1>from getrandomno1() : {{getrandomno1()}}</h1>
      <h1>from getrandomno : {{getrandomno}}</h1>
  </div>
</template>

<script>
export default {
    name : "Demo4" ,
    methods: {
        getrandomno1 : function() {
            return Math.random() ;
        }
    },
    data() {
        return {
            firstname : "Thanakhit" ,
            lastname : "Nimnual"
        }
    },
    computed: {
        fullname(){
            return this.firstname + " " + this.lastname
        },
        getrandomno() {
            return Math.random() ;
        }
    }
}
</script>


<style>

</style>