<template>
  <div id="wrapper">
    <div id="header">
      <h1><a href="#/">Introduction</a></h1>
    </div>

    <p>
      <a v-link="{ path: '/intro' }"
      <a v-link="{ path: '/amap' }"
      <a v-link="{ path: '/chat' }"
    </p>
  
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>

  </div>
  <user></user>
</template>

<script>

import HeaderVue from './components/Header.vue'
import IntroVue from './components/Intro.vue'
import UserVue from './components/User.vue'

export default {
  name: 'App',

  components: {
    HeaderVue,
    IntroVue
  },

  data () {
    return {
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
