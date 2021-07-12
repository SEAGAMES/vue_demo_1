<template>
  <div id = "app">
    <Header />
    <Content />
    <Footer 
    @onClock="onClock" 
    title="Copyright 2021 by GAME-IT Ltd." 
    color="gray"
    />
    <span class="clock">{{time}}</span>
    
    <!-- <span class='title'>123</span> -->
  
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue"
import Footer from "../src/components/layout/Footer.vue"
import Content from "../src/components/layout/Content.vue"
import moment from "moment" ;



export default {
  components: { Header , Footer, Content },
  name : "app" , 
  methods: {
    onClock(value) {
      //this.time = value
      this.time = moment(value).format('MM/DD/YYYY hh:mm:ss') ;
    }
  },  
  data() {
    return {
      time : ""
    }
  }
}
</script>
  
<style scoped>
  .title{
    font-size : 30px ;
    color : green ;
  }
  .clock{
    font-size: 12px ;
  }
  

</style>

