<template>
  <div class="cc">
    <video id="player" :loop="getList.length==1"></video>
    <transition name="plays" v-if="nowMusic">
      <div class="player">
        <div class="playerimg">
          <img :src="nowMusic?'https://y.gtimg.cn/music/photo_new/T002R180x180M000'+nowMusic.album.mid+'.jpg':'https://cn.vuejs.org/images/logo.png'">
        </div>
        <div class="player-mid">
          <div class="player-info">
            <span class="playerMname">{{nowMusic.name}}</span>
            <span class="playerSname">
              <!-- {{nowMusic.singer[0].name}} -->
              <span :key="singer.mid" v-for="(singer,index) in nowMusic.singer">
                <router-link class="singer-a" :to="'/singer/'+singer.mid+'/0'" :title="singer.name" style="color: #f5f5ff;">
                  {{singer.name}} 
                </router-link>
              </span>
              <span class="playerTime">{{getTootip(Minfo.nowdate)}}/{{getTootip(Minfo.interval)}}</span>
            </span>
          </div>
          <div class="palyerCon">
            <el-slider @change="MDjump" v-model="Minfo.nowdate" :max="Minfo.interval" :format-tooltip="getTootip"></el-slider>
          </div>
        </div>
        <div class="toggle">
          <i class="el-icon-menu"></i>
          <div class="palyerBtn">
            <el-button round :icon="!isPlay ?'el-icon-service':'el-icon-loading'" @click="play()"></el-button>
            <el-button round icon="el-icon-d-arrow-right" @click="nextMusic()"></el-button>
            <!-- {{playerSet.type}} -->
            <el-tooltip :content="(playerSet.type==0)?'顺序播放':'随机播放'" placement="top" @change="setType()" class="ml16">
              <el-switch v-model="playerSet.type" active-color="#409EFF" inactive-color="#67C23A" active-value="1" inactive-value="0">
              </el-switch>
            </el-tooltip>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Player',
    data () {
      return {
        isPlay: false,
        nowMusic: null,
        dom: null,
        Minfo: {},
        ccc: 10
      }
    },
    methods: {
      play () {
        if (!this.nowMusic) {
          this.$message.error('当前音乐列表为空')
          return
        }
        const dom = this.dom
        if (this.dom.paused) {
          dom.play()
        } else {
          dom.pause()
        }
      },
      // 加载音乐
      loadingM (mid) {
        this.$http
          .jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg', {
            params: {
              songmid: mid,
              format: 'jsonp',
              callback: 'getOneSongInfoCallback',
              g_tk: '5381',
              jsonpCallback: 'getOneSongInfoCallback',
              loginUin: 1,
              hostUin: 1,
              inCharset: 'utf8',
              outCharset: 'utf-8',
              notice: 1
            }
          })
          .then(function (params) {
            this.nowMusic = params.body.data[0]
            this.nowMusic.url = params.body.url[params.body.data[0].id]
            this.dom.src = 'http://' + this.nowMusic.url
            this.dom.currentTime = 0
            this.dom.play()
            document.getElementsByTagName('title')[0].innerHTML = this.nowMusic.title + '- Forx 音乐'
            // this.isPlay = true
            this.Minfo = {
              interval: this.nowMusic.interval,
              nowdate: 0
            }
          })
      },
      // 秒转分
      getTootip (num) {
        let date = parseInt(num / 60) + ':' + parseInt(num % 60)
        return date
      },
      // 歌曲进度跳转
      MDjump (val) {
        this.dom.currentTime = val
        this.dom.play()
      },
      // 切歌
      nextMusic () {
        this.$store.commit('nextMusic')
      },
      // 修改切割模式
      setType () {
        let type = this.playerSet.type ? 0 : 1
        this.$store.commit('setPlayerType', type)
      }
    },
    mounted () {
      const dom = document.getElementById('player')
      this.dom = dom
      let _this = this
      // 播放
      dom.onplay = () => {
        _this.isPlay = true
      }
      // 停
      dom.onended = () => {
        _this.isPlay = false
        _this.dom.currentTime = 0
        _this.nextMusic()
      }
      dom.onpause = () => {
        _this.isPlay = false
      }
      // 运行
      dom.ontimeupdate = () => {
        let time = _this.dom.currentTime
        _this.Minfo.nowdate = time
      }
      dom.onerror = () => {
        this.$message({
          // type: 'error',
          message: '加载失败了'
        })
        this.nextMusic()
      }
    },
    computed: {
      // 获取正在播放的曲目
      nowPlay () {
        return this.$store.state.nowPlay
      },
      // 获取设置
      playerSet () {
        return this.$store.state.playerSet
      },
      getList () {
        return this.$store.state.Mlist
      }
    },
    watch: {
      nowPlay (n, o) {
        // let dom = document.getElementById('player')
        this.loadingM(n)
      }
    }
  }
</script>

<style>
  #player {
    display: none;
  }
  
  .player {
    position: fixed;
    bottom: 0;
    background: rgb(84, 92, 100);
    width: 100%;
    /* overflow: hidden; */
    height: 70px;
    box-shadow: 0 -3px 3px #dddddd;
    padding: 8px;
    z-index: 5;
  }
  
  .player>div {
    float: left;
    /* overflow: hidden; */
  }
  
  .playerimg {
    max-width: 20%;
    width: auto;
    height: 100%;
    border: 2px solid #ffffff;
    box-shadow: 0 0 5px #dddddd;
    background-color: #333333;
    overflow: hidden;
  }
  
  .playerimg img {
    width: auto;
    height: 100%;
  }
  
  .player-mid {
    width: 70%;
    padding-left: 24px;
  }
  
  .player-info {
    font-size: 14px;
    color: #ffffff;
  }
  
  .playerSname {
    font-size: 12px;
    margin-left: 8px;
  }
  
  .playerTime {
    float: right;
  }
  
  .toggle:hover .palyerBtn {
    display: block;
    background: #f5f5f5;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 70px;
    right: 0%;
    padding: 8px 0;
    box-shadow: 0 0 5px #bbbbbb
  }
  
  .toggle .palyerBtn {
    display: none;
  }
  
  .toggle {
    width: 60px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    position: fixed;
    bottom: 0;
    color: #ffffff;
    right: 0px;
    padding-right: 16px;
    display: block;
  }
  
  .plays-enter-active {
    animation: fadeIn 0.5s;
  }
  .sing-a{
    color: #f5f5ff;
  }
</style>