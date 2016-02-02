<template>
<div>{{ msg }}</div>
<div>{{ xyz }}</div>
<div>{{ store.fetchUser(1) }}</div>
<div>{{ store.fetchUser(1)[1] }}</div>

</template>

<script>
import store from '../store/index.js'

export default {

  name: 'ChatView',

  data: function() {
    return {
      msg: 'I am chat view',
      xyz: 'lkajsdllkjklasdf',
      store
    }
  },

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
