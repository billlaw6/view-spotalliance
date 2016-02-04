<template>
<div> user.name </div>
<div> {{ site_name }} </div>
<div> testData: {{ serverData.test }} </div>
<div> userData: {{ serverData.userList[0].username }} </div>
<ul>
  <li v-for = "item in serverData.userList">User:</li>
  <li v-for = "item in serverData.userList">{{ item.username }}</li>
  <li v-for = "item in serverData.userList">{{ item.email }}</li>
</ul>
</template>

<script>
import store from '../store/index.js'

export default {

  name: 'ChatView',

  // 本组件的数据
  data () {
    let serverData = store.fetch();
    return {
      // 网站名称
      site_name: "site_name",
      serverData: serverData,
    };
  },

  // 父组件的数据
  //props: ['user', 'search'],

  methods: {
    hello: function () {
      console.log('ChatView created')
    }
  },

  created: function () {
    this.hello()
  }
}
</script>

<style>

</style>
