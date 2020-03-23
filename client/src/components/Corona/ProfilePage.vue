<template>
    <div>
         <b-row class="mt-4 mb-4">
            <b-col sm="12">
               <b-form @submit.prevent="addReport()">
                    <b-form-group>
                        <b-form-select v-model="country" :options="countries"  
                        value-field="id" 
                        text-field="name"></b-form-select>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input placeholder="Number of cases" v-model="cases" type="number"></b-form-input>
                    </b-form-group>
                    <button class="btn btn-success">Submit</button>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="4" class="mb-3" v-for="(report,index) in reports" :key="index">
                <ProfileCase :index="index" :name="report.Country.name" :cases="report.cases" :id="report.Country.id"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ProfileCase from '../ProfileCase'

export default {
     name:'ProfilePage',
     data(){
         return {
             country:null,
             cases:0
         }
     },
     computed:{
        reports(){
            return this.$store.state.reports
        },
        countries(){
            return this.$store.state.countries
        }
    },
     created(){
        this.$store.dispatch('fetchReports')
        this.$store.dispatch('fetchCountries')
    },
     components:{
         ProfileCase
     },
     methods:{
         addReport(){
             console.log(this.country+' '+this.cases)
             var data={
                 country:this.country,
                 cases:this.cases
             }
             this.$store.dispatch('addReport',data)

         }
     }
}
</script>