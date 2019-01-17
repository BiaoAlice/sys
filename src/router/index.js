import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import Home from '@/views/Home/Home'
import Airplane from '@/views/Airplane/Airplane'
import Nav from '@/components/Nav'
import Bottom from '@/components/Bottom'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/home',
      name: 'Home',
      components:{
        default:Home,
        nav:Nav,
        bottom:Bottom
      }
    },{
      path: '/airplane',
      name: 'Airplane',
      components:{
        default:Airplane,
        nav:Nav,
        bottom:Bottom
    }
  }
  ]
})

