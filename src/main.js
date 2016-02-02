import Vue from 'vue'
Vue.config.debug = true

import Router from 'vue-router'

import App from './App.vue'

import AmapView from './components/AmapView.vue'
import ChatView from './components/ChatView.vue'
import IntroView from './components/IntroView.vue'
import UserView from './components/UserView.vue'

Vue.use(Router)

var router = new Router()

router.map({
  '/intro': {
    component: IntroView
  },
  '/amap': {
    component: AmapView
  },
  '/chat': {
    component: ChatView
  },
  '/user': {
    component: UserView
  }

})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/intro'
})

router.start(App, '#app')

