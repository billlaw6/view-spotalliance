import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
Vue.use(VueResource)
// Vue.http.options.root = 'http://123.56.115.20'
/* Vue.http.options.emulateJSON = true */
/* Vue.http.options.emulateHttp = true */
Vue.http.headers.common['Authorization'] = 'Basic abcdefg'
Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://www.spotalliance.com'
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'GET, POST'
Vue.http.headers.common['Access-Control-Allow-Credentials'] = true

let logined = true

const site_name = '景尚往来'
const key = 'local_data_key'

// 组件之间共享的变量vuex相关
const state = {
  login: {
    show: true
  },
  sign: {
    show: false
  },
  modal: {
    show: false,
    title: '',
    text: ''
  },
  logined: {
    value: logined
  },
  loading: true,
  common: {
    isEmail: new RegExp('([A-Za-z0-9][-A-Za-z0-9]+\@)+([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}')
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

window.localStorage.removeItem(key)
if (!window.localStorage.getItem(key)) {
  console.log('Making local data')
  let now = new Date()
  state.now = now

  // 从后台取用户列表存到本地
  // Vue.http.get('http://www.spotalliance.com/users').then(
  Vue.http.get('/src/store/testData.json', {}, {
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    emulateJSON: true
  }).then(
    function (response) {
      console.log('Get userList OK')
      console.log(response.data)
      state.userList = response.data
      console.log(state)
      console.log('Data before Save')
      console.log(state)
      window.localStorage.setItem(key, JSON.stringify(state))
      console.log('Save userList OK')
      console.log(state)
    },
    function (response) {
      console.log('failed')
    }
  )

}

export default {
  // store 用于vuex，组件间信号传递
  store,
  basic_info () {
    console.log('Get basic infomation!')
    return { site_name }
  },
  fetch () {
    console.log('Fetching data')
    console.log(JSON.parse(window.localStorage.getItem(key)))
    return JSON.parse(window.localStorage.getItem(key))
  },
  save (store) {
    console.log('Saving data')
    window.localStorage.setItem(key, JSON.stringify(store))
  }
}
