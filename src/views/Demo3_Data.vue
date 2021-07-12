<template>
  <div app = "demo3">
      <h1>Data</h1>
      <button @click="count++; isLogged=true;" >Count++</button>
      <p><span>{{count}}</span></p>
      <div>{{message}}</div>
      <div>{{isLogin}}</div>
      <input type="text" placehoder="Enter a message" v-model="message">
      <input type="text" placehoder="Enter a message" v-model="message">
      <h2 v-if="isLogged">Yahooo</h2>
      <div>{{account}} {{account.username}} {{account.password}}</div>
      <div>{{courses}}</div>
      <div>{{courses[0]}}</div>
      <ul>
          <li v-for="(item , index) in courses" :key="index">{{item}}</li>
      </ul>

      <span class="title">หน้าDemo3</span>

  </div>    
</template>

<script>
export default {
    name : "Demo3" ,
    mounted() {
        this.message = "Welcome to My World!!"
    },
    data() {
        return {
            count : 0 ,
            message : "" ,
            isLogin : false ,
            account : {
                username : "admin" ,
                password : "1234"
            },
            courses:[
                "Angular" ,
                "VueJs" ,
                "ReactJs" ,
                "Fluter" ,
                "UXUI"
            ]
        }
    },

}
</script>
    

<style scoped>
li{
    color : red ;
}
    .title{
        color: blue ;
    }

</style>