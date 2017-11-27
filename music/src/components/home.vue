<template>
  <div class="">
    <div class="searchM">
      <div class="homeImg">
        <img src="/static/img/timg.bc25f84.png" alt="">
        <!-- <img :src="img" alt=""> -->
      </div>
      <el-input placeholder="请输入音乐/歌手" v-model="search" :trigger-on-focus="false" @focus="toMusic" >
        <template slot="prepend">Forx Music</template>
      </el-input>

      <div class="box-card el-card" v-if="backData">
        <div v-if="backData.singer">
          <div class="ListTitle">{{backData.singer.name}}</div>
          <div v-for="o in backData.singer.itemlist" :key="o.mid" class="text item">
            <router-link :to="'/singer/'+o.mid+'/0'" class="toJump">
              <img class="searchImg" :src="'//y.gtimg.cn/music/photo_new/T001R150x150M000'+o.mid+'.jpg?max_age=2592000'" alt=""> {{o.name}}
            </router-link>
          </div>
        </div>
        <div v-if="backData.song">
          <div class="ListTitle">{{backData.song.name}}</div>
          <div v-for="o in backData.song.itemlist" :key="o.mid" class="text item">
            <a class="toJump" href="javascript:;" @click="addMusic(o)">
              {{o.name}}
              <span>{{o.singer}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- {{img}} -->
  </div>
</template>

<script>
  // import img from '@/assets/img/timg.png'
  // console.log(img)
  export default {
    name: 'Mrote',
    data () {
      return {
        search: '周杰伦',
        backData: null
        // img
      }
    },
    methods: {
      toMusic () {
        this.$http
          .jsonp('https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg', {
            params: {
              is_xml: 0,
              format: 'jsonp',
              key: this.search,
              g_tk: '5381',
              jsonpCallback: 'SmartboxKeysCallbackmod_search776',
              loginUin: 0,
              hostUin: 0,
              inCharset: 'utf8',
              outCharset: 'utf-8',
              notice: 0,
              needNewCode: 0
            },
            jsonp: 'jsonpCallback'
          })
          .then(
            res => {
              let bc = res.body.data
              this.backData = bc
            },
            res => {}
          )
      },
      addMusic (d) {
        this.$http
          .jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg', {
            params: {
              songmid: d.mid,
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
          .then(res => {
            let l = res.body.data[0]
            let data = {
              albumdesc: '',
              albumid: l.album.id,
              albummid: l.album.mid,
              albumname: l.album.name,
              alertid: l.action.alert,
              belongCD: l.index_album,
              cdIdx: l.index_cd,
              interval: l.interval,
              isonly: l.isonly,
              label: l.label,
              msgid: l.action.msgid,
              pay: {
                payalbum: l.pay.price_album,
                payalbumprice: l.pay.pay_play,
                paydownload: 1,
                payinfo: 1,
                payplay: l.pay.pay_play,
                paytrackmouth: 1,
                paytrackprice: l.pay.price_track,
                timefree: l.pay.time_free
              },
              preview: {
                trybegin: 0,
                tryend: 0,
                trysize: 0
              },
              rate: '31',
              singer: l.singer,
              size5_1: l.file.try,
              size128: l.file.size_128mp3,
              size320: l.file.size_320mp3,
              sizeape: l.file.size_ape,
              sizeflac: l.file.size_flac,
              sizeogg: l.file.size_192ogg,
              songid: l.id,
              songmid: l.mid,
              songname: l.title,
              songorig: l.name,
              songtype: l.type,
              strMediaMid: l.file.media_mid,
              stream: 10,
              switch: l.action.switch,
              type: l.type,
              vid: l.mv.id
            }
            this.$store.commit('addMusic', {
              data,
              go: true
            })
            const suc = this.$store.state.isR
            if (suc) {
              this.$message({
                message: '添加失败,已在音乐列表内',
                type: 'error',
                duration: 1000,
                showClose: true
              })
            } else {
              this.$message({
                message: '添加成功 -' + data.songname,
                type: 'success',
                showClose: true,
                duration: 1000
              })
            }
            this.backData = null
          })
      }
    },
    watch: {
      search () {
        this.toMusic()
      }
    }
  }
</script>

<style scoped>
  .searchM {
    position: fixed;
    left: 15%;
    width: 70%;
    top: 10%;
  }
  
  .homeImg {
    width: 300px;
    margin: 24px auto;
  }
  
  .box-card {
    max-height: 300px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
  }
  
  .ListTitle {
    font-size: 13px;
    color: #bcbcbc;
    text-indent: 1em;
    line-height: 2em;
  }
  
  .item {
    text-indent: 2em;
    /* padding: 8px 12px; */
  }
  
  a.toJump {
    padding: 8px 12px;
    color: #333333;
    text-decoration: none;
    display: block;
  }
  
  a.toJump:hover {
    background-color: #eeeeee;
  }
  
  .searchImg {
    width: 100px;
    margin-right: 32px;
    vertical-align: top;
  }
</style>