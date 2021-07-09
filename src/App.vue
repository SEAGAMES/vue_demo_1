<template>
  <div id = "app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/demo1">Demo1 Intro</router-link></li>
      <!-- <li><router-link to="/demo2">Demo2 Events</router-link></li> -->
    </ul>
    <router-view></router-view>
  
  </div>
</template>

<script>
export default {
  name : "app" , 
}
</script>
  
<style>
  ul {
    margin: 0;
    padding: 0;
  }
  li{
    display: inline ;
    margin: 8px;
  }

</style>