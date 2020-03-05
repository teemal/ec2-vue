<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column is-6 is-offset-4">
        <audio controls>
          <source v-bind:src="this.song[0]" type="audio/wav" />
          <source v-bind:src="this.song[0]" type="audio/mpeg" />Your browser does not support the audio tag.
        </audio>
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