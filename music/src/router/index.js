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
console.log(__dirname)
export default new Router({
  mode: 'history',
  base: 'dist',
  // 默认滚动
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  },
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
      // children: [
      //   {
      //     path: ':page/:id',
      //     name: 'singerPage',
      //     component: singerPage
      //   }
      // ]
    },
    // 歌手页面
    {
      path: '/singer/:id/:page',
      name: 'singerPage',
      component: singerPage
    },
    // 主页
    // {
    //   path: '',
    //   name: 'home',
    //   component: home
    // },
    // 主页
    {
      path: '/*',
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
