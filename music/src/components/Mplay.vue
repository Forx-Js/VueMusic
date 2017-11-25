<template>

  <div>
    {{data}}
  </div>
</template>

<script>
  export default {
    name: 'Mplay',
    data () {
      return {
        data:{}
      }
    },
    methods: {
      getLys () {
        this.$http({
          url: 'http://music.qq.com/miniportal/static/lyric/14/101369814.xml',
          method: 'jsonp',
          headers: {
            'gbk' : 'UTF-8',
            'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
            'Accept' : '*/*',
            'referer' : 'https://y.qq.com/portal/player.html',
            'Accept-Language' : 'zh-CN,zh;q=0.8',
            'Cookie' : 'pgv_info=ssid=s3831414012; pgv_pvid=3089736692; ts_refer=ADTAGh5_playsong; pgv_pvi=7302426624; pgv_si=s1785803776; yq_index=0; qqmusic_fromtag=66; player_exist=1; yplayer_open=0; ts_last=y.qq.com/n/yqq/song/000MoKYA1AUJp3.html; ts_uid=2700776571; yqq_stat=0',
            'Host' : 'c.y.qq.com'
          }
      })
    }
  },
  mounted () {
    this.getLys()
  },
  computed: {
  }
}
</script>

<style scoped>

</style>