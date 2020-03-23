<template>
  <div class="home mt-4">
   <b-row>
     <b-col sm="6"></b-col>
     <b-col sm="6">
       <b-form @submit.prevent="submit">
         <b-form-group>
           <b-form-input placeholder="Please enter your username" v-model="username" type="text"></b-form-input>
         </b-form-group>
          <b-form-group>
           <b-form-input placeholder="Please enter your password" v-model="password" type="password"></b-form-input>
         </b-form-group>
         <button class="btn btn-success">Submit</button>
       </b-form>
     </b-col>
   </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return {
      username:'',
      password:''
    }
  },
  created(){
    var token=localStorage.token;
    if(token){
      this.$router.push('/corona')
    }
  },
  methods:{
    submit(){
      var SERVER=this.$store.state.SERVER;
      var self=this;
      axios.post(SERVER+'login',{
        username:this.username,
        password:this.password
      })
      .then((response)=>{
        var data=response.data;
        localStorage.setItem('token',data.token)
        self.$router.push('/corona')
      })
      .catch((err)=>{
        console.log('Ada error saat login',err)
         self.$bvModal.msgBoxOk('Login Failed')
      })
    }
  },
  components: {
    
  }
}
</script>
