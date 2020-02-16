<template>
  <div class="card">
    <img class="play" src="@/assets/play_button.png" alt="" width="40px"><p>{{title}}</p>
  </div>
</template>
<script>
export default {
  props: ["title"]
};
</script>
<style scoped>
.play:hover{
    cursor: pointer;
}
</style>