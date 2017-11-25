<template>
  <div class="">
    <el-table stripe :data="list">
      <el-table-column type="index" label="#">
      </el-table-column>
      <el-table-column prop="data.songname" label="歌曲名">
      </el-table-column>

      <el-table-column label="歌手">
        <template slot-scope="scope">
          <span :key="singer.id" v-for="(singer,index) in scope.row.data.singer">
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
    <el-button :loading="ajax.isRun" @click="getMlist()" style="width:100%">查看更多</el-button>
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
        }
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
          tpl: 3,
          topid: '4',
          type: 'top',
          song_begin: this.list.length,
          song_num: '30',
          g_tk: '5381',
          loginUin: '0',
          hostUin: 0,
          format: 'jsonp',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          needNewCode: 0
        }
        this.$http
          .jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', {
            params: obj,
            jsonp: 'jsonpCallback'
          })
          .then(
            res => {
              this.list = this.list.concat(res.body.songlist)
              this.ajax.isRun = false
            },
            res => {
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
      }
    },
    http: {
      before () {
        this.ajax.isRun = true
      }
    }
  }
</script>

<style scoped>

</style>