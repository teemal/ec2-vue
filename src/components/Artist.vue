<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <div v-for="(n, key) in name" v-bind:key="key">
        <Artists :data="n" />
      </div>
    </div>
  </div>
</template>

<script>
import Artists from './Artists'
import axios from "axios";
export default {
  props: ["data"],
  components:{
    Artists
  },
  data() {
    return {
      name: []
    };
  },
  methods: {
    getAlbums() {
      axios
        .get("http://ec2-18-208-114-118.compute-1.amazonaws.com:3000/artists/for/genre?genre=" + this.name)
        .then(res => {
          // console.log(res);
          // if (res.status === 200) {
          //   this.$router.replace("");
          //   console.log("ay");
          // } else {
          //   alert("something went wrong with login, please try again!");
          // }
        })
        .catch(e => {
          console.log(e);
        });
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
