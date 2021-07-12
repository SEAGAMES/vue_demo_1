<template>
  <div app = "demo5">
      <img v-bind:src="{{imageUrl}}">
  </div>
</template>

<script>
export default {
    name : "Demo5"
    data() {
        return {
            imageUrl : "https://hoodwork-production.s3.amazonaws.com/uploads/story/image/305153/white-kitten-1492390603sE2.jpg"
        }
    },

}
</script>

<style>

</style>