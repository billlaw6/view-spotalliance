<template>
<div> user.name </div>
<div> {{ basic_info.site_name }} </div>
<div> {{ testData }} </div>
</template>

<script>
import store from '../store/index.js'

export default {

  name: 'ChatView',

  // 本组件的数据
  data () {
    let basic_info = store.basic_info()
    let serverData = store.fetch()
    let testData = store.getTestData()
    return {
      basic_info,
      serverData,
      testData
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
