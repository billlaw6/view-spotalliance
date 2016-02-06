import Vue from 'vue'
Vue.config.debug = true

import VueRouter from 'vue-router'
import VueAsyncData from 'vue-async-data'

import App from './App.vue'

import AmapView from './components/AmapView.vue'
import ChatView from './components/ChatView.vue'
import IntroView from './components/IntroView.vue'
import UserView from './components/UserView.vue'
import LoginView from './components/login.vue'

Vue.use(VueRouter)
Vue.use(VueAsyncData)

var router = new VueRouter()

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
  },
  '/login': {
    component: LoginView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/intro'
})

router.start(App, '#app')

