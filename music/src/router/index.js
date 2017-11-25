import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mrote from '@/components/Mrote'
import Mplay from '@/components/Mplay'
import Mlist from '@/components/Mlist'
import singer from '@/components/singer'
import singerPage from '@/components/singerPage'
import home from '@/components/home'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  mode: 'history',
  routes: [
    // 排行榜
    {
      path: '/Mrote',
      name: 'Mrote',
      component: Mrote
    },
    // 歌词
    {
      path: '/Mplay/:Mid',
      name: 'Mplay',
      component: Mplay
    },
    // 全部歌手
    {
      path: '/singer',
      name: 'singer',
      component: singer
    },
    // 歌手页面
    {
      path: '/singer/:id/:page',
      // alias: '/singer/:id/:page0',
      name: 'singerPage',
      component: singerPage
    },
    // 主页
    {
      path: '*',
      name: 'home',
      component: home
    },
    // 主页
    {
      path: '*',
      name: 'home',
      component: home
    },
    // 本地歌单
    {
      path: '/Mlist',
      name: 'Mlist',
      component: Mlist
    }
  ]
})
