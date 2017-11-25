<template>

  <div>
    <!-- {{Mlist}} -->
    <el-table :data="Mlist" stripe :row-class-name="isMe" style="width: 100%">
      <el-table-column type="index" label="列表">
      </el-table-column>
      <el-table-column prop="songname" label="歌曲">
      </el-table-column>
      <el-table-column label="歌手">
        <template slot-scope="scope">
          <!-- {{scope.row.singer}} -->
          <span :key="singer.id" v-for="(singer,index) in scope.row.singer">
         <router-link class="singer-a" :to="'/singer/'+singer.mid+'/0'" :title="singer.name">
            {{singer.name}}
          </router-link>
          {{(index==scope.row.singer.length-1)?"":","}}
        </span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="success" size="mini" @click="playThis(scope.row.songmid)">播放</el-button>
          <el-button type="danger" size="mini" @click="delThis(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Mlist',
    data () {
      return {}
    },
    methods: {
      playThis (mid) {
        this.$store.commit('playMusic', {
          mid
        })
      },
      isMe (d) {
        let is = this.$store.state.nowPlay === d.row.songmid
        if (is) {
          return 'success-row'
        } else {
          return ''
        }
      },
      delThis (d) {
        let i = d.$index
        let arr = this.Mlist
        let list = d.row
        if (list.songmid === this.$store.state.nowPlay) {
          // 正在播放
          this.$message({
            message: '删除失败，因为正在播放此曲目',
            type: 'error',
            duration: 1000,
            showClose: true
          })
          return false
        } else {
          // 删除曲目
          arr.splice(i, 1)
        }
      }
    },
    computed: {
      Mlist () {
        let Mlist = this.$store.state.Mlist
        return Mlist
      }
    },
    watch: {
      Mlist (n, o) {}
    }
  }
</script>

<style>
  .success-row .cell {
    color: #409eff
  }
</style>