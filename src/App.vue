<template>
  <header-view></header-view>
  <div id="wrapper">
  {{ site_name }}
  </div>

  <p>
    <a v-link="{ path: '/intro' }">Intro</a>
    <a v-link="{ path: '/chat' }">Chat</a>
  </p>

  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>
</template>

<script>
import HeaderView from './components/HeaderView.vue'

export default {
  name: 'App',

  data: {
    site_name: '景上往来'
  },

  components: {
    HeaderView
  }

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
