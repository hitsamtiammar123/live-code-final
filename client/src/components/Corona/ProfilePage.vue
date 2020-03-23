<template>
    <div>
         <b-row class="mt-4 mb-4">
            <b-col sm="12">
               <b-form @submit.prevent>
                    <b-form-group>
                        <b-form-select v-model="country" :options="countries"></b-form-select>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input placeholder="Number of cases" v-model="cases" type="number"></b-form-input>
                    </b-form-group>
                    <button class="btn btn-success">Submit</button>
                </b-form>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="4" class="mb-3">
                <ProfileCase/>
            </b-col>
            <b-col sm="4" class="mb-3">
                <ProfileCase/>
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
             countries:[
                { value: null, text: 'Please select a country' },
                { value: 'China', text: 'China' },
                { value: 'Italy', text: 'Italy' },
             ],
             cases:0
         }
     },
     components:{
         ProfileCase
     }
}
</script>