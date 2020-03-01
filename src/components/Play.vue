<template>
  <div class="box" v-on:click="getArtists">
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    margin-top: 2em;
    margin-bottom: 2em;
    background: #80cbc4;
}
.box:hover{
    cursor: pointer;
}
</style>
