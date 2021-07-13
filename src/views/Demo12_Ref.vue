<template>
  <div id="demo12">
      <h1 ref="title">Waiting for change by ref</h1>
      <input 
      ref="input"
      type="text"
      placeholder="This will be focused automatically"
    />
  </div>
</template>

<script>
export default {
  name : "Demo12" ,
    mounted() {
        this.$refs["title"].textContent = "CodeMoblies change Ref" ;
        this.$refs["input1"].focus() ;
        this.$refs["input1"].value = "1234" ;
    },
}
</script>

<style>

</style>