import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   SERVER:'http://localhost:3000/',
   countries:[]
  },
  mutations: {
   SET_COUNTRIES(state,payload){
     state.countries=payload
   }
  },
  actions: {
    fetchCountries({state,commit}){
      if(state.countries.length===0){
        var SERVER=state.SERVER;
        axios.get(SERVER+'countries')
        .then((result)=>{
          var data=result.data
          commit('SET_COUNTRIES',data)
        })
      }
    }
  },
  modules: {
  }
})
