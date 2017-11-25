import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
   // 曲目列表
  Mlist: [],
    // 当前歌曲
  nowPlay: null,
  isR: false,
  playerSet: {
      //  0:顺序，1随机， 2自循环
    type: '0',
      //  音量
    voice: 100
  }
}

export default new Vuex.Store({
  state,
  mutations: {
    addMusic (info, d) {
      // 添加音乐
      let list = state.Mlist
      // 播放
      state.nowPlay = (!list.length || d.go) ? d.data.songmid : state.nowPlay
      state.isR = false
      list.find((index) => {
        state.isR = state.isR ? true : index.songid === d.data.songid
      })
      if (!state.isR) {
        list.push(d.data)
      }
    },
    delMusic () {
      // 删除音乐

    },
    getMusic () {
      // 获取音乐

    },
    playMusic (now, d) {
      // 播放音乐
      state.nowPlay = d.mid
    },
    nextMusic (now) {
      // 获取当前下标
      let i = state.Mlist.findIndex((list, index) => {
        if (state.nowPlay === list.songmid) {
          return index
        }
      })
      i = (i < 0) ? 0 : i
      switch (state.playerSet.type) {
        case '0':
        // 顺序
          i = (i >= state.Mlist.length - 1) ? 0 : ++i
          break
        case '1':
        // 随机播放
          let o = i
          do {
            i = parseInt(Math.random() * state.Mlist.length)
          } while (i === o && state.Mlist.length - 1)
          break
        default:

          break
      }
      state.nowPlay = null
      state.nowPlay = state.Mlist[i].songmid
    },
    setPlayerType (state, type) {
      state.playerSet.type = type
    }
  }
})
