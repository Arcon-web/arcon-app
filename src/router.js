import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Menu from './views/Menu.vue'
import Friends from './views/Friends.vue'
import Profile from './views/Profile.vue'
import Homer from './views/Homer.vue'
import Add from './views/Add.vue'
import Edit from './views/Edit.vue'

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
    },
    {
      path: '/homer',
      name: 'homer',
      component: Homer
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
})