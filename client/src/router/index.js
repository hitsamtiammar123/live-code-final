import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Corona from '../views/Corona'
import CoronaMain from '../components/Corona/MainPage'
import CoronaProfile from '../components/Corona/ProfilePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/corona',
    name:'Corona',
    component:Corona,
    children:[
      {
        path:'/',
        name:'MainCorona',
        component:CoronaMain
      },
      {
        path:'profile',
        name:'ProfileCorona',
        component:CoronaProfile
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
