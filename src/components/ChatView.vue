<template>
<div> user.name </div>
<div> {{ basic_info.site_name }} </div>
<ul>
  <li v-for="item in serverData.userList">
    {{ item.username }}
  </li>
</ul>
</template>

<script>
import store from '../store/index.js'

export default {

  name: 'ChatView',

  // 本组件的数据
  data () {
    let basic_info = store.basic_info()
    let serverData = store.fetch()
    console.log('testData in ChatView')
    console.log(serverData)
    return {
      basic_info,
      serverData
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
