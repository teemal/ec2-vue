<template>
  <div class="wrapper">
    <button class="button is-link"  @click="goToPlaylists">Go To Playlists</button>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div v-for="genre in this.genres" v-bind:key="genre">
          <Genre :name="genre"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Genre from './Genre';
import axios from 'axios';
export default {
  components:{
    Genre
  },
  props: ['data'],
  data () {
    return {
      genres: []
    }
  },
  methods:{
    goToPlaylists(){
      axios
        .get(
          "https://tj83no9v17.execute-api.us-east-1.amazonaws.com/dev/user/get/playlists"
        )
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            console.log(res)
            this.$router.replace("/PlaylistView/" + res.data);
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
  mounted () {
    this.genres = this.data.split(',');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column{
  margin-top: 3em;
  background: #b2dfdb;
  border-radius: 2%;
}
.button{
  margin-top: 2%;
}
</style>
