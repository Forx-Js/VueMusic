<template>
  <div class="">
    <!-- {{mid}} -->
    <div class="singimg" :style="'background-image: url('+imgUrl+');'">
      <h1 class="singPageName">{{singname}}</h1>
    </div>
    <el-table stripe :data="list">
      <!-- <el-table-column
        type="index"
        label="#">
      </el-table-column> -->
      <el-table-column prop="data.songname" label="歌曲名">
      </el-table-column>

      <el-table-column label="歌手">
        <template slot-scope="scope">
          <span :key="singer.id" v-for="(singer,index) in scope.row.data.singer">
          <!-- {{singer}} -->
          <router-link class="singer-a" :to="'/singer/'+singer.mid+'/0'" :title="singer.name">
            {{singer.name}}
          </router-link>
          {{(index==scope.row.data.singer.length-1)?"":","}}
        </span>
        </template>

      </el-table-column>

      <el-table-column label="专辑名" prop="data.albumname">
        <!-- <img :src="" alt=""> -->
        <!-- {{props}} -->
      </el-table-column>
      <el-table-column label="">
        <template slot-scope="scope">
          <el-button round icon="el-icon-caret-right" size="mini" @click="addMusic(scope.row.data,true)"></el-button>
          <el-button round icon="el-icon-plus" size="mini" @click="addMusic(scope.row.data,false)"></el-button>
        </template>

      </el-table-column>
    </el-table>
    <div class="block">
      <center class="mt16">

        <el-button-group>

          <el-button @click="changePageNum(-1)" :disabled="page==0" size="mini" type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button @click="changePageNum(1)" :disabled="page==parseInt(total/30)" size="mini" type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>

        </el-button-group>
      </center>
    </div>
    <!-- <el-button :loading="ajax.isRun" @click="getMlist()" style="width:100%">查看更多</el-button> -->
  </div>
</template>

<script>
  export default {
    name: 'Mrote',
    data () {
      return {
        list: [],
        search: null,
        title: null,
        ajax: {
          isRun: false
        },
        singname: '歌手',
        total: 0
      }
    },
    created () {
      this.$http.interceptors.push((request, next) => {
        next(response => {
          return response
        })
      })
      this.getMlist()
    },
    methods: {
      getMlist () {
        const obj = {
          g_tk: '5381',
          jsonpCallback: 'MusicJsonCallbacksinger_track',
          // loginUin: 0,
          // hostUin: 0,
          format: 'jsonp',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          // platform: 'yqq',
          needNewCode: 0,
          singermid: this.mid,
          order: 'listen',
          begin: this.page * 30,
          num: 30,
          songstatus: 1
        }
        this.$http
          .jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg', {
            params: obj,
            jsonp: 'jsonpCallback'
          })
          .then(
            res => {
              this.total = res.body.data.total
              this.singname = res.body.data.singer_name
              let list = res.body.data.list
              let singlist = []
              list.forEach(element => {
                singlist.push({
                  data: element.musicData
                })
              })
              this.list = singlist
              this.ajax.isRun = false
            },
            (res) => {
              this.ajax.isRun = false
              // alert ('error')
              // 请求失败回调
            }
          )
      },
      addMusic (data, go) {
        this.$store.commit('addMusic', {
          data,
          go
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
      },
      changePageNum (val) {
        let c = parseInt(this.page) + val
        this.$router.push('/singer/' + this.mid + '/' + c)
      }
    },
    http: {
      before () {
        this.ajax.isRun = true
      }
    },
    computed: {
      imgUrl () {
        let src =
          '//y.gtimg.cn/music/photo_new/T001R500x500M000' +
          this.mid +
          '.jpg?max_age=2592000'
        return src
      },
      mid () {
        return this.$route.params.id
      },
      page () {
        return this.$route.params.page
      }
    },
    watch: {
      mid () {
        this.getMlist()
      },
      page () {
        this.getMlist()
      }
    }
  }
</script>

<style scoped>
  .singimg {
    background-image: url();
    background-position: center;
    height: 500px;
    position: relative;
    background-color: #ddd;
    background-size: cover;
    background-attachment: fixed;
  }
  
  .singPageName {
    text-align: center;
    color: #ffffff;
    width: 100%;
    position: absolute;
    bottom: 8px;
    text-shadow: 0 0 8px #666666;
  }
</style>