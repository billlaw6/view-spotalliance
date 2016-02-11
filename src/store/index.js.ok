import Vue from 'vue'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

Vue.use(require('vue-resource'))
// Vue.http.options.root = 'http://123.56.115.20:8080'
Vue.http.options.root = 'http://www.spotalliance.com:8080'
/* Vue.http.options.emulateJSON = true */
/* Vue.http.options.emulateHttp = true */
Vue.http.headers.common['Authorization'] = 'Basic abcdefg'
Vue.http.headers['Access-Control-Allow-Origin'] = 'http://www.spotalliance.com'
Vue.http.headers['Access-Control-Allow-Methods'] = 'GET, POST'
Vue.http.headers['Access-Control-Allow-Credentials'] = true

const site_name = '景尚往来'
// const itemsCache = Object.create(null)
const key = 'view-of-spotalliance2'
// const store = new EventEmitter()

// 虚拟数据
// 先清空本地数据
window.localStorage.removeItem(key)
if (!window.localStorage.getItem(key)) {
  console.log('Making data')
  let now = new Date()
  let data = {
    msg: 'data from server'
  }
  // 从后台取数存到本地
  // Vue.http.get('http://www.spotalliance.com/users').then(
  Vue.http.get('./src/store/testData.json', {}, {
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    emulateJSON: true
  }).then(
    function (response) {
      console.log('Get userList OK')
      console.log(response.data)
      data.userList = response.data
      console.log(data)
      console.log('data before save:')
      console.log(data)
      window.localStorage.setItem(key, JSON.stringify(data))
    },
    function (response) {
      console.log('failed')
    }
  )
}

export default {
  fetch () {
    console.log('Fetching data')
    console.log(JSON.parse(window.localStorage.getItem(key)))
    console.log('Fetched data')
    return JSON.parse(window.localStorage.getItem(key))
  },
  save (store) {
    console.log('Saving data')
    window.localStorage.setItem(key, JSON.stringify(store))
  },
}
