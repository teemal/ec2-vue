<template>
  <div class="box">
      <p>{{data}}</p>
      <img src="@/assets/playlist_button.png" alt="" width="30vw" @click="toggleInput">
      <div v-if="this.playBtn">
        <input class="input" type="text" placeholder="playlist name" v-model="playlistName">
        <button class="button is-primary" @click="addToPlaylist(data)">Add Playlist</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['data'],
    components: {
    },
    data(){
        return{
            name: [],
            playlistSong: "",
            playBtn: false,
            playlistName: ""
        }
    },
    methods: {
    getAlbums() {
      axios
        .get("http://ec2-3-95-157-150.compute-1.amazonaws.com:3000/albums/for/artist/?artist=" + this.name)
        .then(res => {
          if (res.status === 200) {
            this.$router.replace("play/" + res.data);
            console.log("ay");
          } else {
            alert("something went wrong with login, please try again!");
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    addToPlaylist(data){
      axios
            .post("https://tj83no9v17.execute-api.us-east-1.amazonaws.com/dev/user/playlist?playlist=" + this.playlistName + "&song=" + data)
            .then(res => {
              console.log(res);
                if(res.status === 200){
                    this.playlistName =  "";
                }else{
                    alert('something went wrong with login, please try again!');
                }
            })
            .catch(e => {
              console.log(e);
            });
    },
    toggleInput(){
      this.playBtn ^= true;
    }
  },
  mounted() {
    this.name = this.data.split(",");
    console.log(this.name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    margin-top: 2em;
    margin-bottom: 2em;
    background: #80cbc4;
}
.box:hover{
    cursor: pointer;
}
.button{
  margin-top: 3%;
}
</style>
