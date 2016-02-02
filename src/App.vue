<template>
  <header-view></header-view>
  <div id="wrapper">
  {{ site_name }}
  </div>

  <p>
    <a v-link="{ path: '/intro' }">Intro</a>
    <a v-link="{ path: '/chat' }">Chat</a>
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
import HeaderView from './components/HeaderView.vue'

export default {
  el: '#app',
  name: 'App',
  data () {
    let serverData = store.fetch();
    let site_name = '景上往来';
    return {
      // 网站名称
      site_name: site_name,
      // 登录用户
      user: serverData.user,
      // 用户列表
      userList: serverData.userList,
      // 会话列表
      sessionList: serverData.sessionList,
      // 搜索key
      search: '',
      // 选中的会话Index
      sessionIndex: 0
    };
  },

  // 指定子组件，这些组件中可以用props变量获取父组件的数据
  components: {
    HeaderView
  }

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
