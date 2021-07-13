<template>
  <div id="demo7">
      <Clock>
        <span style="color:red;">เวลาปัจจุบัน</span>
      </Clock>

      <Clock>
        <span style="color:green;">เวลาปัจจุบัน</span>
      </Clock>

      <clock />
        <!-- Using fallback(default) content -->
        <clock>
            <span style="color:orange;">เวลาปัจจุบัน</span>

            <template v-slot:header>
                <h1>Header</h1>
            </template>

            <template v-slot:footer>
                <div>Footer</div>
            </template> 

        </clock>
  </div>
</template>

<script>
import Clock from "../components/helpers/Clock.vue" ;
export default {
    name : "Demo7" ,
    components : {
        Clock
    }

}
</script>

<style>

</style>