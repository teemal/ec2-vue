<template>
  <div class="box" v-on:click="getAlbums">
      <p>{{name[0]}}</p>
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
            name: []
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
</style>
