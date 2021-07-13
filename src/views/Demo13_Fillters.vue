
<template>
  <div id="demo13">
    <h2>{{  ttt | uppercase }}</h2>
    <!-- <h2>{{ 200000000000 | bytes }}</h2>
    <h2>{{ "codemobiles" | capitalize({ onlyFitstLetter : true }) }}</h2>-->
    <!-- <h2>{{ [1, 2, 3] | reversArray}}</h2>  -->
  </div>
</template>

<script>
export default {
    name : "Demo13",
    data() {
      return {
        ttt: 'tttttttt'
      }
    },
    filters: {
        reverseArray(value) {
            return value.slice().reverse();
        }
    }
}
</script>

<style>

</style>