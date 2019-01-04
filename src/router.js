import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Menu from './views/Menu.vue'
import Friends from './views/Friends.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})