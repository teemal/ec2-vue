<template>
  <div class="box">
    <p>{{name[0]}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["data"],
  components: {},
  data() {
    return {
      name: []
    };
  },
  methods: {
  },
  mounted() {
    this.name = this.data.split(",");
    // console.log(this.name);
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
