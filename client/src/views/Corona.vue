<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="danger"> 
            <b-navbar-nav class="ml-auto" right>
                <b-nav-item @click="redirect('/corona')">Countries</b-nav-item>
                <b-nav-item @click="redirect('/corona/profile')">Profile</b-nav-item>
                <b-nav-item @click="logout()">Logout</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <router-view/>  
    </div>
    
    
</template>
<script>


export default {
    name:'Corona',
    components:{
        
    },
    methods:{
        redirect(link){
            this.$router.push(link)
        },
        logout(){
            localStorage.removeItem('token')
            this.$store.commit('SET_COUNTRIES',[])
            this.$store.commit('SET_REPORTS',[])
            this.$router.push('/')
        }
    }
}
</script>