<template>
     <b-card bg-variant="default" :header="name" class="text-center">
         <b-card-body>
            <b-card-text>
                <div>Report Cases: {{cases}}</div>
            </b-card-text>
         </b-card-body>
     
         <button class="btn btn-danger" @click="deleteReport()">Delete</button>
        
      </b-card>
</template>
<script>
export default {
    props:['name','cases','id','index'],
    methods:{
        deleteReport(){
            console.log('Report data',this.id,this.index)
            this.$store.dispatch('deleteReport',this.index)
        }
    }
}
</script>