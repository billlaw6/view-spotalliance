<template>
<div> user.name </div>
<div> {{ serverData.msg }} </div>
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
    let serverData = store.fetch()
    console.log('testData in ChatView')
    console.log(serverData)
    return {
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
