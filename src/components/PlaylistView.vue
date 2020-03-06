<template>
  <div class="wrapper">
    <div v-for="pl in this.playlists" v-bind:key="pl">
        <div class="playlists" @click="getSongs(pl)">
            <Playlist :data="pl"/>
        </div>
    </div>
  </div>
</template>

<script>
// import router from 'vue-router'
import axios from 'axios'
import Playlist from "@/components/Playlist";
export default {
    props: ['data'],
    data(){
        return{
            playlists: []
        }
    },
  components: {
    Playlist
  },
  methods: {
      getSongs(pl){
          axios
        .get(
          "https://tj83no9v17.execute-api.us-east-1.amazonaws.com/dev/user/playlist?id=" + pl
        )
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            console.log(res)
            this.$router.replace("/PlaylistSongsView/" + res.data);
            console.log("ay");
          } else {
            alert("something went wrong with login, please try again!");
          }
        })
        .catch(e => {
          console.log(e);
        });
      }
  },
  mounted(){
      this.playlists.push(this.data)
  }
};
</script>

<style scoped>
.playlists:hover{
    cursor: pointer;
}
</style>