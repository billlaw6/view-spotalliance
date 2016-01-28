import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(require('vue-resource'));
Vue.use(Vues)

const state = {
  msg: 'vue store!'
}

const store = new Vuex.Store({

})

new Vue({
  data() {
    msg: "store data"
  },

  ready: function() {
    var resource = this.$resource('user');

    resource.get({id: 1}).then(function (response) {
      this.$set('item', resource.item)
    });
  }
})
