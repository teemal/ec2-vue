<template>
  <div class="card" id="song">
    <img class="play" src="@/assets/play_button.png" alt width="40px" @click="playSong()" />
    <p>{{title}}</p>
    <audio controls autoplay v-if="this.play">
      <source v-bind:src="song" type="audio/mpeg" />
    </audio>
  </div>
</template>
<script>
export default {
  props: ["title", "song"],
  data() {
    return {
      play: false
    };
  },
  methods: {
    playSong() {
      this.play = true;
    }
  }
};
</script>
<style scoped>
#song{
    background: #004d40;
    color: white;
}
.play{
    margin-top: 5px;
}
.play:hover {
  cursor: pointer;
}
</style>