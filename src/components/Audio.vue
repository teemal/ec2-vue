<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column is-6 is-offset-4">
        <audio @play="sendPlay" controls>
          <source v-bind:src="this.song[0]" type="audio/wav" />
          <source v-bind:src="this.song[0]" type="audio/mpeg" />Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ["song"],
  methods: {
    sendPlay(){
      var artist = this.$store.getters.ARTIST;
      var album = this.$store.getters.ALBUM;
      var artist = this.$store.getters.SONG;
      axios
      .put(
        "https://tj83no9v17.execute-api.us-east-1.amazonaws.com/dev/play?artist=" + artist + "&album=" + album + "&song=" + song
      )
      .then((res)=>{
        console.log(res)
      })
      .catch((e)=>{
        console.log(e)
      })
    }
  }
};
</script>
<style scoped>
</style>