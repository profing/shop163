import Vue from 'vue';
import VueRouter from 'vue-router'

const Home = () => import('../pages/Home/Home.vue')
const Interlayer = () => import('../pages/Interlayer/Interlayer.vue')
const Item = () => import('../pages/Item/Item.vue')
const Topic = () => import('../pages/Topic/Topic.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const Login = () => import('../pages/Login/Login.vue')

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/interlayer'
    },
    {
      path:'/home',
      component:Home,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/item',
      component:Item,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/topic',
      component:Topic,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/login',
      component:Login,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/interlayer',
      component:Interlayer,
      meta: {
        showFooter: false
      }
    },
  ]
})