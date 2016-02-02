<template>
<div>{{ msg }}</div>
{{ xyz }}
</template>

<script>
import store from '../store/index.js'

export default {

  name: 'ChatView',

  data: function() {
    return {
      msg: 'I am chat view',
      xyz: 'lkajsdllkjklasdf'
    }
  },

  props: {
    comment: Object
  }
}
</script>

<style>

</style>
