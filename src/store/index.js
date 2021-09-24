import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from "./sidebar"
import user from "./user"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    // 关于侧边栏的数据
    sidebar,
    // 关于用户信息的数据
    user
  }
})

export default store;