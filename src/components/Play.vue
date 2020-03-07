<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column is-6 is-offset-2">
        <Audio :key="song" :song="song"/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-2 is-offset-2">
        <div v-for="(n, key) in name" v-bind:key="key" v-on:click="getSongs(n)">
          <Album :data="n" />
        </div>
      </div>
      <div class="column is-3 is-offset-1">
        <div class="songs" v-for="(s, key) in this.songs" v-bind:key="key">          
          <Song :data="s" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Album from "./Album";
import Song from "./Song";
import Audio from "./Audio"

export default {
  props: ["data"],
  methods: {
    getSongs(n) {
      this.$store.dispatch('changeAlb', n);
      // console.log(this.$store.getters.ALBUM);
      // console.log('fuck');
      axios
        .get("http://ec2-3-95-157-150.compute-1.amazonaws.com:3000/songs/for/album/?album=" + n)
        .then(res => {
          this.songs = res.data;
        });
      this.$forceUpdate();
      console.log(this.songs);
    },
    getSong(s){
        axios
        .get("http://ec2-3-95-157-150.compute-1.amazonaws.com:3000/song/?song=" + s)
        .then(res => {
          this.song = res.data;
        });
        console.log(this.song)
    }
  },
  components: {
    Album,
    Song,
    Audio
  },
  data() {
    return {
      name: [],
      songs: [],
      song: ""
    };
  },
  mounted() {
    this.name = this.data.split(",");
    // console.log(this.name);
    axios
      .get("http://ec2-3-95-157-150.compute-1.amazonaws.com:3000/songs/for/album/?album=" + this.name[0])
      .then(res => {
        this.songs = res.data;
      });
    setTimeout(console.log("songs: " + this.songs), 3000);
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
.songs {
  margin-top: 2em;
  margin-bottom: 2em;
  background: #80cbc4;
  border-radius: 2px;
}
.songs:hover {
  cursor: pointer;
}
</style>
