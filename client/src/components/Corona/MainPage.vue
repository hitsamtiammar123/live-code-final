<template>
    <div>
        <b-row class="mt-4 mb-4">
            <b-col sm="12">
                <b-form-input placeholder="Search Country" v-model="countrySearch" ></b-form-input>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="4" class="mb-3" v-for="country in countries" :key="country.id">
                <CountryCase :name="country.name" :cases="country.cases" :deaths="country.deaths" :recovered="country.recovered"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import CountryCase from '../CountryCase'

export default {
    name:'MainPage',
    components:{
        CountryCase
    },
    data(){
        return {
            countrySearch:''
        }
    },
    computed:{
        countries(){
            var countries=this.$store.state.countries
            return countries.filter((country)=>country.name.indexOf(this.countrySearch)!==-1)
        },
    },
    created(){
        this.$store.dispatch('fetchCountries')
    },
    methods:{
        
    }
}
</script>