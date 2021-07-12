<template>
  <div id = "clock">
      {{time}}
  </div>
</template>

<script>
import moment from "moment" ;
export default {
    name: "Clock" ,
    data() {
        return {
            time: ''
        }
    },
    mounted() {
        // console.log(this.test123())
        this.test123()
    },
    methods: {
        test123() {
            setInterval(()=> {
                this.time = moment(Date()).format("MM/DD/YYYY hh:mm:ss");
            } , 1000)
        }
    },

 
}
</script>

<style>

</style>