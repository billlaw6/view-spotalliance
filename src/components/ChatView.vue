<template>
<div>{{ user.name }}</div>
</template>

<script>
import store1 from '../store/index.js'
import store from '../store/store.js'


export default {

  name: 'ChatView',

  // 本组件的数据
  data () {
    let serverData = store.fetch();
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

  // 父组件的数据
  //props: ['user', 'search'],

  methods: {
    update: function () {
      return store.fetchUser()
    },
    hello: function () {
      console.log('ChatView created')
    }
  },

  props: {
    comment: Object
  },

  created: function () {
    this.hello()
  }
}
</script>

<style>

</style>
