var Vue = require('vue.js');

Vue.use(require('vue-resource'));

new Vue({
  ready: function() {
    var resource = this.$resource('user');

    resource.get({id: 1}).then(function (response) {
      this.$set('item', resource.item)
    });

  }
})
