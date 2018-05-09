import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: homepage
    }
  ]
})
