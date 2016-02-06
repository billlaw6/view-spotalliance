<template>
  <loading></loading>
  <header-view></header-view>

  <p>
    <a v-link="{ path: '/intro' }">Intro</a>
    <a v-link="{ path: '/chat' }">Chat</a>
    <a v-link="{ path: '/login' }">Login</a>
    <a v-link="{ path: '/user' }">User</a>
  </p>

  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>
</template>

<script>
import store from './store/store.js'
import LoadingView from './components/loading.vue'
import HeaderView from './components/HeaderView.vue'

export default {
  el: '#app',
  name: 'App',
  data () {
    let serverData = store.fetch();
    return {
      // 登录用户
      user: serverData.user,
      // 用户列表
      userList: serverData.userList,
      // 搜索key
      search: '',
      // 选中的会话Index
      sessionIndex: 0
    };
  },

  // 指定子组件，这些组件中可以用props变量获取父组件的数据
  components: {
    LoadingView,
    HeaderView
  }

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
