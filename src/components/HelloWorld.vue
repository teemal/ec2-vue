<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div v-for="(elm, idx) in this.data" v-bind:key="idx">
          <ArtistCard :name="idx" :albs="elm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ArtistCard from './ArtistCard';

export default {
  components:{
    ArtistCard
  },
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (console.log(response.data.bpi.USD.rate_float)))
    axios
      .get('http://localhost:3000/entities')
      .then((response) => {
        this.data = response.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
