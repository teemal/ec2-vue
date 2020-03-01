<template>
  <div class="columns">
    <div class="column is-3 is-offset-2">
      <div v-for="(n, key) in name" v-bind:key="key">
        <Album :data="n" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["data"],
  methods: {},
  data(){
      return{
          name: []
      }
  },
  mounted() {
    this.name = this.data.split(",");
    console.log(this.name);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  margin-top: 2em;
  margin-bottom: 2em;
  background: #80cbc4;
}
.box:hover {
  cursor: pointer;
}
</style>
