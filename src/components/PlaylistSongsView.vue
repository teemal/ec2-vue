<template>
  <div class="wrapper">
    <div v-for="song in this.songList" :key="song">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <Song :data="song" />
        </div>
      </div>
      <!-- {{songList}} -->
    </div>
  </div>
</template>

<script>
// import router from 'vue-router'
import Song from './Song'
export default {
    components:{
      Song
    },
    data(){
      return{
        songList: []
      }
    },
    props: ['data'],
    mounted(){
      this.songList = this.data.split(',')
    }
};
</script>

<style scoped>
</style>