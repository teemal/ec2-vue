<template>
  <div class="box" v-on:click="getArtists">
      <p>{{name}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['name'],
    components: {
    },
    methods:{
        getArtists(){
            axios
            .get("http://ec2-3-95-157-150.compute-1.amazonaws.com:3000/artists/for/genre?genre=" + this.name)
            .then(res => {
              console.log(res);
                if(res.status === 200){
                    this.$router.push('artists/' + res.data)
                    console.log('ay')
                }else{
                    alert('something went wrong with login, please try again!');
                }
            })
            .catch(e => {
              console.log(e);
            });
        }
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
