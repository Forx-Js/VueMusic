<template>
  <div id="app">
    <header class="all-top">
      <el-menu :default-active="nav" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="Mrote">歌曲</el-menu-item>
        <el-menu-item index="singer">歌手</el-menu-item>
        <el-menu-item index="Mlist">播放列表</el-menu-item>
        <!-- <el-menu-item index="3">播放</el-menu-item> -->
      </el-menu>
    </header>
    <transition name="pager">
      <router-view class="page-forx"></router-view>
    </transition>
    <footer>
      <Player></Player>
    </footer>
  </div>
</template>

<script>
  import Player from './components/Player'

  export default {
    name: 'app',
    components: {
      Player
    },
    methods: {
      // 跳转页面
      handleSelect (name) {
        this.$router.push({
          name
        })
      }
    },
    created () {

    },
    computed: {
      nav () {
        let nav = this.$route.name
        switch (nav) {
          case 'singerPage':
            nav = 'singer'
            break
          case 'singer':
            nav = 'singer'
            break
          case 'Mlist':
            nav = 'Mlist'
            break
          case 'Mrote':
            nav = 'Mrote'
            break

          default:
            nav = 'home'
            break
        }

        return nav
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  .ml16 {
    margin-left: 16px;
  }
  
  .mt16 {
    margin-top: 16px;
  }
  
  img {
    width: 100%;
  }
  
  .page-forx {
    margin: 59px 0 100px 0;
    /* position: fixed; */
    /* left:0; */
    width: 100%
    /* height: 100%; */
  }
  
  .pager-enter-active {
    animation: fadeIn .8s;
  }
  
  .all-top {
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
    box-shadow: 0 0 10px rgb(84, 92, 100);
  }
  
  a.singer-a {
    text-decoration: none;
    color: initial;
  }
  
  a.singer-a:hover {
    color: #409EFF;
  }
  
  .el-menu--horizontal {
    border: none;
  }
</style>