<template>
    <div>
        <b-row class="mt-4 mb-4">
            <b-col sm="12">
                <b-form-input placeholder="Search Country"></b-form-input>
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
    computed:{
        countries(){
            return this.$store.state.countries
        }
    },
    created(){
        this.$store.dispatch('fetchCountries')
    }
}
</script>