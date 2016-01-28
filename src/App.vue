<template>
  <div id="wrapper">
    <div id="header">
      <h1><a href="#/">Introduction</a></h1>
    </div>
  
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>

  </div>
</template>

<script>
import HeaderVue from './components/Header.vue'
import IntroVue from './components/Intro.vue'

export default {
  name: 'App',

  components: {
    HeaderVue,
    IntroVue
  },

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
