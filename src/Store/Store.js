import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artist: '',
    album: '',
    song: ''
  },
  mutations: {
    changeArtist(state, name) {
        state.artist = name;
      },
      changeAlbum(state, name) {
        state.album = name;
      },
      changeSong(state, name) {
        state.song = name;
      }
  },
  actions: {
    changeArt(context, name) {
        context.commit('changeArtist', name)
      },
      changeAlb(context, name) {
        context.commit('changeAlb', name)
      },
      changeSon(context, name) {
        context.commit('changeSong', name)
      }
  },
  getters: {
      ARTIST: state =>{
          return state.artist;
      }
  }
})