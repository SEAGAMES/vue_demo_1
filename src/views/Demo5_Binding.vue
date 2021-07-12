<template>
    <div >
        <br>
        <img v-bind:src="imagex" height="300">
        <br>
        <a href="http://google.co.th">Google 1</a>
        <br>
        <a v-bind:href="link">Google 2</a>
        <br>
        <a :href="link">Google 3</a>
        <div :class="[error , important]">My Web</div>
    </div>
</template>

<script>
export default {
    name: "Demo5",
    data() {
        return {
            imagex : "https://d25tv1xepz39hi.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg" ,
            link : "http://google.co.th" ,
            error : "error_class" ,
            important : "important"
        }
    }
}
</script>
    
<style>
    .error_class {
        background-color : red ;
        color : white ;
    }
    .important {
        font-weight : 90
    }

</style>