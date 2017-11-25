<template>
  <el-row>

    <el-col :xs="12" :sm="8" :md="4" v-for="(sing,index) in sList.list" v-if="index<12" :key='sing.Fsinger_id'>
      <router-link class="singer-a" :to="'/singer/'+sing.Fsinger_mid+'/0'" :title="sing.Fsinger_name">
        <div class="singF">
          <div class="singFimg">
            <img :src="'//y.gtimg.cn/music/photo_new/T001R500x500M000'+sing.Fsinger_mid+'.jpg?max_age=2592000'" alt="">
          </div>
          <div class="singinfo">
            <span>{{sing.Fsinger_name}}</span>
            <small>{{area(sing.Farea)}}</small>
          </div>
        </div>
      </router-link>
    </el-col>
    <!-- <hr /> -->
    <el-col :span="24" class="singSm-ul"></el-col>

    <el-col :xs="8" :sm="6" :md="4" v-for="(sing,index) in sList.list" v-if="index>=12" :key='sing.Fsinger_id'>
      <router-link class="singer-a" :to="'/singer/'+sing.Fsinger_mid+'/0'" :title="sing.Fsinger_name">
        <div class="singSm" v-if="index>=12" :title="sing.Fsinger_name">
          <span>{{sing.Fsinger_name}}</span>
          <small>{{area(sing.Farea)}}</small>
        </div>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Mrote',
    data () {
      return {
        sList: {}
      }
    },
    created () {
      this.getSing()
    },
    methods: {
      getSing () {
        this.$http({
          url: 'https://c.y.qq.com/v8/fcg-bin/v8.fcg',
          params: {
            channel: 'singer',
            page: 'list',
            key: 'all_all_all',
            pagesize: '100',
            pagenum: '1',
            g_tk: '5381',
            loginUin: '0',
            hostUin: '0',
            format: 'jsonp',
            inCharset: 'utf8',
            outCharset: 'utf-8',
            notice: 0,
            needNewCode: 0
          },
          jsonp: 'jsonpCallback',
          method: 'jsonp'
        }).then(
          res => {
            try {

            } catch (error) {}
            this.sList = res.body.data
          },
          res => {}
        )
      },
      area: function (value) {
        let str = ''
        switch (value) {
          case '0':
            str = '港澳台'
            break
          case '1':
            str = '中国'
            break
          case '2':
            str = '日韩'
            break
          case '3':
            str = '欧美'
            break
          default:
            str = '其他'
            break
        }
        return str
      }
    }
  }
</script>

<style scoped>
  .mt8 {
    margin-top: 8px;
  }
  
  img {
    width: 100%;
  }
  
  .singFimg {
    margin: auto;
    padding: 16px;
    max-width: 240px;
  }
  
  .singFimg>img {
    box-shadow: 0 2px 5px #dddddd;
    border-radius: 50%;
    border: 3px solid #ffffff;
  }
  
  .singinfo,
  .singSm {
    text-align: center;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1.5em;
    margin: 12px;
  }
  
  .singSm-ul {
    margin: 24px 0;
    box-shadow: 0 0 5px #666666;
    border-top: 1px solid #333333;
  }
  
  a.singer-a {
    display: block;
    color: initial;
    text-decoration: none;
  }
  
  a.singer-a:hover {
    /* background-color: #eeeeee; */
    border-left: 3px solid #409EFF;
    text-shadow: 0 0 2px #333333
  }
</style>