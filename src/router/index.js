import Vue from 'vue'
import Router from 'vue-router'
import music from '@/components/home/music'
import video from '@/components/home/video'
import radio from '@/components/home/radio'
import account from '@/components/account/account'
import search from '@/components/search/search'
import login from '@/components/account/login'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: music
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/radio',
      component: radio
    },
    {
      path: '/account',
      component:account
    },
    {
      path: '/search',
      component:search
    },
    {
      path: '/login',
      component:login
    }
  ]
})
