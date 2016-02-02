<template>
  <div>
    <input type="checkbox" v-model="checked">
    <label for="checked">Open only one at a time.</label>
    {{ Accordion }}
    {{ Panel }}
    <accordion :one-at-atime="checked">
      <panel header="Panel #1" :is-open="true">
        Panel1    ...
      </panel>
      <panel header="Panel #2">
        ...
        Panel2   ...
      </panel>
      <panel header="Panel #3">
        ...
        Panel3   ...
      </panel>
      <panel header="Panel #4">
        ...
        Panel4   ...
      </panel>
    </accordion>
  </div>
</template>

<script>
var VueStrap = require('../../node_modules/vue-strap/dist/vue-strap.min.js')
import Accordion from 'vue-strap/src/Accordion.vue'
import Panel from 'vue-strap/src/Panel.vue'

export default {
  name: 'IntroView',
  // components方式为局部注册，组件只能在内部使用
  components: {
    Accordion,
    Panel
  },

  data: {
    msg: 'I am introduction!'
  }
}
</script>
