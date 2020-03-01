<template>
  <div class="wrapper">
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
import Genre from './Genre'
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
</style>
