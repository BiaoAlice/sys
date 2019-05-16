import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import Home from '@/views/Home/Home'
import Airplane from '@/views/Airplane/Airplane'
import Train from '@/views/Train/Train'
import Search from '@/views/Search/Search'
import Mine from '@/views/Mine/Mine'
import Order from '@/views/Order/Order'
import Nav from '@/components/Nav'
import Bottom from '@/components/Bottom'
Vue.use(Router)

export default new Router({
  mode:'hash',
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
    },{
      path: '/train',
      name: 'Train',
      components:{
        default:Train,
        nav:Nav,
        bottom:Bottom
      }
    },{
        path:'/search',
        name:'Search',
        components:{
          default:Search,
          nav:Nav,
          bottom:Bottom
        }
    },{
      path:'/order',
      name:'Order',
      components:{
        default:Order,
        nav:Nav,
        bottom:Bottom
      }
    },{
      path:'/mine',
      name:'Mine',
      components:{
        default:Mine,
        nav:Nav
      }
    }
  ]
})

