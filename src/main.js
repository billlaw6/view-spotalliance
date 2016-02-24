import Vue from 'vue'
Vue.config.debug = true

import VueRouter from 'vue-router'
import VueAsyncData from 'vue-async-data'
import VueValidator from 'vue-validator'
import routerMap from './router.js'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueAsyncData)
Vue.use(VueValidator)

//To prevent error: Invalid basic header. Credentials not correctly base64 encoded
// Vue.http.headers.common['Authorization'] = 'Basic bGl1YmluOndvYWluaQ=='

export var router = new VueRouter()
routerMap(router)

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(App, '#app')

