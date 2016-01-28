import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Intro from './components/Intro.vue'
import Amap from './components/Amap.vue'
import Chat from './components/Chat.vue'

// install router
Vue.use(Router)


// routing
var router = new Router()

router.map({
  '/intro': {
    components: Intro
  },
  '/amap': {
    components: Amap
  },
  '/chat': {
    components: Chat
  }
})

router.beforeEach(function () {
  windo.scrollTo(0, 0)
})

router.redirect({
  '*': '/Intro'
})

router.start(App, '#app')

