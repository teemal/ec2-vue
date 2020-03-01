<template>
  <div class="wrapper">
      <div class="columns">
          <div class="column is-6 is-offset-4">
            <audio controls>
      <source v-bind:src="this.song" type="audio/ogg" />
      <source v-bind:src="this.song" type="audio/mpeg" />Your browser does not support the audio tag.
    </audio>
          </div>
      </div>
      <div class="columns">
          <div class="column is-6 is-offset-4">
              {{this.song}}
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props: ["song"]
};
</script>
<style scoped>
</style>