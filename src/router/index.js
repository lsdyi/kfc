import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Recommand from '../components/foodstaff/Recommand'
import Discount from '../components/foodstaff/Discount'
import Tong from '../components/foodstaff/Tong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommand',
      component: Recommand
    },

    {
      path: '/discount',
      name: 'Discount',
      component: Discount
    },

    {
      path: '/recommand',
      name: 'Recommand',
      component: Recommand
    },

    {
      path: '/tong',
      name: 'Tong',
      component: Tong
    }
  ]
})
