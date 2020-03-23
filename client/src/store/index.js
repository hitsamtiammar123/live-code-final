import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var headers={
  'token':localStorage.token
}

export default new Vuex.Store({
  state: {
   SERVER:'http://localhost:3000/',
   countries:[],
   reports:[]
  },
  mutations: {
   SET_COUNTRIES(state,payload){
     state.countries=payload
   },
   SET_REPORTS(state,payload){
     state.reports=payload
   },
   ADD_REPORT(state,payload){
     state.reports.push(payload)
   },
   DELETE_REPORT(state,payload){
     state.reports.splice(payload,1)
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
    },
    fetchReports({state,commit}){
      if(state.reports.length===0){
        var SERVER=state.SERVER;
        axios.get(SERVER+'reports',{
          headers:headers
        })
        .then((result)=>{
          var data=result.data
          commit('SET_REPORTS',data)
        })
      }
    },
    addReport({commit,state},payload){
      var countryData=state.countries.find((country)=>country.id===payload.country)
      var data={
        cases:payload.cases,
        Country:countryData
      }
      var SERVER=state.SERVER;
      axios.post(SERVER+'reports',{
        report:data.cases,
        CountryId:data.Country.id
      },{
        headers:headers
      })
      .then(()=>{
        commit('ADD_REPORT',data)
      })
      .catch()
     
    },
    deleteReport({commit},payload){
      commit('DELETE_REPORT',payload)
    }
  },
  modules: {
  }
})
